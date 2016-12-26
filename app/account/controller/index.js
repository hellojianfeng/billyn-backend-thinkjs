'use strict';

exports.__esModule = true;

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
  _class.prototype.indexAction = function indexAction() {
    console.log("index action");
    //auto render template file index_index.html
    return this.display();
  };

  _class.prototype.registerAction = function registerAction() {
    console.log("register action");
    return this.success("SUCCESS");

    // //定义接收参数
    // let paramName = this.post("name");
    // let parmPassword = this.post("password");
    // //定义数据模型
    // let model = this.model("useraccount");
    // //定义个人id
    // let ID;
    // //数据库写入记录
    // try {
    //   let insertId = await model.add({
    //     Name: paramName,
    //     Password: think.md5(parmPassword),
    //     RegisterDate: think.datetime(); // new Date()
    //   });
    //   ID = insertId;
    //   //调用tokenservice中间件
    //   let tokenService = think.service("token");
    //   let tokenServiceInstance = new tokenService();
    //   //写入token信息
    //   let token = await tokenServiceInstance.createToken({
    //     userInfo: {
    //       id: ID,
    //       name: paramName
    //     }
    //   });
    //   //传输客户端token
    //   this.http.header("token", token);
    //   return this.success("SUCCESS");
    // } catch (err) {
    //   think.log(err);
    //   return this.fail("SERVER_INVALID");
    // }

  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map