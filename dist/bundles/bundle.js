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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Button = function Button() {
  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var handleClick = function handleClick() {
    setData(data + 1);
    alert("button clicked " + data);
  };

  return /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: handleClick
  }, "Testing Button");
};

var Timer = function Timer() {
  var _useState = React.useState('00'),
      _useState2 = _slicedToArray(_useState, 2),
      second = _useState2[0],
      setSecond = _useState2[1];

  var _useState3 = React.useState('00'),
      _useState4 = _slicedToArray(_useState3, 2),
      minute = _useState4[0],
      setMinute = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isActive = _useState6[0],
      setIsActive = _useState6[1];

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      counter = _useState8[0],
      setCounter = _useState8[1];

  React.useEffect(function () {
    var intervalId;

    if (isActive) {
      intervalId = setInterval(function () {
        var secondCounter = counter % 60;
        var minuteCounter = Math.floor(counter / 60);
        var computedSecond = String(secondCounter).length === 1 ? "0".concat(secondCounter) : secondCounter;
        var computedMinute = String(minuteCounter).length === 1 ? "0".concat(minuteCounter) : minuteCounter;
        setSecond(computedSecond);
        setMinute(computedMinute);
        setCounter(function (counter) {
          return counter + 1;
        });
      }, 1000);
    }

    return function () {
      return clearInterval(intervalId);
    };
  }, [isActive, counter]);
  console.log(second);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "time"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "minute"
  }, minute), /*#__PURE__*/React__default["default"].createElement("span", null, ":"), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "second"
  }, second)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: function onClick() {
      return setIsActive(!isActive);
    },
    className: "start"
  }, isActive ? "Pause" : "Start"), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: function onClick() {
      return null;
    },
    className: "reset"
  }, "Reset")));
};

exports.Autocomplete = Autocomplete;
exports.Button = Button;
exports.Timer = Timer;
