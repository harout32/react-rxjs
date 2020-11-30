/**
 * filters the value by the timestamp, previousValue and previousValue and value reference change strict equal
 *
 * @param {number} timeStamp
 * @param {number} value
 * @param {(number | null)} previousValue
 * @returns {string} 'N/A' or value
 */
export const filterOperationRoomValue = (timeStamp: number, value: number, previousValue: number | null): string => {
    const now = +new Date();
    const difference = now - timeStamp;
    
    if (difference > 1000 && previousValue !== null && value === previousValue) {
        return 'N/A';
    }
    return value.toFixed(2);
}