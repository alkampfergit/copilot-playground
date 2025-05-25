// main.test.ts
// Test per la funzione sum
import { sum } from './main';

describe('sum', () => {
    it('should add two numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });
    it('should add negative numbers', () => {
        expect(sum(-2, -3)).toBe(-5);
    });
});