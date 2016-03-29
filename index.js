'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentTeaser = require('@economist/component-teaser');

var _economistComponentTeaser2 = _interopRequireDefault(_economistComponentTeaser);

var TeaserList = (function (_React$Component) {
  _inherits(TeaserList, _React$Component);

  function TeaserList() {
    _classCallCheck(this, TeaserList);

    _React$Component.apply(this, arguments);
  }

  TeaserList.prototype.render = function render() {
    var teaserList = [];
    this.props.list.map(function (teaser) {
      teaserList.push(_react2['default'].createElement(_economistComponentTeaser2['default'], _extends({}, teaser, { key: teaser.key || teaser.teaserId })));
    });
    return _react2['default'].createElement(
      'div',
      { className: 'teaser-list' },
      teaserList
    );
  };

  _createClass(TeaserList, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        list: _react2['default'].PropTypes.array.isRequired
      };
    }
  }]);

  return TeaserList;
})(_react2['default'].Component);

exports['default'] = TeaserList;
module.exports = exports['default'];