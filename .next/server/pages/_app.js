"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./theme.js
const theme = {
    color: {
        orange: "#FB980D",
        blue: "#0428C5",
        lightGray: "#8B8B8B",
        darkGray: "#3B3B3B",
        white: "#FFFFFF"
    },
    fonts: [
        "sans-serif",
        "Roboto"
    ],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};
/* harmony default export */ const theme_0 = (theme);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./globalStyles.js

const GlobalStyle = external_styled_components_.createGlobalStyle`
@font-face {
  font-family: Gliroy;
  src: url('/fonts/Gilroy-Light.otf') format("opentype");
}
@font-face {
  font-family: Gliroy;
  src: url('/fonts/Gilroy-ExtraBold.otf') format("opentype");
  font-weight: bold;
}
`;
/* harmony default export */ const globalStyles = (GlobalStyle);

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    const router = (0,router_.useRouter)();
    if (session) {
        const { pathname  } = router.push(`/${pathname}`);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
            theme: theme_0,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(globalStyles, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7303));
module.exports = __webpack_exports__;

})();