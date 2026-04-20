// const num = [12, 45, 2, 67, 34, 89, 1];

// let boshi = num[0];
// let ohiri = num[0];

// for (let i = 1; i < num.length; i++) {
//   if (num[i] > boshi) {
//     boshi = num[i];
//   }
//   if (num[i] < ohiri) {
//     ohiri = num[i];
//   }
// }

// console.log("Eks:", boshi);
// console.log("Eng k s:", ohiri);







// // const fruits = ["apple", "banana", "cherry", "date"];

// // for (let i = fruits.length - 1; i >= 0; i--) {
// //   console.log(fruits[i]);
// // }





// // const numbers = [10, 20, 30, 40, 50];

// // let sum = 0;

// // for (let i = 0; i < numbers.length; i++) {
// //   sum += numbers[i];
// // }

// // console.log(sum);


let nums = [1, 2, 2, 3, 3,  4, 5];
let result = [];

for(n of nums){
    if(!result.includes(n)){
        result.push(n);
    }
}
console.log(result);
