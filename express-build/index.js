/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./express/index.js":
/*!**************************!*\
  !*** ./express/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\n\n\nconst PORT = 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_5___default()();\nlet ssrData;\n// ...\n\nasync function data_fetch() {\n  // fetch data\n  let resp = await fetch('http://127.0.0.1:3000/fetch', {\n    method: 'POST',\n    body: 'get'\n  });\n  //mimic request from server\n  const data = await resp.text();\n  const delay = ms => new Promise(res => setTimeout(res, ms));\n  await delay(300);\n  console.log(\"Waited 3ms\");\n  ssrData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(data, 'utf8');\n}\nhttp__WEBPACK_IMPORTED_MODULE_2___default().createServer(function (req, res) {\n  const dbFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./data/db.json');\n  res.writeHead(200, {\n    'Content-Type': 'text/plain'\n  });\n  res.write(dbFile);\n  res.end();\n}).listen(3000, () => {\n  console.log('listening to 3000 for API...');\n});\napp.get('/', async (req, res) => {\n  await data_fetch();\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.StaticRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    data: ssrData\n  })));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n    return res.send(data.replace('<script id=\"store\"></script>', `<script>\n        var ssrData = ${JSON.stringify(ssrData)} </script>`).replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_5___default()[\"static\"]('./build'));\napp.listen(PORT, () => {\n  console.log('server started...');\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack://dojo-blog/./express/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar/Navbar */ \"./src/components/NavBar/Navbar.js\");\n/* harmony import */ var _domains_Home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domains/Home/Home */ \"./src/domains/Home/Home.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound */ \"./src/NotFound.js\");\n/* harmony import */ var _components_Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer/Footer.jsx */ \"./src/components/Footer/Footer.jsx\");\n/* harmony import */ var _domains_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domains/Cart/Cart */ \"./src/domains/Cart/Cart.js\");\n/* harmony import */ var _context_DataContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context/DataContext */ \"./src/context/DataContext.js\");\n/* harmony import */ var _domains_Products_ProductDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domains/Products/ProductDetails */ \"./src/domains/Products/ProductDetails.js\");\n\n\n\n\n\n\n\n\n\nfunction App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_DataContext__WEBPACK_IMPORTED_MODULE_7__.CartProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_domains_Home_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/cart\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_domains_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/product/:id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_domains_Products_ProductDetails__WEBPACK_IMPORTED_MODULE_8__.ProductDetails, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"*\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotFound__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__.Footer, null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n// export const Appp = <Router>\n// <div className=\"App\">\n//   <Navbar />\n//   <div className=\"content\">\n//     <Switch>\n//       <Route exact path=\"/\">\n//         <Home />\n//       </Route>\n//       <Route path=\"/create\">\n//         <Create />\n//       </Route>\n//       <Route path=\"/blogs/:id\">\n//         <BlogDetails />\n//       </Route>\n//       <Route path=\"*\">\n//         <NotFound />\n//       </Route>\n//     </Switch>\n//   </div>\n// </div>\n// </Router>\n\n//# sourceURL=webpack://dojo-blog/./src/App.js?");

/***/ }),

/***/ "./src/NotFound.js":
/*!*************************!*\
  !*** ./src/NotFound.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NotFound = () => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"not-found\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Sorry\"), /*#__PURE__*/React.createElement(\"p\", null, \"That page cannot be found\"), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {\n    to: \"/\"\n  }, \"Back to the homepage...\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://dojo-blog/./src/NotFound.js?");

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Logo_Logo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo/Logo.jsx */ \"./src/components/Logo/Logo.jsx\");\n\n\n\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"footer\", {\n    className: \"footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo_Logo_jsx__WEBPACK_IMPORTED_MODULE_2__.LogoIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"footer-item\"\n  }, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"footer-item\"\n  }, \"Contact @ customer_support.com\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"footer-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"Products\")))));\n};\n\n//# sourceURL=webpack://dojo-blog/./src/components/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/components/Logo/CartIcon.jsx":
/*!******************************************!*\
  !*** ./src/components/Logo/CartIcon.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartIcon: () => (/* binding */ CartIcon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CartIcon = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"24\",\n    height: \"24\",\n    viewBox: \"0 0 24 24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z\"\n  }));\n};\n\n//# sourceURL=webpack://dojo-blog/./src/components/Logo/CartIcon.jsx?");

/***/ }),

/***/ "./src/components/Logo/Logo.jsx":
/*!**************************************!*\
  !*** ./src/components/Logo/Logo.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogoIcon: () => (/* binding */ LogoIcon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LogoIcon = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    \"aria-label\": `logo`,\n    viewBox: \"0 0 32 28\",\n    className: \"logo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z\"\n  }));\n};\n\n//# sourceURL=webpack://dojo-blog/./src/components/Logo/Logo.jsx?");

/***/ }),

/***/ "./src/components/NavBar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Logo_Logo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo/Logo.jsx */ \"./src/components/Logo/Logo.jsx\");\n/* harmony import */ var _Logo_CartIcon_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo/CartIcon.jsx */ \"./src/components/Logo/CartIcon.jsx\");\n/* harmony import */ var _context_DataContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/DataContext.js */ \"./src/context/DataContext.js\");\n\n\n\n\n\nconst Navbar = () => {\n  const cartVal = (0,_context_DataContext_js__WEBPACK_IMPORTED_MODULE_4__.useGetData)();\n  const items = cartVal.length;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    className: \"navbar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo_Logo_jsx__WEBPACK_IMPORTED_MODULE_2__.LogoIcon, null)), \" Amaze Shop\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/cart\",\n    className: \"cart-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Logo_CartIcon_jsx__WEBPACK_IMPORTED_MODULE_3__.CartIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"cart-counter\"\n  }, items))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://dojo-blog/./src/components/NavBar/Navbar.js?");

