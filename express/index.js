import path from 'path';
import fs from 'fs';
import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';

const PORT = 3006;
const app = express();
let ssrData;
// ...

async function data_fetch() {
  // fetch data
  let resp = await fetch('http://127.0.0.1:3000/fetch', { method: 'POST', body: 'get' })
  //mimic request from server
  const data = await resp.text()
  const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(300);
  console.log("Waited 3ms");
  ssrData = fs.readFileSync(data, 'utf8')
}

http.createServer(function (req, res) {
  const dbFile = path.resolve('./data/db.json');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(dbFile);
  res.end();
}).listen(3000, () => {
  console.log('listening to 3000 for API...')
});

app.get('/', async (req, res) => {
  await data_fetch()

  const app = ReactDOMServer.renderToString(<StaticRouter><App data={ssrData} /></StaticRouter>);
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(
      data.replace('<script id="store"></script>', `<script>
        var ssrData = ${JSON.stringify(ssrData)} </script>`).replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log('server started...')
  console.log(`Server is listening on port ${PORT}`);
});