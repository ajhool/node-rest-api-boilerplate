'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = accessControl;

var _authenticate = require('./authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _constants = require('../config/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function accessControl(role) {
  if (!role) {
    throw new Error('Provide a role.');
  }

  var requiredRoleIndex = _constants2.default.userRoles.indexOf(role);

  if (requiredRoleIndex < 0) {
    throw new Error('Not a valid role.');
  }

  return function (req, res, next) {
    return (0, _authenticate2.default)(req, res, function (err) {
      var currentRoleIndex = _constants2.default.userRoles.indexOf(req.currentUser.role);

      if (err || !req.currentUser || currentRoleIndex < requiredRoleIndex) {
        res.sendStatus(403);
        return;
      }

      next();
    });
  };
}
//# sourceMappingURL=access-control.js.map