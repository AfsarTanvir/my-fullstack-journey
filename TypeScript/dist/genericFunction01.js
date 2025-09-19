/*
Generic parameters are declared inside <...>.
TS can often infer types, so explicit generics are optional.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function createInstance8c(ctor) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (ctor.bind.apply(ctor, __spreadArray([void 0], args, false)))();
}
var Person8c = /** @class */ (function () {
    function Person8c(name) {
        this.name = name;
    }
    return Person8c;
}());
var p8c = createInstance8c(Person8c, "Tanvir 8c");
console.log(p8c);
var Car8c = /** @class */ (function () {
    function Car8c(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    return Car8c;
}());
var car8c = createInstance8c(Car8c, "Toyota", 2025);
console.log(car8c);
