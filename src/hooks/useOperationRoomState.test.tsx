import { renderHook, act } from '@testing-library/react-hooks';
import { sleep } from '../utils/sleep';
import { useOperationRoomState } from './useOperationRoomState';



test('should have received all three emitted values at maximum 2000ms', async () => {
    let result: any;
    await act(async () => {
        result = renderHook(() => useOperationRoomState()).result;
        await sleep(2000);
    });
    expect(result?.current).toHaveProperty('humidity');
    expect(result?.current).toHaveProperty('temperature');
    expect(result?.current).toHaveProperty('airPressure');
});

test('should receive null on sync operation', () => {

    const result = renderHook(() => useOperationRoomState()).result;
    expect(result?.current).toBe(null);
});
