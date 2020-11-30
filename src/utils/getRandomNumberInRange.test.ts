import { getRandomNumberInRange } from './getRandomNumberInRange';

describe('getRandomNumberInRange', () => {
    it('should return random value between 1 and 10', () => {
        const value = getRandomNumberInRange(1, 10);

        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).not.toBeGreaterThan(10);
    });
});
