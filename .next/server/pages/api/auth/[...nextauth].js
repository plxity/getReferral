"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 8296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/linkedin"
const linkedin_namespaceObject = require("next-auth/providers/linkedin");
var linkedin_default = /*#__PURE__*/__webpack_require__.n(linkedin_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "@next-auth/mongodb-adapter"
const mongodb_adapter_namespaceObject = require("@next-auth/mongodb-adapter");
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongodb.js

const uri = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const mongodb = (clientPromise);

;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js





/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    adapter: (0,mongodb_adapter_namespaceObject.MongoDBAdapter)(mongodb),
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        linkedin_default()({
            clientId: process.env.LINKEDIN_ID,
            clientSecret: process.env.LINKEDIN_SECRET
        }), 
    ],
    callbacks: {
        async session ({ session , token , user  }) {
            session.id = user.id;
            return session;
        }
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8296));
module.exports = __webpack_exports__;

})();