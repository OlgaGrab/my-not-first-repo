import { IElectricCar } from "./i-electric-car";
import { IGasCar } from "./i-gas-car";

export interface IHybridCar extends IGasCar, IElectricCar{
    electricRange: number;
}
