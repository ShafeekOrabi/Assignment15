let arr = [23, 21, 161, 42, 151, 612, 15, 62, 52];

arr.forEach((element, index) => {
  console.log(index, element);
});

function breakline() {
  console.log("---------------------");
}
breakline();

let newArr = arr.map((element) => element / 10);

newArr.forEach((element) => {
  console.log(element);
});

breakline();

let oddArr = arr.filter((element) => element % 2 !== 0);

oddArr.forEach((element) => {
  console.log(element);
});

breakline();

let total = arr.reduce((sum, element) => sum + element, 0);

console.log(`Total is ${total}`);

breakline();

let result = arr.some((element) => element % 2 !== 0);

console.log(`Is any element in arr is odd ?: ${result}`);

breakline();

let result1 = arr.every((element) => element % 2 !== 0);

console.log(`Are all elements in arr are odd ?: ${result1}`);

breakline();

let firstEven = arr.find((element) => element % 2 === 0);

console.log(`first eve element in arr is ${firstEven}`);

breakline();

let lastEven = arr.findLast((element) => element % 2 === 0);

console.log(`Last even element in arr ${lastEven}`);

breakline();

let firstEvenIndex = arr.findIndex((element) => element % 2 === 0);

console.log(`First even element's index in arr: ${firstEvenIndex}`);

breakline();

let lastEvenIndex = arr.findLastIndex((element) => element % 2 === 0);

console.log(`Last even element's index in arr: ${lastEvenIndex}`);

breakline();

let obj = {
  name: "Shafeek",
  age: 22,
};

console.log(obj);

breakline();

let { name } = obj;

console.log(`Name is ${name}`);

breakline();

let { age } = obj;

console.log(`Age is ${age}`);

breakline();

function printDetails({ name, age }) {
  console.log("Inside printDetails function");
  console.log(`Name is ${name}`);
  console.log(`Age is ${age}`);
}

printDetails(obj);

breakline();
let number_1 = 15;
let number_2 = 35;

console.log("--Before--");
console.log(`Number 1 is: ${number_1}`);
console.log(`Number 2 is: ${number_2}`);

[number_1, number_2] = [number_2, number_1];

console.log("--After--");
console.log(`Number 1 is: ${number_1}`);
console.log(`Number 2 is: ${number_2}`);

breakline();
