// console.log("Hello World..!");

// let courseName:string = "TypeScript";
// let numbers:number = 12345567;
// let isAdmin:boolean = true;
// let value;
// value = 1;

// Declaring an Array:
let arr:number[] = [1, 3, 5, 6, 7, 9];
// let arr = [1, 2, 3, 4, true]
// arr.forEach(n => n.)

arr[2] = 20;
console.log(arr);

// Tuple:
let user:[number, string, boolean] = [1, "John", true];
console.log(user[0]); // 1
console.log(user[1]); // John   
console.log(user[2]); // true

// enum
// const amar = 1;
// const akbar = 2;
// const anthony = 3;

const enum movie {amar = 3, akbar = 4, anthony = 5};

let movieCharacter: movie = movie.amar;
console.log(movieCharacter); // 3

// function:
function sum(a:number, b:number):number {
    // let res = 20;    // unusedLocalVariable

    if (a < 10) return a*2;
    return a+b;
}

sum(4, 5);

let student: { 
    name:string, 
    age:number, 
    course:string, 
    readonly marks:number 
    printName:(name: string) => void;
} = { 
    name: "Akhil Sharma", 
    age:22, 
    course: "BE", 
    marks:87,
    printName: (name: string) => console.log(`Name: ${name}`),
};

console.log("Student: ", student);
student.name = "Akhil";
// student.marks = 90;  // Error: Cannot assign to 'marks' because it is a read-only property.