export function run() {
    let jobs = [1000, 2000, 3000, 4000, 5000];
    let newJobs = jobs.map(job => {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, job, 'foo');
        }).then(() => {
            console.log(`finish job #${job}`);
        });
    });

    Promise.all(newJobs).then(values => {
      console.log("all done"); // [3, 1337, "foo"]
    });
}

// promise that works 50 % of the time
function worksSometimes() {
    return new Promise((resolve, reject) => {
        let p = Math.random();
        if (p > 0.5) {
            resolve(`it worked! probability p was ${Math.round(p*100.0)/100.0}`);
        } else {
            reject(`it didn't work :( probability p was ${Math.round(p*100.0)/100.0})`);
        }
    });
}

export function run2() {
    worksSometimes()
        .then(msg => console.log(msg))
        .catch(msg => console.warn(msg));
}
