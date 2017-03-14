'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _Counter = require('./components/Counter');

var _Counter2 = _interopRequireDefault(_Counter);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);
var rootEl = document.getElementById('root');

var render = function render() {
  return _reactDom2.default.render(_react2.default.createElement(_Counter2.default, {
    value: store.getState(),
    onIncrement: function onIncrement() {
      return store.dispatch({ type: 'INCREMENT' });
    },
    onDecrement: function onDecrement() {
      return store.dispatch({ type: 'DECREMENT' });
    }
  }), rootEl);
};

render();
store.subscribe(render);