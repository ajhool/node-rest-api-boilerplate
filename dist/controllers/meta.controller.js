'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.controller');

var _base2 = _interopRequireDefault(_base);

var _constants = require('../config/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaController = function (_BaseController) {
	(0, _inherits3.default)(MetaController, _BaseController);

	function MetaController() {
		(0, _classCallCheck3.default)(this, MetaController);
		return (0, _possibleConstructorReturn3.default)(this, (MetaController.__proto__ || Object.getPrototypeOf(MetaController)).apply(this, arguments));
	}

	(0, _createClass3.default)(MetaController, [{
		key: 'index',
		value: function index(req, res) {
			res.json({
				version: _constants2.default.version
			});
		}
	}]);
	return MetaController;
}(_base2.default);

exports.default = new MetaController();
//# sourceMappingURL=meta.controller.js.map