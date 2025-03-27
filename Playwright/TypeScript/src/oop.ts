// Encapsulation (Đóng gói)
// Inheritance (Kế thừa)
// Abstraction (Trừu tượng hóa) 
// Polymorphism (Đa hình)

// Hãy tưởng tượng chúng ta quản lý nhân viên trong một công ty.

// 1️⃣ Encapsulation (Đóng gói) – 👉 Giấu thông tin quan trọng
// 🔹 Ví dụ: Nhân viên có tên, lương nhưng không ai được xem lương trực tiếp.

class Employee {
    private salary: number; // Không cho truy cập trực tiếp từ bên ngoài

    constructor(public name: string, salary: number) {
        this.salary = salary;
    }
    getSalary(): number {
        return this.salary;  // Cung cấp phương thức để lấy lương
    }
}

let emp = new Employee("Pi", 5000);
console.log(emp.name);
console.log(emp.getSalary());

// 2️⃣ Inheritance (Kế thừa) – Tránh lặp lại code 👉 Khi có nhiều đối tượng có chung đặc điểm nhưng cần mở rộng thêm.
// 🔹 Ví dụ: Nhân viên và quản lý có chung thuộc tính, nhưng quản lý có thêm chức năng riêng.

class Manager extends Employee {
    constructor(name: string, salary: number, private department: string) {
        super(name, salary); // Gọi constructor của Employee
    }

    getDepartment(): string {
        return this.department;
    }
}
const manager = new Manager("Bob", 7000, "IT");
console.log(manager.name); // ✅ Bob
console.log(manager.getSalary()); // ✅ 7000
console.log(manager.getDepartment()); // ✅ IT

// 3️⃣ Abstraction (Trừu tượng hóa) – Định nghĩa chung cho tất cả nhân viên
// 👉 Khi muốn định nghĩa chung mà không cần triển khai ngay, để các class con tự xử lý.
// 🔹 Ví dụ: Mọi nhân viên đều phải làm việc, 
// nhưng cách làm việc của mỗi loại nhân viên sẽ khác nhau.
abstract class Person1 {
    constructor(public name: string) { }
    abstract work(): void; // Mỗi loại nhân viên sẽ có cách làm việc riêng
}

class Developer extends Person1 {
    work(): void {
        console.log(`${this.name} is coding.`);
    }
}

class Tester extends Person1 {
    work(): void {
        console.log(`${this.name} is testing.`);
    }
}

const dev = new Developer("Charlie");
dev.work(); // ✅ Charlie is coding.

const tester = new Tester("Diana");
tester.work(); // ✅ Diana is testing.

// 4️⃣ Polymorphism (Đa hình) – Một hàm dùng cho nhiều loại đối tượng
// 👉 Khi muốn viết code linh hoạt, có thể dùng chung cho nhiều đối tượng.
// 🔹 Ví dụ: Tất cả nhân viên đều làm việc, nhưng cách làm việc khác nhau.
function employeeWork(person: Person1) {
    person.work(); // Không cần biết cụ thể ai, chỉ cần họ có thể "work"
}

const dev2 = new Developer("Eve");
const tester2 = new Tester("Frank");

employeeWork(dev2); // ✅ Eve is coding.
employeeWork(tester2); // ✅ Frank is testing.