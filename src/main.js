import * as file1 from './file1';
import * as file2 from './file2';
import * as promises from './promises';

console.log(file1.square(3));
file2.print();
window.test = {};
window.test.square4 = file1.square(4);
console.log(window.test.square4);

promises.run();
promises.run2();

window.FILIP = {
    run1: promises.run,
    run2: promises.run2
};
