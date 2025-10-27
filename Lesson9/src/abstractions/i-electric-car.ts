import { ICar } from "./i-car";

export interface IElectricCar extends ICar{
    batteryCapacity: number;
    chargerType: string;
    charge(): void;
}
