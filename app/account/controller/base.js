'use strict';
//定义用户数据变量

exports.__esModule = true;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {};

var _class = function (_think$controller$bas) {
  (0, _inherits3.default)(_class, _think$controller$bas);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
  }

  /**
   *@description action请求验证用户token
   */
  _class.prototype.__before = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(action) {
      var userToken, tokenService, tokenServiceInstance, verifyTokenResult, newToken;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("action = " + this.http.action);
              //登录、注册不验证token

              if (!(this.http.action === 'login' || this.http.action === 'register')) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              //获取http-header token
              userToken = this.http.header("token");
              //调用tokenservice中间件

              tokenService = think.service("account/token");
              tokenServiceInstance = new tokenService();
              //验证token

              _context.next = 8;
              return tokenServiceInstance.verifyToken(userToken);

            case 8:
              verifyTokenResult = _context.sent;

              //服务器错误时
              if (verifyTokenResult === "fail") {
                this.fail("TOKEN_INVALID");
              }
              //获取用户信息
              user = verifyTokenResult.userInfo;
              //写入新token
              _context.next = 13;
              return tokenServiceInstance.createToken({
                userInfo: verifyTokenResult.userInfo
              });

            case 13:
              newToken = _context.sent;

              this.http.header("token", newToken);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function __before(_x) {
      return _ref.apply(this, arguments);
    }

    return __before;
  }();

  _class.prototype.__call = function __call() {
    this.fail("NEED_LOGIN");
  };
  //用户信息


  _class.prototype.userInfo = function userInfo() {
    return user;
  };

  return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=base.js.map