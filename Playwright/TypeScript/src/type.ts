// 1. Định nghĩa một kiểu Book mô tả thông tin sách bao gồm các thuộc tính:
// title (string); author (string); year (number)
// Sau đó, tạo một đối tượng book1

type Book = {
    title: string;
    author: string;
    year: number
}

let book1: Book = {
    title: "book 1",
    author: "author_name",
    year: 2025
}

console.log(book1);

// 2. type không thể kế thừa như interface nhưng có thể giao với nhau
type lesson = {
    name: string;
}
// type part.lesson = {
//     idPart: number;
// }

type Staff = {
    name: string;
    email: string;
};

type PhoneNumber = {
    countryCode: string;
    number: string;
};

type ContactInfo = Staff & PhoneNumber;

const contact: ContactInfo = {
    name: "John Doe",
    email: "john@example.com",
    countryCode: "+1",
    number: "555-1234"
};

// 3. Tạo một kiểu Status có thể nhận các giá trị "active", "inactive" hoặc "pending".
// Sau đó, khai báo một biến userStatus có kiểu là Status.
type Status = "active" | "inactive" | "pending";
let userStatus: Status;
userStatus = "active";
// userStatus = "disabled"; // lỗi

// 4. Tạo một kiểu NumberArray mô tả một mảng các số. Sau đó, tạo một biến ages có kiểu là NumberArray.
type NumberArray = number[];
const ages: NumberArray = [25, 30, 45, 50];

// 5. Tạo một kiểu Coordinate mô tả một tọa độ gồm 2 giá trị: x và y, cả hai đều là số. 
// Sau đó, tạo một biến point kiểu Coordinate.
type Coordinate = [number, number];

const point: Coordinate = [10, 20];

// 6. Tạo một kiểu SumFunction mô tả một hàm nhận vào hai tham số là các số và trả về tổng của chúng.
type SumFunction = (a: number, b: number) => number;
const sum: SumFunction = (a, b) => a + b;
console.log(sum(5, 3)); // 8