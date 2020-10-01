const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('Is square ?', () => {
        let r1 = new Rectangle(10, 5);
        assert.strictEqual(r1.isSquare(), false);
        let r2 = new Rectangle(7, 7);
        assert.strictEqual(r2.isSquare(), true);
    });
    
    it('Get area', () => {
        let r3 = new Rectangle(13, 7);
        assert.strictEqual(r3.getArea(), 91);
    });

    it('Get perimeter', () => {
        let r4 = new Rectangle(13, 7);
        assert.strictEqual(r4.getPerimeter(), 40);
    });
});