'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseController = function () {
	function BaseController() {
		(0, _classCallCheck3.default)(this, BaseController);
	}

	(0, _createClass3.default)(BaseController, [{
		key: 'filterParams',
		value: function filterParams(params, whitelist) {
			var filtered = {};
			for (var key in params) {
				if (whitelist.indexOf(key) > -1) {
					filtered[key] = params[key];
				}
			}
			return filtered;
		}
	}, {
		key: 'formatApiError',
		value: function formatApiError(err) {
			if (!err) {
				// eslint-disable-next-line no-console
				return console.error('Provide an error');
			}

			var formatted = {
				message: err.message
			};

			if (err.errors) {
				formatted.errors = {};
				var errors = err.errors;
				for (var type in errors) {
					if (errors.hasOwnProperty(type)) {
						formatted.errors[type] = errors[type].message;
					}
				}
			}

			return formatted;
		}
	}]);
	return BaseController;
}();

exports.default = BaseController;
//# sourceMappingURL=base.controller.js.map