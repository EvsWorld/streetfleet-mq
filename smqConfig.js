'use strict';

module.exports = {
  namespace: 'default',
  redis: {
    url: process.env.REDIS_URL,
    connect_timeout: 3600000,
  },
  log: {
    enabled: 0,
    options: {
      level: 'debug',
    },
  }
};
console.log(module.exports);
