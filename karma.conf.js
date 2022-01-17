
var webpackConfig = require('./webpack.test.conf')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: ['test/unit/*.spec.js'],
    exclude: [
      'node_modules',
      '**/*.md'
    ],
    reporters: ['progress', 'coverage-istanbul'], // coverage-istanbul生成代码测试覆盖率报


    // 生成代码测试覆盖率报告
    coverageIstanbulReporter: {
      dir: './coverage',
      // html文件、控制台
      reports: ['html', 'text-summary'],
      fixWebpackSourcePaths: true,
      // html格式报告路径 ./coverage/html/
      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    },
    browsers: ['ChromeHeadless'],

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-webpack',
      // 'karma-coverage', // 由于使用webpack打包，混入其他代码或变量被私有化，导致karma-coverage统计的覆盖率不准，故改用karma-coverage-istanbul-reporter
      'karma-coverage-istanbul-reporter'
    ],
    preprocessors: {
      'test/unit/*.spec.js': ['webpack'],
    },

    webpack: webpackConfig,

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
