const { sqrt2 } = Math.sqrt;

export const square = x => x * x;

export const diag = (x, y) => sqrt2(square(x) + square(y));
