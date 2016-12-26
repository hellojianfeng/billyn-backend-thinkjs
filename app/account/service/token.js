'use strict';

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = think.config("billynjwt.secret", undefined, "account");
var jwt = require('jsonwebtoken');

//let expiresIn = think.config("gotolion.expiresIn");

var _class = function (_think$service$base) {
    (0, _inherits3.default)(_class, _think$service$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$service$base.apply(this, arguments));
    }

    /**
     * @description create token
     * @param {Object} userinfo 
     * @return token
     */
    _class.prototype.createToken = function createToken(userinfo) {
        var result = jwt.sign(userinfo, secret);
        return result;
    };

    /**
     * @description verify token
     * @param {Object} token the token to be verified
     * @return 'fail' or verified result
     */


    _class.prototype.verifyToken = function verifyToken(token) {
        if (token) {
            try {
                var result = jwt.verify(token, secret);
                return result;
            } catch (err) {
                //票据验证失败,需要提示需要重新登录
                return "fail";
            }
        }
        return "fail";
    };

    return _class;
}(think.service.base);

exports.default = _class;
//# sourceMappingURL=token.js.map