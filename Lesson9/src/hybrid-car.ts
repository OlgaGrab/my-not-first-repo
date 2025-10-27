import { IHybridCar } from './abstractions/i-hybrid-car';
import { GasCar } from './gas-car';

export class HybridCar extends GasCar implements IHybridCar {
    public electricRange: number;
    public batteryCapacity: number;
    public chargerType: string;
    private driveMode: 'fuel' | 'electric' | 'hybrid' = 'hybrid';

    public constructor(
        torque: number,
        horsePower: number,
        awd: boolean,
        batteryCapacity: number,
        chargerType: string,
        tankSize: number,
        fuelType: string,
        electricRange: number
    ) {
        super(torque, horsePower, awd, tankSize, fuelType);
        this.batteryCapacity = batteryCapacity;
        this.chargerType = chargerType;
        this.electricRange = electricRange;
    }
    public charge(): void {
        console.log('Full charge');
    }
    public changeMode(driveMode: 'fuel' | 'electric' | 'hybrid'): 'fuel' | 'electric' | 'hybrid' {
        this.driveMode = driveMode;
        return this.driveMode;
    }
}
