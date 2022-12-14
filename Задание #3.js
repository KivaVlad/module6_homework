function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(2)(8);
console.log(f);
