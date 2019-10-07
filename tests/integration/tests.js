const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  //1.Do the number buttons update the display of the running total?
//it should have working number 3 button'
   it('should have the number buttons update the display of the running total', function(){
     element(by.css('#number3')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('3');
   })
//it should have working number 4 button'
   it('should have the number buttons update the display of the running total', function(){
     element(by.css('#number4')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('4');
   })

 //Do the number buttons update the display of the running total?
it('should be able to display the running total once number buttons update', function(){
  running_total = element(by.css('#running_total'))
})

//2. Do the arithmetical operations update the display with the result of the operation?
it('should be able to add', function(){
running_total = element(by.css('#running_total'))
element(by.css('#number4')).click();
element(by.css('#operator_add')).click();
element(by.css('#number5')).click();
element(by.css('#operator_equals')).click();
expect(running_total.getAttribute('value')).to.eventually.equal('9')
   });

//3. Can multiple operations be chained together?

it('should chain multiple operations together', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('8')
 })

//4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
it('should handle negative output', function() {
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number4')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('-2')
 });

 it('should handle negative output', function() {
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#number4')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number1')).click();
   element(by.css('#number4')).click();
   element(by.css('#number7')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('36015')
 });

//5.What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

it('should return "You can\'t divide by zero" when the user tries to divide by zero', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('You can\'t divide by zero')
  })
});
