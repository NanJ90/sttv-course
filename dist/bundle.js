webpackJsonp([0],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMaterialize = __webpack_require__(44);\n\nvar _SubmitBtn = __webpack_require__(107);\n\nvar _SubmitBtn2 = _interopRequireDefault(_SubmitBtn);\n\nvar _Subsection = __webpack_require__(109);\n\nvar _Subsection2 = _interopRequireDefault(_Subsection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Section = function (_Component) {\n  _inherits(Section, _Component);\n\n  function Section() {\n    _classCallCheck(this, Section);\n\n    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this));\n\n    _this.state = {\n      name: '',\n      subsection: [{\n        subname: ''\n      }]\n    };\n    return _this;\n  }\n\n  _createClass(Section, [{\n    key: 'handleOnChange',\n    value: function handleOnChange(e, idx) {\n      var subsection = this.state.subsection;\n      subsection[idx].subname = e.target.value;\n      this.forceUpdate();\n    }\n  }, {\n    key: 'addNewSubsection',\n    value: function addNewSubsection() {\n      this.setState({\n        subsection: this.state.subsection.concat([{ subname: '' }])\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // console.log(this.state);\n      return _react2.default.createElement(\n        'div',\n        { style: styles.containerStyle },\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Course:'\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, { s: 12 })\n        ),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Upload'\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '#' },\n            _react2.default.createElement(\n              _reactMaterialize.Icon,\n              { large: true },\n              'folder'\n            )\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, { s: 12, type: 'radio', value: 'add_to_trial', label: 'included in trial' })\n        ),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Worksheet:'\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '#' },\n            _react2.default.createElement(\n              _reactMaterialize.Icon,\n              { large: true },\n              'folder'\n            )\n          )\n        ),\n        _react2.default.createElement(_Subsection2.default, {\n          subsection: this.state.subsection,\n          handleOnChange: this.handleOnChange.bind(this),\n          addNewSubsection: this.addNewSubsection.bind(this)\n        }),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            _reactMaterialize.Button,\n            null,\n            _react2.default.createElement(_SubmitBtn2.default, { submit: 'submit' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Section;\n}(_react.Component);\n\nvar styles = {\n  containerStyle: {\n    textAlign: 'center'\n  }\n};\n\nexports.default = Section;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzPzc0NWMiXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0YXRlIiwibmFtZSIsInN1YnNlY3Rpb24iLCJzdWJuYW1lIiwiZSIsImlkeCIsInRhcmdldCIsInZhbHVlIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsImNvbmNhdCIsInN0eWxlcyIsImNvbnRhaW5lclN0eWxlIiwiaGFuZGxlT25DaGFuZ2UiLCJiaW5kIiwiYWRkTmV3U3Vic2VjdGlvbiIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixxQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsa0JBQVksQ0FDUjtBQUNFQyxpQkFBUztBQURYLE9BRFE7QUFGRCxLQUFiO0FBRlk7QUFVYjs7OzttQ0FDY0MsQyxFQUFHQyxHLEVBQUs7QUFDckIsVUFBTUgsYUFBYSxLQUFLRixLQUFMLENBQVdFLFVBQTlCO0FBQ0FBLGlCQUFXRyxHQUFYLEVBQWdCRixPQUFoQixHQUEwQkMsRUFBRUUsTUFBRixDQUFTQyxLQUFuQztBQUNBLFdBQUtDLFdBQUw7QUFDRDs7O3VDQUVrQjtBQUNqQixXQUFLQyxRQUFMLENBQWM7QUFDVlAsb0JBQVksS0FBS0YsS0FBTCxDQUFXRSxVQUFYLENBQXNCUSxNQUF0QixDQUE2QixDQUFDLEVBQUVQLFNBQVMsRUFBWCxFQUFELENBQTdCO0FBREYsT0FBZDtBQUdEOzs7NkJBRVE7QUFDUDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssT0FBT1EsT0FBT0MsY0FBbkI7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSxtRUFBTyxHQUFHLEVBQVY7QUFGRixTQUZGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSO0FBQVk7QUFBQTtBQUFBLGdCQUFNLFdBQU47QUFBQTtBQUFBO0FBQVosV0FGRjtBQUdFLG1FQUFPLEdBQUcsRUFBVixFQUFjLE1BQUssT0FBbkIsRUFBMkIsT0FBTSxjQUFqQyxFQUFnRCxPQUFNLG1CQUF0RDtBQUhGLFNBUEY7QUFhRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBWTtBQUFBO0FBQUEsZ0JBQU0sV0FBTjtBQUFBO0FBQUE7QUFBWjtBQUZGLFNBYkY7QUFrQkU7QUFDRSxzQkFBWSxLQUFLWixLQUFMLENBQVdFLFVBRHpCO0FBRUUsMEJBQWdCLEtBQUtXLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBRmxCO0FBR0UsNEJBQWtCLEtBQUtDLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQjtBQUhwQixVQWxCRjtBQXdCRSxpREF4QkY7QUF5QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsaUVBQVcsUUFBTyxRQUFsQjtBQURGO0FBREY7QUF6QkYsT0FERjtBQWlDRDs7Ozs7O0FBR0gsSUFBTUgsU0FBUztBQUNiQyxrQkFBZ0I7QUFDZEksZUFBVztBQURHO0FBREgsQ0FBZjs7a0JBTWVqQixPIiwiZmlsZSI6IjEwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3csIElucHV0LCBJY29uLCBCdXR0b24gfSBmcm9tICdyZWFjdC1tYXRlcmlhbGl6ZSc7XG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4uL2J1dHRvbnMvU3VibWl0QnRuJztcbmltcG9ydCBTdWJzZWN0aW9uIGZyb20gJy4uL3N1YnNlY3Rpb24vU3Vic2VjdGlvbic7XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHN1YnNlY3Rpb246IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdWJuYW1lOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gIH1cbiAgaGFuZGxlT25DaGFuZ2UoZSwgaWR4KSB7XG4gICAgY29uc3Qgc3Vic2VjdGlvbiA9IHRoaXMuc3RhdGUuc3Vic2VjdGlvbjtcbiAgICBzdWJzZWN0aW9uW2lkeF0uc3VibmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGFkZE5ld1N1YnNlY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN1YnNlY3Rpb246IHRoaXMuc3RhdGUuc3Vic2VjdGlvbi5jb25jYXQoW3sgc3VibmFtZTogJycgfV0pXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJTdHlsZX0+XG4gICAgICAgIHsvKnNlY3Rpb24gbmFtZSAgKi99XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPGg1PkNvdXJzZTo8L2g1PlxuICAgICAgICAgIDxJbnB1dCBzPXsxMn0gLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKmludHJvIHZpZGVvKi99XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPGg1PlVwbG9hZDwvaDU+XG4gICAgICAgICAgPGEgaHJlZj0nIyc+PEljb24gbGFyZ2U+Zm9sZGVyPC9JY29uPjwvYT5cbiAgICAgICAgICA8SW5wdXQgcz17MTJ9IHR5cGU9J3JhZGlvJyB2YWx1ZT0nYWRkX3RvX3RyaWFsJyBsYWJlbD1cImluY2x1ZGVkIGluIHRyaWFsXCIgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKnJlc291cmNlL3dvcmtzaGl0Ki99XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPGg1PldvcmtzaGVldDo8L2g1PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PEljb24gbGFyZ2U+Zm9sZGVyPC9JY29uPjwvYT5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKnN1YnNlY3Rpb24gY29tcG9uZW50Ki99XG4gICAgICAgIDxTdWJzZWN0aW9uXG4gICAgICAgICAgc3Vic2VjdGlvbj17dGhpcy5zdGF0ZS5zdWJzZWN0aW9ufVxuICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgYWRkTmV3U3Vic2VjdGlvbj17dGhpcy5hZGROZXdTdWJzZWN0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIHsvKlN1Ym1pdCB3aG9sZSBwYWdlICAqL31cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgIDxTdWJtaXRCdG4gc3VibWl0PSdzdWJtaXQnIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lclN0eWxlOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///103\n");

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SubmitBtn = function SubmitBtn(_ref) {\n  var submit = _ref.submit;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    submit\n  );\n};\n\nexports.default = SubmitBtn;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9ucy9TdWJtaXRCdG4uanM/YzI1MCJdLCJuYW1lcyI6WyJTdWJtaXRCdG4iLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ2hDLFNBQ0U7QUFBQTtBQUFBO0FBQ0dBO0FBREgsR0FERjtBQUtELENBTkQ7O2tCQVFlRCxTIiwiZmlsZSI6IjEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN1Ym1pdEJ0biA9ICh7IHN1Ym1pdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtzdWJtaXR9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRCdG47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9ucy9TdWJtaXRCdG4uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///107\n");

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(45);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Section = __webpack_require__(103);\n\nvar _Section2 = _interopRequireDefault(_Section);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log('React Fired');\n\n// import MetaData from './components/Metadata';\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Section2.default, null)\n  );\n};\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiQXBwIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQUVBQSxRQUFRQyxHQUFSLENBQVksYUFBWjs7QUFIQTs7QUFJQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU07QUFBQSxTQUNWO0FBQUE7QUFBQTtBQUVFO0FBRkYsR0FEVTtBQUFBLENBQVo7O0FBT0EsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QiIsImZpbGUiOiIxMDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIGltcG9ydCBNZXRhRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvTWV0YWRhdGEnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb24nO1xuXG5jb25zb2xlLmxvZygnUmVhY3QgRmlyZWQnKTtcbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICB7LyogPE1ldGFEYXRhIC8+ICovfVxuICAgIDxTZWN0aW9uIC8+XG4gIDwvZGl2PlxuICApO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///108\n");

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMaterialize = __webpack_require__(44);\n\nvar _AddSubBtn = __webpack_require__(1211);\n\nvar _AddSubBtn2 = _interopRequireDefault(_AddSubBtn);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Subsection = function (_Component) {\n  _inherits(Subsection, _Component);\n\n  function Subsection() {\n    _classCallCheck(this, Subsection);\n\n    return _possibleConstructorReturn(this, (Subsection.__proto__ || Object.getPrototypeOf(Subsection)).apply(this, arguments));\n  }\n\n  _createClass(Subsection, [{\n    key: 'renderSubsection',\n    value: function renderSubsection() {\n      var _props = this.props,\n          subsection = _props.subsection,\n          handleOnChange = _props.handleOnChange;\n\n      return subsection.map(function (sub, idx) {\n        return _react2.default.createElement(\n          _reactMaterialize.Row,\n          { key: idx },\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Name:'\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, {\n            s: 12,\n            onChange: function onChange(event) {\n              return handleOnChange(event, idx);\n            },\n            value: sub.subname\n          }),\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Video album ',\n            _react2.default.createElement(\n              _reactMaterialize.Icon,\n              null,\n              'clear'\n            )\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '#', s: 12 },\n            _react2.default.createElement(\n              _reactMaterialize.Icon,\n              { large: true },\n              'attach_file'\n            )\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, { s: 12, type: 'radio', value: 'add_to_trial', label: 'included in trial' })\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.renderSubsection(),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(_AddSubBtn2.default, {\n            button: 'Add New',\n            addNewSubsection: this.props.addNewSubsection\n          })\n        )\n      );\n    }\n  }]);\n\n  return Subsection;\n}(_react.Component);\n\nexports.default = Subsection;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3Vic2VjdGlvbi9TdWJzZWN0aW9uLmpzPzdjYmMiXSwibmFtZXMiOlsiU3Vic2VjdGlvbiIsInByb3BzIiwic3Vic2VjdGlvbiIsImhhbmRsZU9uQ2hhbmdlIiwibWFwIiwic3ViIiwiaWR4IiwiZXZlbnQiLCJzdWJuYW1lIiwicmVuZGVyU3Vic2VjdGlvbiIsImFkZE5ld1N1YnNlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7O3VDQUNlO0FBQUEsbUJBQ3NCLEtBQUtDLEtBRDNCO0FBQUEsVUFDVEMsVUFEUyxVQUNUQSxVQURTO0FBQUEsVUFDR0MsY0FESCxVQUNHQSxjQURIOztBQUVqQixhQUFPRCxXQUFXRSxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDbEMsZUFDRTtBQUFBO0FBQUEsWUFBSyxLQUFLQSxHQUFWO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFDRSxlQUFHLEVBREw7QUFFRSxzQkFBVTtBQUFBLHFCQUFTSCxlQUFlSSxLQUFmLEVBQXNCRCxHQUF0QixDQUFUO0FBQUEsYUFGWjtBQUdFLG1CQUFPRCxJQUFJRztBQUhiLFlBRkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCLFdBUEY7QUFRRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVIsRUFBWSxHQUFHLEVBQWY7QUFBbUI7QUFBQTtBQUFBLGdCQUFNLFdBQU47QUFBQTtBQUFBO0FBQW5CLFdBUkY7QUFTRSxtRUFBTyxHQUFHLEVBQVYsRUFBYSxNQUFLLE9BQWxCLEVBQTBCLE9BQU0sY0FBaEMsRUFBK0MsT0FBTSxtQkFBckQ7QUFURixTQURGO0FBYUQsT0FkTSxDQUFQO0FBZUQ7Ozs2QkFFUTtBQUNQLGFBQ007QUFBQTtBQUFBO0FBQ0csYUFBS0MsZ0JBQUwsRUFESDtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQ0Usb0JBQU8sU0FEVDtBQUVFLDhCQUFrQixLQUFLUixLQUFMLENBQVdTO0FBRi9CO0FBREY7QUFGRixPQUROO0FBV0Q7Ozs7OztrQkFHWVYsVSIsImZpbGUiOiIxMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBJbnB1dCwgSWNvbiB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcbmltcG9ydCBBZGRTdWJCdG4gZnJvbSAnLi4vYnV0dG9ucy9BZGRTdWJCdG4nO1xuXG5jbGFzcyBTdWJzZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyU3Vic2VjdGlvbigpIHtcbiAgICBjb25zdCB7IHN1YnNlY3Rpb24sIGhhbmRsZU9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBzdWJzZWN0aW9uLm1hcCgoc3ViLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cga2V5PXtpZHh9PlxuICAgICAgICAgIDxoNT5OYW1lOjwvaDU+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBzPXsxMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVPbkNoYW5nZShldmVudCwgaWR4KX1cbiAgICAgICAgICAgIHZhbHVlPXtzdWIuc3VibmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoNT5WaWRlbyBhbGJ1bSA8SWNvbj5jbGVhcjwvSWNvbj48L2g1PlxuICAgICAgICAgIDxhIGhyZWY9JyMnIHM9ezEyfT48SWNvbiBsYXJnZT5hdHRhY2hfZmlsZTwvSWNvbj48L2E+XG4gICAgICAgICAgPElucHV0IHM9ezEyfXR5cGU9J3JhZGlvJyB2YWx1ZT0nYWRkX3RvX3RyaWFsJyBsYWJlbD1cImluY2x1ZGVkIGluIHRyaWFsXCIgLz5cbiAgICAgICAgPC9Sb3c+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclN1YnNlY3Rpb24oKX1cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxBZGRTdWJCdG5cbiAgICAgICAgICAgICAgICBidXR0b249J0FkZCBOZXcnXG4gICAgICAgICAgICAgICAgYWRkTmV3U3Vic2VjdGlvbj17dGhpcy5wcm9wcy5hZGROZXdTdWJzZWN0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3Vic2VjdGlvbi9TdWJzZWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///109\n");

/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMaterialize = __webpack_require__(44);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Subsection from '../subsection/Subsection.js';\n\nvar AddSubBtn = function AddSubBtn(_ref) {\n  var button = _ref.button,\n      addNewSubsection = _ref.addNewSubsection;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactMaterialize.Button,\n      { onClick: function onClick() {\n          return addNewSubsection();\n        } },\n      button\n    )\n  );\n};\n\nexports.default = AddSubBtn;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9ucy9BZGRTdWJCdG4uanM/YWM4MiJdLCJuYW1lcyI6WyJBZGRTdWJCdG4iLCJidXR0b24iLCJhZGROZXdTdWJzZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQWtDO0FBQUEsTUFBL0JDLE1BQStCLFFBQS9CQSxNQUErQjtBQUFBLE1BQXZCQyxnQkFBdUIsUUFBdkJBLGdCQUF1Qjs7QUFDbEQsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsaUJBQU1BLGtCQUFOO0FBQUEsU0FBakI7QUFBNENEO0FBQTVDO0FBREYsR0FERjtBQUtELENBTkQ7O2tCQVFlRCxTIiwiZmlsZSI6IjEyMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuLy8gaW1wb3J0IFN1YnNlY3Rpb24gZnJvbSAnLi4vc3Vic2VjdGlvbi9TdWJzZWN0aW9uLmpzJztcblxuY29uc3QgQWRkU3ViQnRuID0gKHsgYnV0dG9uLCBhZGROZXdTdWJzZWN0aW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGROZXdTdWJzZWN0aW9uKCl9PntidXR0b259PC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRTdWJCdG47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9ucy9BZGRTdWJCdG4uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1211\n");

/***/ })

},[108]);