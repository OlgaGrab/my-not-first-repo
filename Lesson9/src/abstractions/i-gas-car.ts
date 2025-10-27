import { ICar } from "./i-car";

export interface IGasCar extends ICar{
    tankSize: number;
    fuelType: string;
    refuel(): void;
}
