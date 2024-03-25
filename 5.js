//Задание 5
class ElectroDevice  {
    constructor(name,kWh) {
        this.deviceType = "";
        this.name = name;
        this.wattage = kWh;
        this.currentWattage = 0;
        this.on = false;
    }
    plugInSocket() {
        if (!this.on) {
            this.on = true;
            this.currentWattage = this.wattage;
        } else {
            console.log(`${this.deviceType} "${this.name}" уже включен.`);
        }
    }

    plugOutSocket() {
        if (this.on) {
            this.on = false;
            this.currentWattage = 0;
        } else {
            console.log(`${this.deviceType} "${this.name}" и так выключен.`);
        }
    }
    
}

class Kettle extends ElectroDevice  {
    constructor(name, kWh, heatClass) {
        super(name, kWh);
        this.deviceType = "Чайник";
        this.heatElemCount = heatClass;
    }
}

class Laptop extends ElectroDevice  {
    constructor(name, kWh, cpuFreq) {
        super(name, kWh);
        this.deviceType = "Ноутбук";
        this.cpuFrequency = cpuFreq;
    }
}

const tefal = new Kettle("Tefal", 1000, 3);
const asus = new Laptop("Asus", 300, 2.4);

console.log(tefal);
console.log(asus);
console.log(asus.currentWattage + tefal.currentWattage)
console.log("-------------");

tefal.plugInSocket();
console.log(tefal);
console.log(asus.currentWattage + tefal.currentWattage)
console.log("-------------");

tefal.plugOutSocket();
console.log(tefal);
console.log(asus.currentWattage + tefal.currentWattage)
console.log("-------------");

asus.plugInSocket();
console.log(asus);
console.log(asus.currentWattage + tefal.currentWattage)
console.log("-------------");

asus.plugOutSocket();
console.log(asus);
console.log(asus.currentWattage + tefal.currentWattage)
console.log("-------------");

asus.plugInSocket();
tefal.plugInSocket();
console.log(asus.currentWattage + tefal.currentWattage);