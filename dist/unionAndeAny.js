"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M";
let apiRequestStatus = "pending";
let airlineSeat;
airlineSeat = "aisle";
const orders = ["12", " 20", "25", "56"];
let currentorder;
for (let order of orders) {
    if (order === "20") {
        currentorder = order;
        break;
    }
}
console.log(currentorder);
//# sourceMappingURL=unionAndeAny.js.map