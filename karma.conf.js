
var webpackConfig = require('./webpack.test.conf')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: ['test/unit/*.spec.js'],

    exclude: ['node_modules'],

    reporters: ['progress', 'coverage'], // 生成代码测试覆盖率报

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ],
      check: {
        // 全局覆盖率
        global: {
          statements: 90,
          branches: 90,
          functions: 90,
          lines: 90,
        }
      }
    },

    preprocessors: {
      'test/unit/*.spec.js': ['webpack'],
      'src/**/*.js': ['coverage']
    },

    webpack: webpackConfig,

    browsers: ['ChromeHeadless'],

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-coverage'
    ],

    singleRun: true,

    autoWatch: true,

    // 配置mocha超时时间
    client: {
      mocha: {
        timeout: 5000
      }
    }
  });
}
