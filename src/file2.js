const helloWorld = 'HelloWorld';

export function debug(msg) {
    console.log(msg); // eslint-disable-line
}

export function print() {
    debug(helloWorld);
}
