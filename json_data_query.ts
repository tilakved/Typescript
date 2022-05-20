// // const json = require('store_array.json');
// // var arr = [4, 5, 9, 87, 6]
// // const myfunction = (x: number) => {
// //   return x < 10
// // }
// // console.log(json);
// // console.log(arr.every((x: number) => (x < 10)))
// // console.log(arr.every((x: number) => {
// //   return x < 10;
// // }
// // ))

// // var arr = [4, 5, 9, 87, 6]
// // arr.some(myfunction)
// // function myfunction(x) {
// //   return x < 10
// // }
// const details = [{
//     "Cname": "wot",
//     "person": [{
//         "name": "tilak",
//         "id": 0,
//         "depart": "vue"
//       },
//       {
//         "name": "riya",
//         "id": 1,
//         "depart": "angular"
//       },
//       {
//         "name": "tilak",
//         "id": 2,
//         "depart": "react"
//       }
//     ]
//   },
//   {
//     "Cname": "ammazza",
//     "person": [{
//         "name": "tilak",
//         "id": 0,
//         "depart": "angular"
//       },
//       {
//         "name": "riya",
//         "id": 1,
//         "depart": "angular"
//       },
//       {
//         "name": "tilak",
//         "id": 2,
//         "depart": "react"
//       }
//     ]
//   }
// ];

// const x = details.filter(function(y) {
//   return y.Cname == "ammazza";
// });
// /* console.log(x); */
// const z = x.map(function(data) {
//   return data.person.filter(function(p) {
//     return p.depart == "angular"
//   })
// })
// console.log(z);
