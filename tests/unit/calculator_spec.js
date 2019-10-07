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

  it('calculator displays result of specific number click', function(){
   calculator.numberClick(5);
   assert.equal(5, calculator.runningTotal);
 });

//calculator.add() - add 1 to 4 and get 5
  it('should add 1 to 4 and get 5', function() {
     calculator.previousTotal = 4;
     calculator.add(1);
     const actual = calculator.runningTotal;
     assert.equal(actual, 5);
   })
//calculator.subtract() subtract 4 from 7 and get 3
  it('should substract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })
//calculator.multiply() - multiply 3 by 5 and get 15
  it('should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  })
//calculator.divide() - divide 21 by 7 and get 3
  it('should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  //calculator.numberClick() - concatenate multiple number button clicks
  it('displays concatonated number upon multiple clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(8);
    assert.equal(558, calculator.runningTotal);
  });

//calculator.operatorClick() - chain multiple operations together
  it('should chain multiple operators together', function () {
   calculator.numberClick(7);
   calculator.operatorClick('+');
   calculator.numberClick(3);
   calculator.operatorClick('*');
   calculator.numberClick(2);
   calculator.operatorClick('=');
   assert.equal('20', calculator.runningTotal);
 });
//calculator.clearClick() - clear the running total without affecting the calculation
  it('clear button clears displayed when clicked', function(){
    calculator.runningTotal = 21;
    calculator.operatorClick('-');
    calculator.numberClick(7);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual,'20');
});

});
