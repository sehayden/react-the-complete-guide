const button = document.querySelector("button") as HTMLButtonElement
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement
const add = (num1: number, num2: number) => {
    return num1 + num2
}

button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value))
})

// const person: {
//     name: string,
//     job: number
// } = {
//     name: "Ha",
//     job: 1
// }

// console.log(person.name)
// console.log(person)