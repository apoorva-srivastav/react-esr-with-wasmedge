import * as std from 'std';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as http from 'wasi_http';
import * as net from 'wasi_net';
import App from '../src/App.js';
import { StaticRouter } from 'react-router-dom';
import { createServer, fetch } from 'http';


// data fetched at server will be shared by initial client side hydrated app
let ssrData = null;
const delay = ms => new Promise(res => setTimeout(res, ms));
  

async function handle_client(cs) {
  print('open:', cs.peer());
  let buffer = new http.Buffer();
  while (true) {
    try {
      let d = await cs.read();
      if (d === undefined || d.byteLength <= 0) {
        return;
      }
      buffer.append(d);
      let req = buffer.parseRequest();
      if (req instanceof http.WasiRequest) {
        handle_req(cs, req);
        break;
      }
    } catch (e) {
      print(e);
    }
  }
  print('end:', cs.peer());
}

function enlargeArray(oldArr, newLength) {
  let newArr = new Uint8Array(newLength);
  oldArr && newArr.set(oldArr, 0);
  return newArr;
}

async function handle_req(s, req) {
  print('uri:', req.uri)
  let resp = new http.WasiResponse();
  let content = '';
  if (req.uri === '/') {

    //mimick time taken for server data response
    await delay(300);
    console.log("Waited 3ms");
    
    content = std.loadFile('./build/index.html');
    const app = ReactDOMServer.renderToString(<StaticRouter><App data={ssrData} /></StaticRouter>);
    content = content.replace(
      '<script id="store"></script>',
      `<script> var ssrData = ${ssrData}</script>`
    )
    content = content.replace('<div id="root"></div>', 
    `<div id="root">${app}</div>`);
    
  } else {
    let chunk = 1000; // Chunk size of each reading
    let length = 0; // The whole length of the file
    let byteArray = null; // File content as Uint8Array

    // Read file into byteArray by chunk
    let file = std.open('./build' + req.uri, 'r');
    while (true) {
      byteArray = enlargeArray(byteArray, length + chunk);
      let readLen = file.read(byteArray.buffer, length, chunk);
      length += readLen;
      if (readLen < chunk) {
        break;
      }
    }
    content = byteArray.slice(0, length).buffer;
    file.close();
  }
  let contentType = 'text/html; charset=utf-8';
  if (req.uri.endsWith('.css')) {
    contentType = 'text/css; charset=utf-8';
  } else if (req.uri.endsWith('.js')) {
    contentType = 'text/javascript; charset=utf-8';
  } else if (req.uri.endsWith('.json')) {
    contentType = 'text/json; charset=utf-8';
  } else if (req.uri.endsWith('.ico')) {
    contentType = 'image/vnd.microsoft.icon';
  } else if (req.uri.endsWith('.png')) {
    contentType = 'image/png';
  }
  resp.headers = {
    'Content-Type': contentType
  };
  let r = resp.encode(content);
  s.write(r);
}

createServer((req, resp) => {
  const JsonData = std.loadFile('./data/db.json')
  req.on('data', (body) => {
    print("server: req.body=", body);
    print(typeof JsonData)

    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.end(JsonData)
  })
}).listen(7000, () => {
  print('listen 7000 ...\n');
})


const data_fetch = async() => {
  let resp = await fetch('http://127.0.0.1:7000/fetch', { method: 'POST', body: 'hello server' })
  ssrData = await resp.text()
  print('fetching complete')
}

async function server_start() {
  print('listen 8004...');
  try {
    await data_fetch()
    let s = new net.WasiTcpServer(8004);
    for (let i = 0; ; i++) {
      let cs = await s.accept();
      handle_client(cs);
    }
  } catch (e) {
    print(e);
  }
}

async function run_server() {
  print('server started...')
  server_start()
}


run_server()
