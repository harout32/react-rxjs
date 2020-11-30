import { combineLatest } from "rxjs"
import { map, pairwise, startWith, throttleTime } from "rxjs/operators";
import { filterOperationRoomValue } from "../utils/filterOperationRoomValue";
import { getRandomObservableInRange } from "./randomObservableInRange"

const $humidityObservable = getRandomObservableInRange(30, 60);
const $temperatureObservable = getRandomObservableInRange(18, 22);
const $airPressureObservable = getRandomObservableInRange(0, 1);
export const getOperationRoomObservable = () => {
    return combineLatest([
        $humidityObservable,
        $temperatureObservable,
        $airPressureObservable,
    ]).pipe(
        throttleTime(100),
        startWith(null),
        pairwise(),
        map(([previous, current]) => {
            let previousHumidity = null;
            let previousTemperature = null;
            let previousAirPressure = null;
            if (current !== null) {

                if (previous !== null) {
                    // first emit
                    [
                        { data: previousHumidity },
                        { data: previousTemperature },
                        { data: previousAirPressure }
                    ] = previous;
                }
                const [humidity, temperature, airPressure] = current;
                return {
                    humidity: filterOperationRoomValue(humidity.timestamp, humidity.data, previousHumidity),
                    temperature: filterOperationRoomValue(temperature.timestamp, temperature.data, previousTemperature),
                    airPressure: filterOperationRoomValue(airPressure.timestamp, airPressure.data, previousAirPressure),
                }
            }
        }))
}