/***/ }),

/***/ "./src/context/DataContext.js":
/*!************************************!*\
  !*** ./src/context/DataContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useGetData: () => (/* binding */ useGetData),\n/* harmony export */   useSetData: () => (/* binding */ useSetData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// Note: this file does not demonstrate a real data fetching strategy.\n// We only use this to simulate data fetching happening on the server\n// while the cache is populated on the client. In a real app, you would\n// instead use a data fetching library or Server Components for this.\n\nconst CartSetContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nconst CartGetContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nfunction CartProvider({\n  children\n}) {\n  const [contextValue, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartGetContext.Provider, {\n    value: contextValue\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartSetContext.Provider, {\n    value: setValue\n  }, children));\n}\nfunction useGetData() {\n  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CartGetContext);\n  return ctx;\n}\nfunction useSetData() {\n  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CartSetContext);\n  return ctx;\n}\n\n//# sourceURL=webpack://dojo-blog/./src/context/DataContext.js?");

/***/ }),

/***/ "./src/domains/Cart/Cart.js":
/*!**********************************!*\
  !*** ./src/domains/Cart/Cart.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/DataContext */ \"./src/context/DataContext.js\");\n\n\nconst Cart = () => {\n  const setCartValue = (0,_context_DataContext__WEBPACK_IMPORTED_MODULE_1__.useSetData)();\n  const cartValue = (0,_context_DataContext__WEBPACK_IMPORTED_MODULE_1__.useGetData)();\n  const [isOrderPlaced, setOrderPlaced] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex-parent\"\n  }, isOrderPlaced ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"item-center\"\n  }, \"Your order is placed !\") : cartValue.length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex-parent flex-item\"\n  }, cartValue.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: product.id,\n    className: \"product-preview  flex-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: product.image,\n    alt: \"product\",\n    height: \"50px\",\n    width: \"50px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-preview-desc\"\n  }, product.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"button\",\n    onClick: () => {\n      setOrderPlaced(true);\n      setCartValue([]);\n    }\n  }, \"Buy\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"item-center\"\n  }, \"Add a Product To Your Cart\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n\n//# sourceURL=webpack://dojo-blog/./src/domains/Cart/Cart.js?");

/***/ }),

/***/ "./src/domains/Home/Home.js":
/*!**********************************!*\
  !*** ./src/domains/Home/Home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Products_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Products/ProductList */ \"./src/domains/Products/ProductList.js\");\n\n\nconst Home = ({\n  data\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"home\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_ProductList__WEBPACK_IMPORTED_MODULE_1__.ProductList, {\n    data: data\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://dojo-blog/./src/domains/Home/Home.js?");

/***/ }),

/***/ "./src/domains/Products/ProductDetails.js":
/*!************************************************!*\
  !*** ./src/domains/Products/ProductDetails.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductDetails: () => (/* binding */ ProductDetails)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/DataContext */ \"./src/context/DataContext.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductDetails = () => {\n  const {\n    state: {\n      product\n    }\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();\n  const value = (0,_context_DataContext__WEBPACK_IMPORTED_MODULE_1__.useSetData)();\n  const val = (0,_context_DataContext__WEBPACK_IMPORTED_MODULE_1__.useGetData)();\n  const addSizeToProduct = value => {\n    console.log('here', value);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: product.id,\n    className: \"product-detail-preview flex-detail-parent\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: product.image,\n    alt: \"product\",\n    className: \"product-detail-image flex-33\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-preview-detail flex-33\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-desc flex-detail-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, product.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-desc flex-detail-item\"\n  }, \"Product Description: \", product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-size-buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n    className: \"margin-10\"\n  }, \"Select Size\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"radio-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"radio\",\n    id: \"a25\",\n    name: \"check-substitution-2\",\n    checked: true,\n    onClick: () => addSizeToProduct('Small')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: \"btn btn-default\",\n    for: \"a25\"\n  }, \"S\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"radio-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"radio\",\n    id: \"a50\",\n    name: \"check-substitution-2\",\n    onClick: () => addSizeToProduct('Medium')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: \"btn btn-default\",\n    for: \"a50\"\n  }, \"M\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"radio-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"radio\",\n    id: \"a75\",\n    name: \"check-substitution-2\",\n    onClick: () => addSizeToProduct('Large')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: \"btn btn-default\",\n    for: \"a75\"\n  }, \"L\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"button product-detail-cart-button\",\n    onClick: () => {\n      val.push(product);\n      value([...val]);\n    }\n  }, \"Add To Cart\"))));\n};\n\n//# sourceURL=webpack://dojo-blog/./src/domains/Products/ProductDetails.js?");

/***/ }),

/***/ "./src/domains/Products/ProductList.js":
/*!*********************************************!*\
  !*** ./src/domains/Products/ProductList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductList: () => (/* binding */ ProductList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductList = ({\n  data\n}) => {\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();\n  const products = typeof data === 'string' ? JSON.parse(data).products : data.products;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: product.id,\n    className: \"product-preview flex-parent\",\n    onClick: () => history.push({\n      pathname: `/product/${product.id}`,\n      state: {\n        product\n      }\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: product.image,\n    alt: \"product\",\n    className: \"flex-item product-image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-preview-desc flex-item\"\n  }, product.title))));\n};\n\n//# sourceURL=webpack://dojo-blog/./src/domains/Products/ProductList.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./express/index.js");
/******/ 	
/******/ })()
;