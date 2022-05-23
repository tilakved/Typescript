"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sample_json_1 = __importDefault(require("./sample.json"));
var x, x2, x3, y;
// create an array with all tables.
x = sample_json_1.default.map(function (y) { return y.tables; });
x = x.flat();
// console.log(x);
// create an array of tables where checked inreservation is not null.
x2 = [];
for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
    var a = x_1[_i];
    x2.push(x.filter(function (y) {
        return y.checked_in_reservation;
    }));
}
x2 = x2.flat();
// console.log(x2);
// create an array of tables where no. of seats is more than 2 and available is 1. 
x3 = [];
for (var _a = 0, x_2 = x; _a < x_2.length; _a++) {
    var b = x_2[_a];
    x3.push(x.filter(function (y) {
        return y.no_of_seats > 2 && y.available == 1;
    }));
}
x3 = x3.flat();
// console.log(x3);
// create object where 3 parameters- name, reservation.length, table's parent ID
var newArr = [];
sample_json_1.default.map(function (section) {
    section.tables.map(function (table) {
        var _a;
        if (((_a = table === null || table === void 0 ? void 0 : table.upcoming_reservations) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            var obj = {
                name: table.name,
                reservation: table.upcoming_reservations.length,
                Id: section.id
            };
            newArr.push(obj);
        }
    });
});
console.log(newArr);
var x4 = [];
for (var _b = 0, x_3 = x; _b < x_3.length; _b++) {
    var c = x_3[_b];
    x4.push(x.filter(function (y) {
        return y.seats;
    }));
}
