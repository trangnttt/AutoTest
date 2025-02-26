// string, number, boolean
let username: string = "cute cute";
let age: number = 23;
let isActice: boolean = true;
console.log("*** string, number, boolean ***");
console.log(`my name is: ${username}`)

// array
let type1: string[] = ["a", "b", "c"];
let type2: Array<number> = [1, 2, 3];
let type3: (number | string)[] = ["Pi", "28"];
let type4: number[][] = [
    [1, 3, 5],
    [2, 4, 6]
];
console.log("*** array ***");
console.log(`Cách 1: ${type1}`)
console.log(`Cách 2: ${type2}`)
console.log(`Cách 3: ${type3}`)
console.log(`Cách 4: ${type4}`)

//tuple
let tuple1: [string, number] = ["Thi", 28];
console.log(tuple1);

// enum
enum Roles {
    Admin,
    User,
    Guest
}
console.log("enum: ", Roles.Admin);

// any | unknown
let val: any = "Hello";
val = true;
let num: number = val;
console.log("*** any ***");
console.log(`Any không kiểm tra nên không lỗi & num = ${num}`);

let val1: unknown = 5;
val1 = "Hi";
// let num1: number = val1; //Xảy ra lỗi vì unknown sẽ kiểm tra trước khi run
console.log("*** unknown ***");
if (typeof val1 === "number") {
    console.log("val1 is string string!!!");
}
else {
    console.log("val1 is not string!!!");
}
