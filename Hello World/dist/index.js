"use strict";
let arr = [1, 3, 5, 6, 7, 9];
arr[2] = 20;
console.log(arr);
let user = [1, "John", true];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
;
let movieCharacter = 3;
console.log(movieCharacter);
function sum(a, b) {
    if (a < 10)
        return a * 2;
    return a + b;
}
sum(4, 5);
let student = {
    name: "Akhil Sharma",
    age: 22,
    course: "BE",
    marks: 87,
    printName: (name) => console.log(`Name: ${name}`),
};
console.log("Student: ", student);
student.name = "Akhil";
