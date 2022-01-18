// 基础的断言库 chai  
//https://www.chaijs.com/api/

import chai, { assert, expect } from 'chai'
chai.should()

const foo = 'foo'

// NodeJs与浏览器自带断言 console.assert()
console.assert(foo === 'foo') // 正确，无反应，不报错
console.assert(foo === 'bar', 'console.assert===> foo ==="bar"') // 错误，报错


// assert 可自定义错误信息
assert(foo === 'foo', 'foo 等于 "foo"');
assert(foo === 'bar', 'assert ==> foo 等于 "bar"');


// expect 推荐，可自定义错误信息，可链式调用
expect(foo).to.equal('foo')
expect(foo, 'expect ==> foo 等于 "bar"').to.equal('bar')


// should 不可自定义错误信息，可链式调用，修改Object.prototype，ie兼容存在问题
foo.should.equal('bar')
