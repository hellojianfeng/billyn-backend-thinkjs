'use strict';

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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * index action
   * @return {Promise} []
   */
  _class.prototype.registerAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var userName, email, password, model, ID, insertId, tokenService, tokenServiceInstance, token;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("register");
              userName = this.post("name");
              email = this.post("email");
              password = this.post("password");

              console.log(userName);
              console.log(email);
              console.log(password);

              model = this.model("user");
              ID = void 0;
              _context.prev = 9;
              _context.next = 12;
              return model.add({
                Name: userName,
                Password: think.md5(password),
                Email: email
              });

            case 12:
              insertId = _context.sent;

              ID = insertId;

              tokenService = think.service("account/token");
              tokenServiceInstance = new tokenService();
              _context.next = 18;
              return tokenServiceInstance.createToken({
                userInfo: {
                  id: ID,
                  name: userName,
                  email: email
                }
              });

            case 18:
              token = _context.sent;


              this.http.header("token", token);
              return _context.abrupt('return', this.success("SUCCESS"));

            case 23:
              _context.prev = 23;
              _context.t0 = _context['catch'](9);

              think.log(_context.t0);
              return _context.abrupt('return', this.fail("SERVER_INVALID"));

            case 27:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[9, 23]]);
    }));

    function registerAction() {
      return _ref.apply(this, arguments);
    }

    return registerAction;
  }(); //end of registerAction


  _class.prototype.loginAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var loginId, paramPassword, model, data, tokenService, tokenServiceInstance, token;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              loginId = this.post("loginId");
              paramPassword = this.post("password");


              console.log(loginId);
              console.log(paramPassword);

              model = this.model("user");
              data = void 0;
              _context2.next = 8;
              return model.where({
                Email: loginId,
                Password: think.md5(paramPassword)
              }).find();

            case 8:
              data = _context2.sent;

              if (!think.isEmpty(data)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 12;
              return model.where({
                Name: loginId,
                Password: think.md5(paramPassword)
              }).find();

            case 12:
              data = _context2.sent;

            case 13:

              console.log("find user by name: " + data._id + "   " + data.Email + " " + data.Name);

              if (think.isEmpty(data)) {
                _context2.next = 24;
                break;
              }

              tokenService = think.service("account/token");
              tokenServiceInstance = new tokenService();
              _context2.next = 19;
              return tokenServiceInstance.createToken({
                userInfo: {
                  id: data._id,
                  name: data.Name,
                  email: data.email
                }
              });

            case 19:
              token = _context2.sent;


              this.http.header("token", token);
              return _context2.abrupt('return', this.success("SUCCESS"));

            case 24:
              return _context2.abrupt('return', this.fail("NEED_LOGIN"));

            case 25:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loginAction() {
      return _ref2.apply(this, arguments);
    }

    return loginAction;
  }(); //end of loginAction

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map