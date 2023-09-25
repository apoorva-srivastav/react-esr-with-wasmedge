# React SSR with Wasmedge

This repository has an implementation of using wasmedge and quickjs runtime for rendering react app on server side.

Check out the [Wasmedge ](https://shoppe-image-wasmedge-b4xntowapq-de.a.run.app) and the traditional [NodeJS](https://shoppe-image-nodejs-b4xntowapq-de.a.run.app/) apps running on google cloud (edge) using docker images.

## Resources

WebAssembly vs JS: https://snipcart.com/blog/webassembly-vs-javascript

What is wasedge runtime: https://wasmedge.org/docs/category/what-is-wasmedge

Get started with Wasmedge for JS : https://wasmedge.org/docs/develop/javascript/intro
			https://www.secondstate.io/articles/wasmedge-joins-cncf/

Wasmedge with docker: https://wasmedge.org/docs/develop/deploy/using-wasmedge-in-docker#run-a-lightweight-nodejs-server

What is WASI: https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/

Fastly: https://blog.suborbital.dev/foundations-wasm-in-golang-is-fantastic
			https://www.fastly.com/blog/run-your-next-js-app-on-fastly
   
WasmFiddle: https://wasdk.github.io/WasmFiddle/

## App Structure

The react application for both the wasmedge and node implemenation remains the same, just the server implemenation differs.
Plain react app with `src` containing the react app implemenation, `wasmedge-server/index.js` containg server implemenation for wasmedge and `express/index.js` containing server implemenation for NodeJS.

There is a Dockerfile for creating images for both the implemenations which can be used to be uploaded on any edge function like AWS or Google Cloud etc.

## Getting Started

Install wasmedge : https://wasmedge.org/docs/start/install#install

Install rust

Clone Wasmedge-quickjs: https://wasmedge.org/docs/develop/javascript/hello_world  and copy the modules folder in the working repository

Start with ,

``npm i``

To run the app on local using wasmedge, do

``npm run build``

``npm run dev:build-server``

``npm run dev:start-server``

And your app will be up and running on your http://localhost:8004

To run the nodejs implemenation, do

``npm run build``

`npm run dev:build-server-express`

`npm run dev:start-server-express`


And your app will be up and running on your http://localhost:3006
