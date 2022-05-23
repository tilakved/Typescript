// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// function sum(x, y, z) {
//     return x + y + z;
// }

let count = 0;
var total = [0, 1, 2, 3, 4].reduce(function (a: any, b: any) {
    // console.log(a,b);
    count++;
    return a + b;
})
// console.log("reduce",total);
// 0+1=1
// 1+2=3
// 2+3=5
// 3+4=7

var total1 = [0, 1, 2, 3, 4].map(function (a: any, b: any) {
    return a + b;
    
})
// console.log(total1);

// a=0,1
// b=0,1


const num:number[] = [0, 2, 3, 4, 5]

// Calculate the sum
console.log(num.reduce( (acc, current) => {
  console.log(acc,current); 
    return acc + current
},2)) 