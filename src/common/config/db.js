'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mongo',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'billyn',
      user: 'billyn',
      password: 'billyn',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {
        host: ["127.0.0.1"],
        port: ["27017"],
        database: 'billyn',
        encoding: "utf8",
        log_sql: true,
        log_connect: true,
        cache: { // 数据库查询缓存配置
            on: true,
            type: "",
            timeout: 3600
        }
    }
  }
};