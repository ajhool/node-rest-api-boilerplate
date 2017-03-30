'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.controller');

var _base2 = _interopRequireDefault(_base);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostController = function (_BaseController) {
  (0, _inherits3.default)(PostController, _BaseController);

  function PostController() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostController.__proto__ || Object.getPrototypeOf(PostController)).call.apply(_ref, [this].concat(args))), _this), _this.whitelist = ['text'], _this._populate = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
        var id, post, err;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.params.id;
                _context.prev = 1;
                _context.next = 4;
                return _post2.default.findById(id);

              case 4:
                post = _context.sent;

                if (post) {
                  _context.next = 9;
                  break;
                }

                err = new Error('Post not found.');

                err.status = 404;
                return _context.abrupt('return', next(err));

              case 9:

                req.post = post;
                next();
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](1);

                _context.t0.status = _context.t0.name === 'CastError' ? 404 : 500;
                next(_context.t0);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[1, 13]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.search = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
        var posts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _post2.default.find({}).populate({ path: '_user', select: '-posts -role' });

              case 3:
                posts = _context2.sent;


                res.json(posts);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                next(_context2.t0);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 7]]);
      }));

      return function (_x4, _x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.fetch = function (req, res) {
      res.json(req.post);
    }, _this.create = function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, next) {
        var params, post;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = _this.filterParams(req.body, _this.whitelist);
                post = new _post2.default((0, _extends3.default)({}, params, {
                  _user: req.currentUser._id
                }));
                _context3.prev = 2;
                _context3.t0 = res.status(201);
                _context3.next = 6;
                return post.save();

              case 6:
                _context3.t1 = _context3.sent;

                _context3.t0.json.call(_context3.t0, _context3.t1);

                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t2 = _context3['catch'](2);

                next(_context3.t2);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[2, 10]]);
      }));

      return function (_x7, _x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.delete = function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res, next) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(req.post._user.toString() === req.currentUser._id.toString())) {
                  _context4.next = 12;
                  break;
                }

                _context4.prev = 1;
                _context4.next = 4;
                return req.post.remove();

              case 4:
                res.sendStatus(204);
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](1);

                next(_context4.t0);

              case 10:
                _context4.next = 13;
                break;

              case 12:
                res.sendStatus(403);

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[1, 7]]);
      }));

      return function (_x10, _x11, _x12) {
        return _ref5.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Middleware to populate post based on url param


  /**
   * req.post is populated by middleware in routes.js
   */

  /**
   * req.user is populated by middleware in routes.js
   */

  return PostController;
}(_base2.default);

exports.default = new PostController();
//# sourceMappingURL=posts.controller.js.map