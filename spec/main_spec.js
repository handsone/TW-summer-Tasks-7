"use strict";
//var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("It should contain '99 bottles of beer on the wall, 99 bottles of beer.\nTake on down and pass it around, 98 bottles of beer.\n'", function(){

        var result = main();
        var expect_string = '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer.\n';
        
        expect(result).to.contain(expect_string);
    });
    it("It should contain '99 bottles of beer on the wall, 99 bottles of beer.\nTake on down and pass it around, 98 bottles of beer.\n (for loop 97 times)'", function(){

        var result = main();
        var expect_string = '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer.\n' ;
        
        expect(result).to.contain(expect_string);
    });
    it("It should contain '99 bottles of beer on the wall, 99 bottles of beer.\nTake on down and pass it around, 98 bottles of beer.\n (for loop 97 times) and add '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, no more bottles of beer.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles fo beer on the wall.", function(){

        var result = main();
        var expect_string = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles fo beer on the wall.';
        
        expect(result).to.contain(expect_string);
    });
});
