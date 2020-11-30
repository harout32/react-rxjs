import { of } from 'rxjs';
import { delay, repeat, switchMap } from 'rxjs/operators';
import { getRandomNumberInRange } from '../utils/getRandomNumberInRange';

export const getRandomObservableInRange = (min: number, max: number) => of('').pipe(
    switchMap(() => {
        return of({
            data: getRandomNumberInRange(min, max),
            timestamp: +new Date(),
        }).pipe(
            delay(getRandomNumberInRange(100, 2000))
        );
    }),
    repeat(),
)