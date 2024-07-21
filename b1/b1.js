Array.prototype.push2 = function (item) {
    if (typeof item !== "function") {
        return;
    }
    this[this.length] = item;
    return this.length;
};

var fruits = ["Apple", "Banana"];
fruits.push("Orange");

console.log(fruits);
