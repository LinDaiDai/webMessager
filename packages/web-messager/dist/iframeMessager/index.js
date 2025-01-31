"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parent = require("./parent");

Object.keys(_parent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _parent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parent[key];
    }
  });
});

var _child = require("./child");

Object.keys(_child).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _child[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _child[key];
    }
  });
});