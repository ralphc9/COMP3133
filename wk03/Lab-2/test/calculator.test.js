import { expect } from 'chai';
import { add, sub, mul, div } from '../app/calculator.js';

describe('Calculator Tests', () => {
    it('should return 7 for add(5, 2)', () => {
        expect(add(5, 2)).to.equal(7);
    });

    it('should fail for add(5, 2) expecting 8', () => {
        expect(add(5, 2)).to.not.equal(8);
    });

    it('should return 3 for sub(5, 2)', () => {
        expect(sub(5, 2)).to.equal(3);
    });

    it('should fail for sub(5, 2) expecting 5', () => {
        expect(sub(5, 2)).to.not.equal(5);
    });

    it('should return 10 for mul(5, 2)', () => {
        expect(mul(5, 2)).to.equal(10);
    });

    it('should fail for mul(5, 2) expecting 12', () => {
        expect(mul(5, 2)).to.not.equal(12);
    });

    it('should return 5 for div(10, 2)', () => {
        expect(div(10, 2)).to.equal(5);
    });

    it('should fail for div(10, 2) expecting 2', () => {
        expect(div(10, 2)).to.not.equal(2);
    });
});
