"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/ProtectedRoute.js + 1 modules
var ProtectedRoute = __webpack_require__(7027);
// EXTERNAL MODULE: ./components/Navbar/index.js + 1 modules
var Navbar = __webpack_require__(9638);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Welcome/styles.js

const WelcomeContainer = (external_styled_components_default()).main`
  height: 100%;
`;
const NameContainer = (external_styled_components_default()).div`
  color: #8b8b8b;
  text-align: center;
  width: 45%;
  margin: 0 auto;
  padding: 85px 0px 90px 0px;
  position: relative;
  &:before {
    content: '';
    width: 120px;
    left: -30px;
    top: 80px;
    height: 120px;
    position: absolute;
    background-image: url('/patternTop.svg');
    @media (max-width: 820px) {
      display: none;
    }
  }
  &:after {
    content: '';
    width: 120px;
    right: -30px;
    bottom: 35px;
    height: 120px;
    position: absolute;
    background-image: url('/patternBottom.svg');
    @media (max-width: 820px) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 50px 0px;
  }
  @media (max-width: 1020px) {
    width: 90%;
    padding: 60px 0px;
  }

  @media (max-width: 880px) {
    width: 80%;
    padding: 60px 0px;
  }
`;
const Name = (external_styled_components_default()).span`
  color: ${(props)=>props.theme.color.blue
};
`;
const NameHeading = (external_styled_components_default()).h3`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 133%;
  /* or 37px */
  color: #8b8b8b;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
const SubHeading = (external_styled_components_default()).p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133%;
  text-align: center;
  letter-spacing: 0.04em;
  color: #8b8b8b;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const BlueText = (external_styled_components_default()).p`
  margin-top: 12px;

  color: ${(props)=>props.theme.color.blue
};
`;
const ButtonContainer = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 880px) {
    width: 90%;
    flex-direction: column;
    height: 150px;
    align-items: center;
    div {
      margin-top: 10px;
    }
  }
  @media (max-width: 1020px) {
    width: 80%;
  }
`;

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./components/Button/index.js + 1 modules
var Button = __webpack_require__(780);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Welcome/index.js





function Welcome({}) {
    const emoji = ":)";
    const { data: session  } = (0,react_.useSession)();
    const { user: { name =""  } = {}  } = session;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WelcomeContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NameContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NameHeading, {
                        children: [
                            "Hi ",
                            name && /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                                children: name
                            }),
                            ","
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubHeading, {
                        children: [
                            "We are so glad to have you here. You are just a click away from getting started with getReferred. So, what are you waiting for?",
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BlueText, {
                                children: [
                                    "Create a Job Opening and collect the responses already! ",
                                    emoji
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashboard/view",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                children: "View Previous Responses"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashboard/create",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                type: "secondry",
                                afterIcon: "arrowLeft",
                                altIconText: "an arrow point towards left",
                                children: "Create a Job Opening"
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Welcome = (Welcome);

;// CONCATENATED MODULE: ./pages/dashboard/index.js




function Dashboard() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProtectedRoute/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Welcome, {})
        ]
    });
};


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,638,27,780], () => (__webpack_exec__(5758)));
module.exports = __webpack_exports__;

})();