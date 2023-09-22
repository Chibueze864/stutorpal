"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "(api)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDzYQmD4m1YTOK5Yfd1U93dMDJ51qV6uYI\",\n    authDomain: \"official-site-23bc8.firebaseapp.com\",\n    projectId: \"official-site-23bc8\",\n    storageBucket: \"official-site-23bc8.appspot.com\",\n    messagingSenderId: \"128397216915\",\n    appId: \"1:128397216915:web:5ea9fb2f20926396929166\",\n    measurementId: \"G-TYQ4JX6CD1\"\n};\n// Initialize Firebase\n// const app = initializeApp(firebaseConfig);\n// const db = getFirestore(app);\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// const analytics = getAnalytics(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0s7QUFDQTtBQUNaO0FBQ0Y7QUFDUjtBQUU1Qiw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxtRUFBbUU7QUFDbkUsTUFBTUssY0FBYyxHQUFHO0lBRXJCQyxNQUFNLEVBQUUseUNBQXlDO0lBRWpEQyxVQUFVLEVBQUUscUNBQXFDO0lBRWpEQyxTQUFTLEVBQUUscUJBQXFCO0lBRWhDQyxhQUFhLEVBQUUsaUNBQWlDO0lBRWhEQyxpQkFBaUIsRUFBRSxjQUFjO0lBRWpDQyxLQUFLLEVBQUUsMkNBQTJDO0lBRWxEQyxhQUFhLEVBQUUsY0FBYztDQUU5QjtBQUdELHNCQUFzQjtBQUV0Qiw2Q0FBNkM7QUFDN0MsZ0NBQWdDO0FBR2hDLHNCQUFzQjtBQUN0QixNQUFNQyxHQUFHLEdBQUdiLDJEQUFhLENBQUNLLGNBQWMsQ0FBQztBQUd6Qyx1Q0FBdUM7QUFFdkMsTUFBTVMsRUFBRSxHQUFHWixnRUFBWSxDQUFDVyxHQUFHLENBQUM7QUFFNUIsTUFBTUUsSUFBSSxHQUFHWixzREFBTyxDQUFDVSxHQUFHLENBQUM7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbmZpZy5qcz9jMmIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQge2dldEF1dGh9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG5cbiAgYXBpS2V5OiBcIkFJemFTeUR6WVFtRDRtMVlUT0s1WWZkMVU5M2RNREo1MXFWNnVZSVwiLFxuXG4gIGF1dGhEb21haW46IFwib2ZmaWNpYWwtc2l0ZS0yM2JjOC5maXJlYmFzZWFwcC5jb21cIixcblxuICBwcm9qZWN0SWQ6IFwib2ZmaWNpYWwtc2l0ZS0yM2JjOFwiLFxuXG4gIHN0b3JhZ2VCdWNrZXQ6IFwib2ZmaWNpYWwtc2l0ZS0yM2JjOC5hcHBzcG90LmNvbVwiLFxuXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEyODM5NzIxNjkxNVwiLFxuXG4gIGFwcElkOiBcIjE6MTI4Mzk3MjE2OTE1OndlYjo1ZWE5ZmIyZjIwOTI2Mzk2OTI5MTY2XCIsXG5cbiAgbWVhc3VyZW1lbnRJZDogXCJHLVRZUTRKWDZDRDFcIlxuXG59O1xuXG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcblxuLy8gY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4vLyBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cbi8vIGNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApO1xuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG5cbiBleHBvcnQge2FwcCwgYXV0aCwgZGJ9O1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBbmFseXRpY3MiLCJnZXRGaXJlc3RvcmUiLCJnZXRBdXRoIiwiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"(api)/./config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// import NextAuth from 'next-auth'\n// import AppleProvider from 'next-auth/providers/apple'\n// import FacebookProvider from 'next-auth/providers/facebook'\n// import GoogleProvider from 'next-auth/providers/google'\n// import EmailProvider from 'next-auth/providers/email'\n// export default NextAuth({\n//   providers: [\n//     // OAuth authentication providers...\n//     // AppleProvider({\n//     //   clientId: process.env.APPLE_ID,\n//     //   clientSecret: process.env.APPLE_SECRET\n//     // }),\n//     // FacebookProvider({\n//     //   clientId: process.env.FACEBOOK_ID,\n//     //   clientSecret: process.env.FACEBOOK_SECRET\n//     // }),\n//     GoogleProvider({\n//       clientId: \"983801751861-7en9crclv5635k1lbdqakoj2ekdng3nc.apps.googleusercontent.com\",\n//       clientSecret: \"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\"\n//     }),\n//     // Passwordless / email sign in\n//   ]\n// })\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    pages: {\n        signIn: \"/signin\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {},\n            async authorize (credentials) {\n                return await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_config__WEBPACK_IMPORTED_MODULE_3__.auth, credentials.email || \"\", credentials.password || \"\").then((userCredential)=>{\n                    if (userCredential.user) {\n                        return userCredential.user;\n                    }\n                    return null;\n                }).catch((error)=>console.log(error)).catch((error)=>{\n                    const errorCode = error.code;\n                    const errorMessage = error.message;\n                    console.log(error);\n                });\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLHdEQUF3RDtBQUN4RCw4REFBOEQ7QUFDOUQsMERBQTBEO0FBQzFELHdEQUF3RDtBQUV4RCw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQyx5QkFBeUI7QUFDekIsMkNBQTJDO0FBQzNDLGtEQUFrRDtBQUNsRCxhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLDhDQUE4QztBQUM5QyxxREFBcUQ7QUFDckQsYUFBYTtBQUNiLHVCQUF1QjtBQUN2Qiw4RkFBOEY7QUFDOUYsNERBQTREO0FBQzVELFVBQVU7QUFDVixzQ0FBc0M7QUFFdEMsTUFBTTtBQUNOLEtBQUs7QUFFMkI7QUFDa0M7QUFDVDtBQUNuQjtBQUUvQixNQUFNSSxXQUFXLEdBQUc7SUFDekIsaURBQWlEO0lBQ2pEQyxLQUFLLEVBQUU7UUFDTEMsTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDREMsU0FBUyxFQUFFO1FBQ1ROLHNFQUFtQixDQUFDO1lBQ2xCTyxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNQyxTQUFTLEVBQUNELFdBQVcsRUFBRTtnQkFDM0IsT0FBTyxNQUFNUCx5RUFBMEIsQ0FBQ0MseUNBQUksRUFBRSxXQUFZLENBQUVRLEtBQUssSUFBSSxFQUFFLEVBQUUsV0FBWSxDQUFFQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQ25HQyxJQUFJLENBQUNDLENBQUFBLGNBQWMsR0FBSTtvQkFDdEIsSUFBSUEsY0FBYyxDQUFDQyxJQUFJLEVBQUU7d0JBQ3ZCLE9BQU9ELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDO29CQUM3QixDQUFDO29CQUNELE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLENBQUFBLEtBQUssR0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFFLENBQzVDRCxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLO29CQUNoQixNQUFNRyxTQUFTLEdBQUdILEtBQUssQ0FBQ0ksSUFBSTtvQkFDNUIsTUFBTUMsWUFBWSxHQUFHTCxLQUFLLENBQUNNLE9BQU87b0JBQ2xDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ0MsQ0FBQztTQUNGLENBQUM7S0FDSDtDQUNGO0FBQ0QsaUVBQWVqQixnREFBUSxDQUFDSSxXQUFXLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbi8vIGltcG9ydCBBcHBsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvYXBwbGUnXG4vLyBpbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rJ1xuLy8gaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuLy8gaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbCdcblxuLy8gZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuLy8gICBwcm92aWRlcnM6IFtcbi8vICAgICAvLyBPQXV0aCBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnMuLi5cbi8vICAgICAvLyBBcHBsZVByb3ZpZGVyKHtcbi8vICAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BUFBMRV9JRCxcbi8vICAgICAvLyAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVBQTEVfU0VDUkVUXG4vLyAgICAgLy8gfSksXG4vLyAgICAgLy8gRmFjZWJvb2tQcm92aWRlcih7XG4vLyAgICAgLy8gICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXG4vLyAgICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVFxuLy8gICAgIC8vIH0pLFxuLy8gICAgIEdvb2dsZVByb3ZpZGVyKHtcbi8vICAgICAgIGNsaWVudElkOiBcIjk4MzgwMTc1MTg2MS03ZW45Y3JjbHY1NjM1azFsYmRxYWtvajJla2RuZzNuYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLFxuLy8gICAgICAgY2xpZW50U2VjcmV0OiBcIkdPQ1NQWC1qajZLX2VFU1hWY3N3LTYyM1JBdE9oZkVtSW9KXCJcbi8vICAgICB9KSxcbi8vICAgICAvLyBQYXNzd29yZGxlc3MgLyBlbWFpbCBzaWduIGluXG4gICAgXG4vLyAgIF1cbi8vIH0pXG5cbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQge3NpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7YXV0aH0gIGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL3NpZ25pbidcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHt9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCAoY3JlZGVudGlhbHMpLmVtYWlsIHx8ICcnLCAoY3JlZGVudGlhbHMpLnBhc3N3b3JkIHx8ICcnKVxuICAgICAgICAgIC50aGVuKHVzZXJDcmVkZW50aWFsID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyQ3JlZGVudGlhbC51c2VyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1c2VyQ3JlZGVudGlhbC51c2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKGNvbnNvbGUubG9nKGVycm9yKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICBdLFxufVxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiYXV0aCIsImF1dGhPcHRpb25zIiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwidXNlciIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();