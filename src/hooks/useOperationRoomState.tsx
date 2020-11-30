import { useEffect, useState } from 'react';
import { getOperationRoomObservable } from '../observables/operationRoomObservable';

export const useOperationRoomState = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        const observable = getOperationRoomObservable().subscribe((data) => {
            setData(data);
        });
        return () => {
            observable.unsubscribe();
        }
    }, []);
    return data;
};