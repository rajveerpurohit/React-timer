var React = require ('react');
var ReactDom = require ('react-dom');
var expect = require ('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock',() =>{
	it('Should exist', () =>{
		expect(Clock).toExist();
	});
	describe('formatSeconds',() =>{
		it('formatSeconds exists',()=>{
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 615;
			var expected = '10:15';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
		it('formatSeconds should work when min/secs are less than 10',()=>{
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 61;
			var expected = '01:01';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});
});