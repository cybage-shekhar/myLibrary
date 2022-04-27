'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Autocomplete = function Autocomplete() {
  return /*#__PURE__*/React__default["default"].createElement("input", {
    type: "text",
    name: "name"
  });
};

var Button = function Button() {
  return /*#__PURE__*/React__default["default"].createElement("button", null, "Testing Button");
};

exports.Autocomplete = Autocomplete;
exports.Button = Button;
