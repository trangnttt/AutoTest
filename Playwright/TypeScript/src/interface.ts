// Cách 1: sử dụng interface để định nghĩa kiểu của một object

interface Person {
    name: string;
    age: number;
    isActice: boolean;
}
let user1: Person = {
    name: "Pi",
    age: 32,
    isActice: true
};
console.log("***** Cách 1 *****\n", user1);

// Cách 2: Interface với thuộc tính tùy chọn
interface Car {
    name: string;
    made: number;
    color?: string;  // Thuộc tính tùy chọn
}
function printCar(car: Car) {
    console.log("Name: ", car.name);
    console.log("Car: ", car.made);
    if (car.color === undefined) {
        console.log("Color not specified");
    }
    else {
        console.log(car.color);
    }
}
let car1: Car = {
    name: "Car 1",
    made: 2010,
    color: "black"
};
let car2: Car = {
    name: "Car 2",
    made: 2015
};

console.log("***** Cách 2 *****");
printCar(car2);

// Cách 3: Interface với phương thức (Methods)
interface Animal {
    name: string;
    sound(): void;
}
let dog: Animal = {
    name: "Dog",
    sound() {
        console.log(`Name: ${this.name}; Sound: Gau Gau !!!`);
    }
};
console.log("***** Cách 3 *****");
dog.sound();