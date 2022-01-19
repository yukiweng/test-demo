// 测试框架 mocha
// https://mochajs.org/
import { expect } from 'chai'
import num from '../../src/demo1/demo1.js'

describe('demo1 ===>', () => {
    it('期望 num 等于 1', () => {
        expect(num).to.equal(1)
    })
    // it('期望 num 等于 2', () => {
    //     expect(num).to.equal(2)
    // })
})