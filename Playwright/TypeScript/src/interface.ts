// // 1. Sử dụng interface để định nghĩa kiểu của một object
// // 🤔🤔🤔 Tạo 1 interface định nghĩa cấu trúc của một đối tượng Info
// interface Info {
//     name: string;
//     age: number;
//     isActice: boolean;
// }
// let user1: Info = {
//     name: "Pi",
//     age: 32,
//     isActice: true
// };
// console.log("***** No.1 *****\n", user1);

// // 2. Interface với thuộc tính tùy chọn
// // 🤔🤔🤔 Tạo interface Car với: name (bắt buộc, string), made (bắt buộc, number), color? (tùy chọn, string)
// // Viết hàm printCar(car: Car) để in thông tin xe. Nếu có color, in màu xe. Nếu không, in "Color not specified".
// interface Car {
//     name: string;
//     made: number;
//     color?: string;  // Thuộc tính tùy chọn
// }
// function printCar(car: Car) {
//     console.log("Name: ", car.name);
//     console.log("Car: ", car.made);
//     if (car.color === undefined) {
//         console.log("Color not specified");
//     }
//     else {
//         console.log(car.color);
//     }
// }
// let car1: Car = {
//     name: "Car 1",
//     made: 2010,
//     color: "black"
// };
// let car2: Car = {
//     name: "Car 2",
//     made: 2015
// };

// console.log("***** No.2 *****");
// printCar(car2);

// // 3. Interface với phương thức (Methods)
// // 🤔🤔🤔 Tạo interface Animal với: name (chuỗi, bắt buộc), sound() (hàm in âm thanh)
// // Tạo đối tượng dog, gọi dog.sound() và in kết quả ra màn hình.

// interface Animal {
//     name: string;
//     sound(): void;
// }
// let dog: Animal = {
//     name: "Dog",
//     sound() {
//         console.log(`Name: ${this.name}; Sound: Gau Gau !!!`);
//     }
// };
// console.log("***** No.3 *****");
// dog.sound();

// // 4. Kế thừa interface
// // 🤔🤔🤔 Tạo 2 interface trong đó interface Employee sẽ kế thừa interface Person
// interface Person {
//     name: string;
// }
// interface Employee extends Person {
//     employeeID: number;
// }

// let employee: Employee = {
//     name: "Pi Pi",
//     employeeID: 123
// }
// console.log("***** No.4 *****\n", employee);

// // 5. Interface với readonly và index signature
// // 5.1 Readonly (Chỉ đọc)
// // 🤔🤔🤔 Bạn muốn lưu thông tin cấu hình hệ thống và không cho phép thay đổi sau khi khởi tạo.
// interface Config {
//     readonly apiKey: string;
//     readonly baseUrl: string;
// }

// const config: Config = {
//     apiKey: "123456",
//     baseUrl: "https://example.com"
// };

// // config.apiKey = "abc"; // Error
// console.log("***** No.5.1 *****\n", config.baseUrl);

// // 5.2 index signature (Định nghĩa khoá động)
// // 🤔🤔🤔 Bạn muốn tạo một object mà khóa có thể thay đổi linh hoạt 
// // (ví dụ: lưu trữ cài đặt theme, tùy chọn người dùng).

// interface Setting {
//     [key: string]: string; // Cho phép bất kỳ khóa string nào có kiểu string
// }

// const userSettings: Setting = {
//     theme: "white",
//     langue: "English"
// };

// userSettings.background = "black";
// console.log("***** No.5.2 *****\n", userSettings.background); 





// Bài tập 
// Bài 1: Định nghĩa Interface cơ bản
// Tạo một interface Person với các thuộc tính:

// name (chuỗi)
// age (số)
// email (chuỗi)
// Sau đó, khai báo một biến có kiểu Person và gán giá trị cho nó.

// interface Person {
//     name: string;
//     age: number;
//     email: string;

// }
// let person: Person = {
//     name: "Thi",
//     age: 15,
//     email: "cobelolem@gmail.com"
// }
// console.log(person.email)

// Bài 2: Interface với phương thức
// Tạo một interface Car với:

// brand (chuỗi)
// year (số)
// Phương thức getInfo() trả về chuỗi chứa thông tin xe.
// Tạo một object có kiểu Car và gọi phương thức getInfo().
interface Car {
    brand: string;
    year: number;
    getInfo(): void;
}
let car: Car = {
    brand: "Mercidec",
    year: 12,
    getInfo() {
        console.log(this.brand)
    },
}

