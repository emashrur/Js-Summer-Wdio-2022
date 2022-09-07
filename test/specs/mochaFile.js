const sampleTest = require('./sampleTest');
const {expect, assert} = require("chai");
const {describe} = require("mocha");

describe('Login', () => {
    // it('Verify user can login with correct credentials', () => {

    //     const res = sampleTest.addNumbers(2,5);

    //     expect(res, 'addFunction does not work as expected').to.equal(7);

    //     expect(1 === 1, "fail the test case").to.be.true;
    //     expect(1 === 2, "fail the test case").to.be.false;
    //     // assert.equal(res, 7, "assert - addFunction does not work as expected");  


    // });
    // it('Verify user cannot login with correct credentials', () => {

    // })
    it('Open url', async () => {
        /**
         * to launch a webpage 
         * function: url
         */
        await browser.url('https://www.facebook.com');
        /**
         * to pause the execution
         * function: pause
         * 
         */
        browser.pause(5000);
        


    })
})



