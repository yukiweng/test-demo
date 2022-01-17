import { firstFn, secondFn } from '@src/demo3/demo3'

describe('demo3 hook ===>', function () {
    before(function () {
        // 在本区块的所有测试用例之前执行
        console.log('before');
    });

    after(function () {
        // 在本区块的所有测试用例之后执行
        console.log('after');
    });

    beforeEach(function () {
        // 在本区块的每个测试用例之前执行
        console.log('beforeEach');
    });

    afterEach(function () {
        // 在本区块的每个测试用例之后执行
        console.log('afterEach');
    });
    it('first', (done) => {
        firstFn().then(() => {
            console.log('first case')
            done() // 通知mocha测试结束
        })
    }).timeout(10000);
    it('last', () => {
        console.log('last case')
        secondFn()
    });
});