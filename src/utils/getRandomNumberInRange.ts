
/**
 * return a random number between provided min and max number included
 *
 * @param {number} min
 * @param {number} max
 * @returns {number} random number
 */
export const getRandomNumberInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}