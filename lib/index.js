"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

function foo(x) {
  const y = "hoge";

  if (x) {
    return `${x}-${y}`;
  }

  return "default string";
}