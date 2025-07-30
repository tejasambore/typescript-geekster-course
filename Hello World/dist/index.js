"use strict";
let arr = [1, 2, 3, 4, 5];
let user = {
    name: "Akhil Sharma",
    age: 24,
    isAdmin: true,
    marks: 100,
    printName(name) {
        console.log(name);
    },
};
user.printName(user.name);
