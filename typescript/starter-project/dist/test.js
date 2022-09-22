"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const add = (num1, num2) => {
    return num1 + num2;
};
button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
});
// const person: {
//     name: string,
//     job: number
// } = {
//     name: "Ha",
//     job: 1
// }
// console.log(person.name)
// console.log(person)
