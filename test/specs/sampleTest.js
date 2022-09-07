const {expect} = require("chai");
const { builtinModules } = require("module");

class sampleTest {
    static addNumbers (num1 , num2) {
        return num1 + num2;
    }

}

module.exports = sampleTest;


// verify res is equal to 5




