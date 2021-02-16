const { isOddOrEven } = require('./index');
const assert = require('chai').assert



describe('isOddOrEven', () => {
    it('parameters that are NOT of type string - Number', () => {
        assert.equal(isOddOrEven(1), undefined)
    })
    it('parameters that are NOT of type string - Object', () => {
        assert.equal(isOddOrEven({}), undefined)
    })
    it('parameters that are NOT of type string - Array', () => {
        assert.equal(isOddOrEven([1]), undefined)
    })
    it('Even string incoming', () => {
        assert.equal(isOddOrEven('xa'), 'even')
    })
    it('Even string incoming', () => {
        assert.equal(isOddOrEven('xaxa'), 'even')
    })
    it('Even string incoming', () => {
        assert.equal(isOddOrEven('xaxaxa'), 'even')
    })
    
    it('Odd string incoming', () => {
        assert.equal(isOddOrEven('xax'), 'odd')
    })
    it('Odd string incoming', () => {
        assert.equal(isOddOrEven('xaxax'), 'odd')
    })
    it('Odd string incoming', () => {
        assert.equal(isOddOrEven('a'), 'odd')
    })
    
    it('Param is String', () => {
        result = typeof isOddOrEven('a')
        assert.equal(result, 'string')
    })
    
    
    it('Testing string length - ODD', () => {
        result = isOddOrEven('xax').length
        assert.equal(result, 3)
    })
    it('Testing string length - EVEN', () => {
        result = isOddOrEven('xaxa').length
        assert.equal(result, 4)
    })
    
   
})