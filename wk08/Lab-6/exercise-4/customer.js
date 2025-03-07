"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this._age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log("Age: ".concat(this._age));
    };
    return Customer;
}());
exports.Customer = Customer;
