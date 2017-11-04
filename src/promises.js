function run() {
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

module.exports = {
    run
};
