'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Counter = require('./Counter');

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setup() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  };
  var component = (0, _enzyme.shallow)(_react2.default.createElement(_Counter2.default, _extends({ value: value }, actions)));

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  };
}

describe('Counter component', function () {
  it('should display count', function () {
    var _setup = setup(),
        p = _setup.p;

    expect(p.text()).toMatch(/^Clicked: 0 times/);
  });

  it('first button should call onIncrement', function () {
    var _setup2 = setup(),
        buttons = _setup2.buttons,
        actions = _setup2.actions;

    buttons.at(0).simulate('click');
    expect(actions.onIncrement).toBeCalled();
  });

  it('second button should call onDecrement', function () {
    var _setup3 = setup(),
        buttons = _setup3.buttons,
        actions = _setup3.actions;

    buttons.at(1).simulate('click');
    expect(actions.onDecrement).toBeCalled();
  });

  it('third button should not call onIncrement if the counter is even', function () {
    var _setup4 = setup(42),
        buttons = _setup4.buttons,
        actions = _setup4.actions;

    buttons.at(2).simulate('click');
    expect(actions.onIncrement).not.toBeCalled();
  });

  it('third button should call onIncrement if the counter is odd', function () {
    var _setup5 = setup(43),
        buttons = _setup5.buttons,
        actions = _setup5.actions;

    buttons.at(2).simulate('click');
    expect(actions.onIncrement).toBeCalled();
  });

  it('third button should call onIncrement if the counter is odd and negative', function () {
    var _setup6 = setup(-43),
        buttons = _setup6.buttons,
        actions = _setup6.actions;

    buttons.at(2).simulate('click');
    expect(actions.onIncrement).toBeCalled();
  });

  it('fourth button should call onIncrement in a second', function (done) {
    var _setup7 = setup(),
        buttons = _setup7.buttons,
        actions = _setup7.actions;

    buttons.at(3).simulate('click');
    setTimeout(function () {
      expect(actions.onIncrement).toBeCalled();
      done();
    }, 1000);
  });
});