const should = require('should');
import JSONReverse from './JSONReverse';

describe('unit testing', () => {
  it('should return "input data type fail"', done => {
    JSONReverse().should.equal(null)
  })
})
