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

  it('should be able to add correctly', function() {
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should be able to subtract correctly', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should be able to multiply correctly', function() {
    calculator.previousTotal = 5
    calculator.multiply(3)
    assert.equal(calculator.runningTotal, 15)
  })

  it('should be able to divide correctly', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should join multiple number button clicks together', function() {
    calculator.numberClick(4)
    calculator.numberClick(6)
    calculator.numberClick(5)
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 4652)
  })

  it('should chain multiple operations together', function() {
    
    // calculator.runningTotal = 4
    // calculator.operatorClick('+')
    // calculator.operatorClick('=')
    // assert.equal(calculator.runningTotal, 8)

    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(15)
    calculator.operatorClick('-')
    calculator.numberClick(12)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 7)
  })

});

// calculator.operatorClick() - chain multiple operations together
// calculator.clearClick() - clear the running total without affecting the calculation

// it('should be able to calculate the total number of visitors per day', function () {
//   park1.addDinosaurToCollection(dinosaur1)
//   park1.addDinosaurToCollection(dinosaur2)
//   park1.addDinosaurToCollection(dinosaur3)
//   assert.strictEqual(park1.totalVisitorsPerDay(), 500)
// });
