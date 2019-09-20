var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

//calculator.add() - add 1 to 4 and get 5
  it('should add 1 to 4 and get 5', function(){
    assert.equal(true, true);
  })
//calculator.subtract() subtract 4 from 7 and get 3
  it('should substract 4 from 7 and get 3', function(){
    assert.equal(true, true);
  })
//calculator.multiply() - multiply 3 by 5 and get 15

  it('should multiply 4 by 5 and get 15', function(){
    assert.equal(true, true);
  })
//calculator.divide() - divide 21 by 7 and get 3
  it('should divide 21 by 7 and get 3', function(){
    assert.equal(true, true);
  })
//calculator.numberClick() - concatenate multiple number button clicks
  it('should concatenate multiple number button clicks', function(){
    assert.equal(true,true);
  })
//calculator.operatorClick() - chain multiple operations together
  it('should chain multiple operations together', function(){
    assert.equal(true, true);
  })
//calculator.clearClick() - clear the running total without affecting the calculation
  it ('should clear the running total without affecting the calculation', function(){
    assert.equal(true, true);
  })

});
