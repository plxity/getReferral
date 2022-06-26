"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Navbar/index.js + 1 modules
var Navbar = __webpack_require__(9638);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Button/index.js + 1 modules
var Button = __webpack_require__(780);
;// CONCATENATED MODULE: ./components/Main/styles.js


const MainContainer = (external_styled_components_default()).main`
  display: flex;
  padding: 108px 96px;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column-reverse;
    padding: 40px 50px;
  }
  .main-logo {
    @media (max-width: 820px) {
      width: 300px;
      height: 300px;
      align-self: center;
    }
    @media (max-width: 400px) {
      width: 250px;
      height: 250px;
      align-self: center;
    }
  }
`;
const Heading = (external_styled_components_default()).h1`
  font-size: 40px;
  line-height: 106.5%;
  font-family: Gliroy;
  font-weight: normal;
  @media (max-width: 400px) {
    font-size: 26px;
    text-align: center;
    margin-top: 30px;
  }
`;
const SubHeading = (external_styled_components_default()).p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  margin-top: 10px;
  font-weight: 500;
  width: 70%;
  color: ${(props)=>props.theme.color.lightGray
};
  @media (max-width: 400px) {
    width: 100%;
    text-align: center;
    font-size: 14px;
  }
`;
const HeadingContainer = (external_styled_components_default()).div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;
const BoldBlue = (external_styled_components_default()).span`
  color: ${(props)=>props.theme.color.blue
};
  font-weight: bold;
`;
const OrangeText = (external_styled_components_default()).span`
  color: ${(props)=>props.theme.color.orange
};
`;
const ButtonContainer = (external_styled_components_default()).div`
  margin-top: auto;
  @media (max-width: 400px) {
    margin-top: 30px;
  }
`;

// EXTERNAL MODULE: external "@radix-ui/react-dialog"
var react_dialog_ = __webpack_require__(3363);
;// CONCATENATED MODULE: ./components/LoginModal/styles.js


const StyledOverlay = external_styled_components_default()(react_dialog_.Overlay)`
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
`;
const StyledContent = external_styled_components_default()(react_dialog_.Content)`
  background: white;
  height: auto;
  width: 380px;
  padding: 36px;
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  min-height: 400px;
  border: 0.5px solid ${(props)=>props.theme.color.blue
};
  box-shadow: 0px 4px 4px rgba(4, 40, 197, 0.1);
  border-radius: 16px;
  transform: translate(-50%, -50%);
`;
const CloseIcon = (external_styled_components_default()).img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 18px;
  height: 18px;
`;
const styles_ButtonContainer = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  button {
    width: 250px;
    height: 50px;
    margin-top: 20px;
  }
`;
const LoginButton = (external_styled_components_default()).button`
  width: 340px;
  height: 58px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 40px;
  border: 1px solid ${(props)=>props.theme.color.blue
};
  color: ${(props)=>props.theme.color.blue
};
  filter: drop-shadow(0px 4px 4px rgba(139, 139, 139, 0.2));
  img {
    vertical-align: middle;
    margin-left: 6px;
    width: 16px;
    height: 16px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
`;
const CreateProfile = (external_styled_components_default()).button`
  width: 340px;
  height: 58px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  background: ${(props)=>props.theme.color.blue
};
  border: none;
  border-radius: 40px;
  border: 1px solid ${(props)=>props.theme.color.blue
};
  color: ${(props)=>props.theme.color.white
};
  filter: drop-shadow(0px 4px 4px rgba(139, 139, 139, 0.2));
  img {
    vertical-align: middle;
    margin-left: 6px;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
  img {
    margin-left: 4px;
  }
`;

;// CONCATENATED MODULE: ./components/LoginModal/index.js




function Content({ children , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_.Portal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledOverlay, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledContent, {
                ...props,
                children: children
            })
        ]
    });
}
const DialogContent = Content;
const LoginModal = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_dialog_.Root, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_.Trigger, {
                asChild: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CreateProfile, {
                    children: [
                        "Create a Job Opening",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/icons/arrowLeft.svg",
                            alt: "arrow pointing towards left"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/loginBro.svg"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_ButtonContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoginButton, {
                                onClick: ()=>(0,react_.signIn)("google")
                                ,
                                children: [
                                    "Login with Google",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/icons/google.svg",
                                        alt: "login with google icon"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoginButton, {
                                onClick: ()=>(0,react_.signIn)("linkedin")
                                ,
                                children: [
                                    "Login with LinkedIn",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/icons/linkedIn.svg",
                                        alt: "login with linkedin icon"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_dialog_.Close, {
                        asChild: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon, {
                            src: "/icons/closeIcon.svg",
                            alt: "A cross icon for closing the login modal"
                        })
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const components_LoginModal = (LoginModal);

;// CONCATENATED MODULE: ./components/Main/index.js




const triggerModal = /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
    type: "primary",
    afterIcon: "arrowLeft",
    altIconText: "Arrow icon pointing towards left",
    children: "Create a Job Opening"
});
function Main() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeadingContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Heading, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BoldBlue, {
                                children: "Reviewing"
                            }),
                            " and ",
                            /*#__PURE__*/ jsx_runtime_.jsx(BoldBlue, {
                                children: "Listing"
                            }),
                            " job applications made easy for you"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubHeading, {
                        children: [
                            "Manage your numerous job refferals using refer me.",
                            /*#__PURE__*/ jsx_runtime_.jsx(OrangeText, {
                                children: " Free, Convenient "
                            }),
                            " &",
                            /*#__PURE__*/ jsx_runtime_.jsx(OrangeText, {
                                children: " Easy to Use."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_LoginModal, {
                            triggerModal: triggerModal
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "mainLogo.svg",
                alt: "A image of girl reading different resumes",
                className: "main-logo"
            })
        ]
    });
}
/* harmony default export */ const components_Main = (Main);

;// CONCATENATED MODULE: ./components/Footer/styles.js

const FooterContainer = (external_styled_components_default()).footer`
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 20px;
  height: 30px;
  span{
    vertical-align: middle;
  }
  img {
    vertical-align: middle;
    margin-left: 10px;
    height: 100%;
  }
`;

;// CONCATENATED MODULE: ./components/Footer/index.js


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Powered by"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/icons/peerlistLogo.svg",
                alt: "Peerlist logo"
            })
        ]
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/index.js







function Home() {
    const { status  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    // loading state
    if (status === "loading") {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    if (status === "authenticated") {
        router.push("/dashboard");
        return "";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "ReferMe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Referrals made easy"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/logo.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Main, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};


/***/ }),

/***/ 3363:
/***/ ((module) => {

module.exports = require("@radix-ui/react-dialog");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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
var __webpack_exports__ = __webpack_require__.X(0, [638,780], () => (__webpack_exec__(3)));
module.exports = __webpack_exports__;

})();