// let courseName: string = "typescript";
// let numbers:number = 7498263185;
// let isAdmin:boolean = true;
// let value;
// value = 123;
// value = "a";
// value = false;

// Array: in TypeScript
// let arr = [1, true, "true"];
let arr:number[] = [1, 2, 3, 4, 5];      // Array of numbr data type
// let lang:string[] = ["typescript", 'javascript', "python"];

// arr[0];
// arr[1];
// arr[2] = 20;
// console.log(arr);


// Tuple:
// let user:[number, string, boolean] = [12, "Akhil Sharma", true];
// console.log(user[0]); // 12
// console.log(user[1]); // Akhil Sharma
// console.log(user[2]); // true
// user[2].


// enum:
// enum movie {amar = 3, akbar = 4, enthiny = 5};
// let movieCharacter: movie = movie.akbar;
// console.log(movieCharacter);

// // function:
// function sum (a:number):number {
//     return a;
// }

// function sum (a:number, b:number):number {
//     return a+b;
// }
 
// let num = sum(5);
// let num = sum(5, 6);
// console.log(num);


// Object:
let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    readonly marks: number;

    // method:
    printName: (name: string) => void;
} = {
    name: "Akhil Sharma",
    age: 24,
    isAdmin: true,
    marks: 100,
    // method implementation:
    printName(name) {
        console.log(name);
    },
};

// user.printName(user.name);

// user.marks = 200; // Error: Cannot assign to 'marks' because it is a read-only property.
