//Задание 4
function ElectroDevice(name,kWh) {
    this.deviceType = "",
    this.name = name,
    this.wattage = kWh,
    this.on = false,
    this.currentWattage = 0,
    this.plugInSocket = function() {
        if (!this.on) {
            this.on = true;
            this.currentWattage = this.wattage;
        } else {
            console.log(`${this.deviceType} "${this.name}" уже включен.`);
        }
    },
    this.plugOutSocket = function() {
        if (this.on) {
            this.on = false;
            this.currentWattage = 0;
        } else {
            console.log(`${this.deviceType} "${this.name}" и так выключен.`);
        }
    }
}

function Kettle(name, kWh, heatClass) {
    ElectroDevice.call(this, name, kWh);
    this.deviceType = "Чайник",
    this.heatElemCount = heatClass;
}

function Laptop(name, kWh, cpuFreq) {
    ElectroDevice.call(this, name, kWh);
    this.deviceType = "Ноутбук",
    this.cpuFrequency = cpuFreq;
}

Kettle.prototype = new ElectroDevice();
Laptop.prototype = new ElectroDevice();

//проверка
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