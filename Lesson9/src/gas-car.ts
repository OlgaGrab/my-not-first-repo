import { IGasCar } from './abstractions/i-gas-car';
import { Car } from './car';

export class GasCar extends Car implements IGasCar {
    public tankSize: number;
    public fuelType: string;

    public constructor(torque: number, horsePower: number, awd: boolean, tankSize: number, fuelType: string) {
        super(torque, horsePower, awd);
        this.tankSize = tankSize;
        this.fuelType = fuelType;
    }
    public refuel(): void {
        console.log('Full tank');
    }
}
