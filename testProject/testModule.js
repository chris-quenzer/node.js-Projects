/**
 * Created by Chris Q on 4/3/2017.
 */

module.exports = {
    testNum: 42,

    about: function(){
        console.log("This is a module to test how to write and import custom node.js modules.");
    },

    simpleAdd: function(num1, num2){
        return num1 + num2;
    }
}

/*
var testNum = 42;

function aboutModule(){
    console.log("This is a module to test how to write and import custom node.js modules.");
}

function simpleAdd(num1, num2){
    return num1 + num2;
}

//Module Exports
module.exports.about = aboutModule;
module.exports.simpleAdd = simpleAdd;
module.exports.testNum = testNum;
*/