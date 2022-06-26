/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./globalStyles.js":
/*!*************************!*\
  !*** ./globalStyles.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n@font-face {\n  font-family: Gliroy;\n  src: url('/fonts/Gilroy-Light.otf') format(\"opentype\");\n  font-display: swap;\n}\n@font-face {\n  font-family: Gliroy;\n  src: url('/fonts/Gilroy-ExtraBold.otf') format(\"opentype\");\n  font-weight: bold;\n  font-display: swap;\n}\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nbG9iYWxTdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRXRELE1BQU1DLFdBQVcsR0FBR0QsZ0VBQWlCLENBQUM7Ozs7Ozs7Ozs7OztBQVl0QyxDQUFDO0FBRUQsaUVBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmVybWUvLi9nbG9iYWxTdHlsZXMuanM/M2Y1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogR2xpcm95O1xuICBzcmM6IHVybCgnL2ZvbnRzL0dpbHJveS1MaWdodC5vdGYnKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBHbGlyb3k7XG4gIHNyYzogdXJsKCcvZm9udHMvR2lscm95LUV4dHJhQm9sZC5vdGYnKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./globalStyles.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ \"./theme.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globalStyles */ \"./globalStyles.js\");\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (session) {\n        const { pathname  } = router.push(`/${pathname}`);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n            theme: _theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_globalStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/apoorvtaneja/Desktop/referme.today/pages/_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/apoorvtaneja/Desktop/referme.today/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apoorvtaneja/Desktop/referme.today/pages/_app.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apoorvtaneja/Desktop/referme.today/pages/_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNtQjtBQUNWO0FBQ1g7QUFDcUI7QUFDUjtBQUUxQyxTQUFTSyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQUdELFNBQVMsRUFBRSxHQUFFLEVBQUU7SUFDbEUsTUFBTUUsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLElBQUlPLE9BQU8sRUFBRTtRQUNYLE1BQU0sRUFBRUUsUUFBUSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFRCxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QscUJBQ0UsOERBQUNWLDREQUFlO1FBQUNRLE9BQU8sRUFBRUEsT0FBTztrQkFDL0IsNEVBQUNMLDREQUFhO1lBQUNELEtBQUssRUFBRUEsOENBQUs7OzhCQUN6Qiw4REFBQ0UscURBQVc7Ozs7d0JBQUc7OEJBQ2YsOERBQUNFLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7OztnQkFDZDs7Ozs7WUFDQSxDQUNsQjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmVybWUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL2dsb2JhbFN0eWxlcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaWYgKHNlc3Npb24pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXIucHVzaChgLyR7cGF0aG5hbWV9YCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiR2xvYmFsU3R5bGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJyb3V0ZXIiLCJwYXRobmFtZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst theme = {\n    color: {\n        orange: \"#FB980D\",\n        blue: \"#0428C5\",\n        lightGray: \"#8B8B8B\",\n        darkGray: \"#3B3B3B\",\n        white: \"#FFFFFF\"\n    },\n    fonts: [\n        \"sans-serif\",\n        \"Roboto\"\n    ],\n    fontSizes: {\n        small: \"1em\",\n        medium: \"2em\",\n        large: \"3em\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHO0lBQ1pDLEtBQUssRUFBRTtRQUNMQyxNQUFNLEVBQUUsU0FBUztRQUNqQkMsSUFBSSxFQUFFLFNBQVM7UUFDZkMsU0FBUyxFQUFFLFNBQVM7UUFDcEJDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEQyxLQUFLLEVBQUU7UUFBQyxZQUFZO1FBQUUsUUFBUTtLQUFDO0lBQy9CQyxTQUFTLEVBQUU7UUFDVEMsS0FBSyxFQUFFLEtBQUs7UUFDWkMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsS0FBSyxFQUFFLEtBQUs7S0FDYjtDQUNGO0FBRUQsaUVBQWVYLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZmVybWUvLi90aGVtZS5qcz8yOTYwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRoZW1lID0ge1xuICBjb2xvcjoge1xuICAgIG9yYW5nZTogJyNGQjk4MEQnLFxuICAgIGJsdWU6ICcjMDQyOEM1JyxcbiAgICBsaWdodEdyYXk6ICcjOEI4QjhCJyxcbiAgICBkYXJrR3JheTogJyMzQjNCM0InLFxuICAgIHdoaXRlOiAnI0ZGRkZGRidcbiAgfSxcbiAgZm9udHM6IFsnc2Fucy1zZXJpZicsICdSb2JvdG8nXSxcbiAgZm9udFNpemVzOiB7XG4gICAgc21hbGw6ICcxZW0nLFxuICAgIG1lZGl1bTogJzJlbScsXG4gICAgbGFyZ2U6ICczZW0nLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvciIsIm9yYW5nZSIsImJsdWUiLCJsaWdodEdyYXkiLCJkYXJrR3JheSIsIndoaXRlIiwiZm9udHMiLCJmb250U2l6ZXMiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();