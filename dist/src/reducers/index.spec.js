'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('reducers', function () {
  describe('counter', function () {
    it('should provide the initial state', function () {
      expect((0, _index2.default)(undefined, {})).toBe(0);
    });

    it('should handle INCREMENT action', function () {
      expect((0, _index2.default)(1, { type: 'INCREMENT' })).toBe(2);
    });

    it('should handle DECREMENT action', function () {
      expect((0, _index2.default)(1, { type: 'DECREMENT' })).toBe(0);
    });

    it('should ignore unknown actions', function () {
      expect((0, _index2.default)(1, { type: 'unknown' })).toBe(1);
    });
  });
});