import { createServer, request, fetch } from 'http';
import * as std from 'std';

export let respData;

createServer((req, resp) => {
  // print("server: req.httpVersion=", req.httpVersion);
  // print("server: req.url=", req.url);
  // print("server: req.method=", req.method);
  // print("server: req.headers=", Object.keys(req.headers));
  const JsonData = std.loadFile('./data/db.json')
  req.on('data', (body) => {
    print("server: req.body=", body);
    print()

    //resp.write('echo:')
    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.end(JsonData)
  })
}).listen(7000, () => {
  print('listen 7000 ...\n');
})

async function test_request() {
  let client = request({ href: "http://127.0.0.1:7000/request", method: 'POST' }, (resp) => {
    var data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    })
    resp.on('end', () => {
      print('request client recv:', data)
      print()
    })
  })

  client.end('hello server')
}

// export const test_fetch = async() => {
//   let resp = await fetch('http://127.0.0.1:7000/fetch', { method: 'POST', body: 'hello server' })
//   respData = await resp.text()
//   print('fetch client recv:', await resp.text())
//   print()
// }

// async function run_test() {
//   //await test_request()
//   await test_fetch()
//   //exit(0)
// }

//  run_test()

 
