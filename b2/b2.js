Array.prototype.filter2 = function (callback) {
    if (typeof callback !== "function") {
        return;
    }
    var newArray = [];
    var ArrayLength = this.length;
    for (var i = 0; i < ArrayLength; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
    return number % 2 === 0;
}

var evenNumbers = numbers.filter2(isEven);

console.log(evenNumbers);
