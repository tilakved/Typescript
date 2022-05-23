import data from "./sample.json";
let x: any, x2: any, x3: any, x4: any, y: any;


// create an array with all tables.

x = data.map((y) => y.tables)
x = x.flat();
// console.log(x);


// create an array of tables where checked inreservation is not null.

x2 = [];
for (let a of x) {
    x2.push(x.filter((y: any) => {
        return y.checked_in_reservation;
    }));
}
x2 = x2.flat();
// console.log(x2);


// create an array of tables where no. of seats is more than 2 and available is 1. 

x3 = [];
for (let b of x) {
    x3.push(x.filter((y: any) => {
        return y.no_of_seats > 2 && y.available == 1;
    }));
}
x3 = x3.flat();
// console.log(x3);

// create object where 3 parameters- name, reservation.length, table's parent ID

const newArr: any = [];
data.map(section => {
    section.tables.map(table => {
        if (table?.upcoming_reservations?.length > 0) {
            const obj = {
                name: table.name,
                reservation: table.upcoming_reservations.length,
                Id: section.id
            }
            newArr.push(obj);
        }
    });
});

x4 = [];
for (let a of x) {
    x4.push(x.filter((y: any) => {
        return y.no_of_seats
    }))
}
x4 = x4.flat();
// console.log(x4);

const a = Object.entries(data.map(b =>{
    return b.is_automatic
}))

console.log(a);
