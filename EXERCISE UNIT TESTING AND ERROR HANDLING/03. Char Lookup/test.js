const { lookupChar } = require('./index')
const assert = require('chai').assert



describe('Testitng lookupChar', () => {
    it('Returning Undifined - diferent input', () => {
        assert.equal(lookupChar(1, 'a'), undefined)
    })
    it('Returning empty String', () => {
        assert.equal(lookupChar(), undefined)
    })
    it('Returning Undifined - Array, Object', () => {
        assert.equal(lookupChar([], {}), undefined)
    })

    it('Returning', () => {
        result = lookupChar('a', 1.1230)
        assert.equal(result, undefined)
    })

    it(' only 1 input is corect - String', () => {
        assert.equal(lookupChar('a', 'a'), undefined)
    })
    it(' only 1 input is corect - Number', () => {
        assert.equal(lookupChar(1, 1), undefined)
    })

    it('if string.length is > index', () => {
        result = lookupChar('xaxa', 5)
        assert.equal(result, 'Incorrect index')
    })
    it('if string.length is not here', () => {
        result = lookupChar('xaxa', 5)
        assert.equal(result, 'Incorrect index')
    })

    it('if index < 0', () => {
        result = lookupChar('xaxa', -27)
        assert.equal(result, 'Incorrect index')
    })
    it('truety', () => {
        result = lookupChar('xaxa', 3.3)
        assert.equal(result, undefined)
    })
    it('Empty reult', () => {
        result = lookupChar('',)
        assert.equal(result, undefined)
    })
    it('two Number of string', () => {
        result = lookupChar('1', '1')
        assert.equal(result, undefined)
    })
    it(' Number of string one whit flowe point', () => {
        result = lookupChar('1', 1.2263)
        assert.equal(result, undefined)
    })
    it('its True', () => {
        result = lookupChar('xaxa', 2)
        assert.equal(result, 'x')
    })
    it('itss True', () => {
        result = lookupChar('xaxaxa', 3)
        assert.equal(result, 'a')
    })

})