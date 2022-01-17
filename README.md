##### 测试框架
- `Mocha` 适用于 NodeJS 和 浏览器，简易灵活
- `Jest` Facebook 开源的测试框架，用于脸书系和 ReactJS 系

| 测试框架 | 断言 | Mock | 异步 |
| :---- | :---- | :---- | :---- |
| Jest | 默认支持 | 默认支持 | 友好 |
| Mocha | 不支持(可配置) | 不支持(可配置) | 友好

<br />

##### 工具
- `Karma` 测试运行器，可以呼起浏览器，加载测试脚本，运行测试用例
- `Mocha` 单元测试框架/库，用于写测试用例
- `Chai` 断言库
- `Sinon` spy / stub / mock 库，用以辅助测试

<br />

##### 测试脚本
通常，测试脚本与所要测试的源码脚本同名，但是后缀名为.test.js（表示测试）或者.spec.js（表示规格）

- 测试脚本里面应该包括一个或多个`describe`块，每个`describe`块应该包括一个或多个`it`块。

- `describe`块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称，第二个参数是一个实际执行的函数。

- `it`块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称，第二个参数是一个实际执行的函数。

- 所有的测试用例（`it`块）都应该含有一句或多句的断言。它是编写测试用例的关键。断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库

<br/>

##### 持续集成
- [TravisCI](https://travis-ci.org/) (2020年底不再为开源项目提供免费）

[持续集成CircleCI vs Travis CI vs Jenkins](https://zhuanlan.zhihu.com/p/59686072)

- [GitHub Actions](https://docs.github.com/cn/actions/automating-builds-and-tests/about-continuous-integration)

<br/>
<hr/>

##### VUE 插件 [@vue/cli-plugin-unit-mocha](https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-mocha/README.md)


通过 mocha-webpack + chai 运行单元测试。

注意该测试会运行在带有 JSDOM 浏览器环境模拟的 Node.js 中

使用：`vue-cli-service test:unit [options] [...files]`

选项：
```
  --watch, -w   以监听模式运行
  --grep, -g    只运行匹配 <pattern> 的测试
  --slow, -s    将测试阀值减慢，单位是毫秒
  --timeout, -t 设置超时阀值，单位是毫秒
  --bail, -b    第一个测试失败后仍然保释
  --require, -r 在运行测试之前引入给定的模块
  --include     在测试包中包含给定的模块
  --inspect-brk 开启审查工具来调试测试代码
```
默认文件匹配规则是：`test/unit` 内所有以 `.spec.(ts|js) `结尾的文件。

在已创建的项目中安装
`vue add @vue/unit-mocha`


<style>
table {
    width: 100%;
    max-width: 600px; 
    border-collapse: collapse; 
}
table th,
table td {
  height: 28px; 
  border: 1px solid #dedede; 
  padding: 0 10px; 
}
</style>
