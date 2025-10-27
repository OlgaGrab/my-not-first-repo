import { ICar } from './abstractions/i-car';

export class Car implements ICar {
    public torque: number;
    public horsePower: number;
    public awd: boolean;
    public currentSpeed: number;
    public state: 'on' | 'off';

    public constructor(torque: number, horsePower: number, awd: boolean) {
        this.torque = torque;
        this.horsePower = horsePower;
        this.awd = awd;
        this.currentSpeed = 0;
        this.state = 'off';
    }

    public turnOn(): void {
        this.state = 'on';
    }

    public turnOff(): void {
        this.state = 'off';
    }

    public accelerate(kmph: number): number {
        this.currentSpeed = this.currentSpeed + kmph;
        return this.currentSpeed;
    }
}
