// 异步测试
import { expect } from 'chai'
import asyncFn from '../../src/demo2/demo2.js'

describe('demo2 异步测试 ===>', () => {
    it('测试应该3秒后结束', (done) => {
        // setTimeout(() => {
        //     expect(false).to.be.not.ok
        //     done() // 通知mocha测试结束
        // }, 3000)
        asyncFn().then(() => {
            expect(false).to.be.not.ok
            done() // 通知mocha测试结束
        })
        // timeout(5000)，设置超时时长
    }).timeout(5000)
})