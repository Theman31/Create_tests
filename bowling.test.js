const chaitea = require('chai');
var bowling = require('./bowling.js');

var expect = chaitea.expect;

describe("A single frame in bowling", function(){
  it("if the first bowl is equal to 10, return strike", function() {
    var arr = [10, 0];
    var score = bowling(arr);
    expect(score).to.eql("strike");
  });

  it("if a bowl equals 0, return gutter ball", function() {
    var  arr = [0, 0];
    var score = bowling(arr);
    expect(score).to.eql("gutter ball");
  });

  it("if a bowl is a spare, return spare", function() {
    var arr = [7, 3];
    var score = bowling(arr);
    expect(score).to.eql("spare");
  });

  it("if score is over 10, return cheater", function() {
    var arr = [20, 12];
    var score = bowling(arr);
    expect(score).to.eql("Cheater");
  });
});
