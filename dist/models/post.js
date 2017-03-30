'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PostSchema = new Schema({
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var PostModel = _mongoose2.default.model('Post', PostSchema);

exports.default = PostModel;
//# sourceMappingURL=post.js.map