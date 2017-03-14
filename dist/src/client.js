'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _index = require('./reducers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Grab the state from a global variable injected into the server-generated HTML
var preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
var store = (0, _redux.createStore)(_index2.default, preloadedState);

var render = function render() {
    return _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_App2.default, null)
    ), document.getElementById('root'));
};

render();
store.subscribe(render);