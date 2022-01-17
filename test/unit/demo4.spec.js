import { expect } from 'chai'
import sinon from 'sinon'
import sayHello from '@src/demo4/demo4'

describe("demo4 sinon ===>", function () {
    it("should return msg", function () {
        let callback = function (msg) { console.log('getMsg ===>', msg) } // 依赖console判断msg
        sayHello(callback)
    });
    it("should send msg", function () {
        let callback = sinon.spy() // 使用spy
        sayHello(callback)

        expect(callback.calledOnce).to.be.true;
        // expect(callback.firstCall.args[0]).to.equal("Error");
    });

});