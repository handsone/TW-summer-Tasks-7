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

	it('When input 0 , then output "No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall."', () => {
		let result = main(0);
		expect(result).to.be.equal("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.")	;
	});
	it('When input 1 , then output "1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall."', () => {
		let result = main(1);
		expect(result).to.be.equal("1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
	});
	it('When input 2 , then output"2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall."', () => {
		let result = main(2);
		expect(result).to.be.equal("2 bottles of beer on the wall, 2 bottles of beer.  Take one down and pass it around, 1 bottle of beer on the wall.");
	});
	it('When input 66 , then output"66 bottles of beer on the wall, 66 bottles of beer.Take one down and pass it around, 64 bottle of beer on the wall."', () => {
		let result = main(66);
		expect(result).to.be.equal("66 bottles of beer on the wall, 66 bottles of beer.  Take one down and pass it around, 65 bottle of beer on the wall.");
	});
});
