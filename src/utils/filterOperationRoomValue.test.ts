import { filterOperationRoomValue } from './filterOperationRoomValue';
import { sleep } from './sleep';

describe('filterOperationRoomValue', () => {
    it('should return N/A when it has timestamp for more than or equal to 1000 and the value has not changed', async () => {
        const now = +new Date();
        
        await sleep(2000);
        
        const value = filterOperationRoomValue(now, 1, 1);
        
        expect(value).toStrictEqual('N/A');
    });

    it('should return current value when it has timestamp for more than or equal to 1000 and the value has changed', async () => {
        const now = +new Date();
        
        await sleep(2000);
        
        const value = filterOperationRoomValue(now, 1, 2);
        
        expect(value).toStrictEqual('1.00');
    });

    it('should return current value when previousValue is null', async () => {
        const now = +new Date();
        
        await sleep(2000);
        
        const value = filterOperationRoomValue(now, 1, null);
        
        expect(value).toStrictEqual('1.00');
    });

    it('should return current value when timestamp difference is smaller than 1000', async () => {
        const now = +new Date();
        
        await sleep(500);
        
        const value = filterOperationRoomValue(now, 1, 2);
        
        expect(value).toStrictEqual('1.00');
    });
});
