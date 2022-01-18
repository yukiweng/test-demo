import sayHello from '@src/demo4/demo4'

describe("demo4 mock ==> ", function () {
    test("should return msg", function () {
        let callback = function (msg) { console.log('getMsg ===>', msg) } // 依赖console判断msg
        sayHello(callback)
    });
    test("should send msg", function () {
        let callback = jest.fn() // mock 函数
        sayHello(callback)

        expect(callback).toHaveBeenCalled();
        expect(callback).toHaveBeenCalledWith("hello world");
    });

});