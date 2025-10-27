export interface ICar {
    torque: number;
    horsePower: number;
    awd: boolean;
    currentSpeed: number;
    state: 'on' | 'off';

    turnOn(): void;
    turnOff(): void;
    accelerate(kmph: number): number;
}
