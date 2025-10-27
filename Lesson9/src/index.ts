import { ICar } from './abstractions/i-car';
import { ElectricCar } from './electric-car';
import { GasCar } from './gas-car';
import { HybridCar } from './hybrid-car';

const reno = new GasCar(260, 150, true, 40, 'Diesel');
const vw = new ElectricCar(300, 170, true, 56, 'NCS');
const honda = new HybridCar(270, 180, false, 70, 'NCS', 45, 'Gas', 400);

function driveCar(car: ICar): void {
    car.turnOn();
    car.accelerate(50);
    car.accelerate(30);
    console.log(car.currentSpeed);
    car.accelerate(-80);
    car.turnOff();
    console.log(car);
}
driveCar(reno);
driveCar(vw);
driveCar(honda);
