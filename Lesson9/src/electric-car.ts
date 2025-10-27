import { IElectricCar } from './abstractions/i-electric-car';
import { Car } from './car';

export class ElectricCar extends Car implements IElectricCar {
    public batteryCapacity: number;
    public chargerType: string;

    public constructor(torque: number, horsePower: number, awd: boolean, batteryCapacity: number, chargerType: string) {
        super(torque, horsePower, awd);
        this.batteryCapacity = batteryCapacity;
        this.chargerType = chargerType;
    }

    public charge(): void {
        console.log('Charging');
    }
}
