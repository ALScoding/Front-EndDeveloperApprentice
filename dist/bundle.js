/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\GIT\\Front-EndDeveloperApprentice\\src\\index.js: Support for the experimental syntax 'jsx' isn't currently enabled (8:3):\n\n\u001b[0m \u001b[90m  6 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  7 | \u001b[39m\u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33mFirebaseContext\u001b[39m\u001b[33m.\u001b[39m\u001b[33mProvider\u001b[39m value\u001b[33m=\u001b[39m{\u001b[36mnew\u001b[39m \u001b[33mFirebase\u001b[39m()}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mFirebaseContext\u001b[39m\u001b[33m.\u001b[39m\u001b[33mProvider\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m  document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'root'\u001b[39m)\u001b[0m\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:790:17)\n    at Parser.raiseWithData (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:783:17)\n    at Parser.expectOnePlugin (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:9110:18)\n    at Parser.parseExprAtom (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:10523:22)\n    at Parser.parseExprSubscripts (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:10094:23)\n    at Parser.parseUpdate (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:10074:21)\n    at Parser.parseMaybeUnary (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:10063:17)\n    at Parser.parseExprOps (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:9933:23)\n    at Parser.parseMaybeConditional (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:9907:23)\n    at Parser.parseMaybeAssign (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:9870:21)\n    at C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:9837:39\n    at Parser.allowInAnd (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:11510:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:9837:17)\n    at Parser.parseExprListItem (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:11271:18)\n    at Parser.parseCallExpressionArguments (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:10300:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\GIT\\Front-EndDeveloperApprentice\\node_modules\\@babel\\parser\\lib\\index.js:10203:29)");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map