var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'monitoring-express'
    },
    port: 3000,
    db: 'DB',
    username: 'root',
    password: 'password123'
  },

  test: {
    root: rootPath,
    app: {
      name: 'monitoring-express'
    },
    port: 3000,
    db: 'mysql://localhost/monitoring-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'monitoring-express'
    },
    port: 3000,
    db: 'mysql://localhost/monitoring-express-production'
  }
};

module.exports = config[env];
