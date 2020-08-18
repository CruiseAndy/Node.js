const should = require('should');
import JSONReverse from './JSONReverse';

let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};

let outputValue = {
  I: {
    deserve: {
      to: {
         be: 'hired'
      }
    }
  }
};

describe('unit testing', () => {
  it('should return "input data type fail"', done => {
    JSONReverse().should.equal('input data type fail')
  })
  
  it('should return "nothing in object"', done => {
    JSONReverse({}).should.equal('nothing in object')
  })
  
  it('should return outputValue', done => {
    JSONReverse(inputValue).should.equal(outputValue)
  })
})
