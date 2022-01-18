// 异步测试
import asyncFn from '@src/demo2/demo2'

describe('demo2 异步测试 ===>', () => {
    test('测试应该3秒后结束, promise', (done) => {
        asyncFn().then(() => {
            expect(null).toBeFalsy()
            expect(1).toBeTruthy()
            done()
        })
    })
    test('测试应该3秒后结束, async/await', async () => {
        try {
            await asyncFn()
        } catch (e) {
            expect(e).toMatch('error');
        }
    })
})