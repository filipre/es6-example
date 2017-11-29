export function run() {
    const jobs = [1000, 2000, 3000, 4000, 5000];
    const newJobs = jobs.map(job => new Promise((resolve) => {
        setTimeout(resolve, job, 'foo');
    }).then(() => {
        console.log(`finish job #${job}`);
    }));

    Promise.all(newJobs).then(() => {
        console.log('all done'); // [3, 1337, "foo"]
    });
}

// promise that works 50 % of the time
function worksSometimes() {
    return new Promise((resolve, reject) => {
        const p = Math.random();
        if (p > 0.5) {
            resolve(`it worked! probability p was ${Math.round(p * 100.0) / 100.0}`);
        } else {
            reject(new Error(`it didn't work :( probability p was ${Math.round(p * 100.0) / 100.0})`));
        }
    });
}

export function run2() {
    worksSometimes()
        .then(msg => console.log(msg))
        .catch(msg => console.warn(msg));
}

export function run3() {
    const jobs = [worksSometimes(), worksSometimes()];
    Promise.all(jobs)
        .then(msgs => console.log('worked. all messages are returned: ', msgs))
        .catch(msg => console.warn('if it does not work, this single msg is returned: ', msg));
}
