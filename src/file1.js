let sqrt = Math.sqrt;

export let square = (x) => {
    return x * x;
};

export let diag = (x, y) => {
    return sqrt(square(x) + square(y));
};
