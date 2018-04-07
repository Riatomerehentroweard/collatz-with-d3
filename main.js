const collatzData = [];

for (let i = 1; i < 100000; i++) {
    const numberOfCollatzSteps = getNumberOfCollatzSteps(i, 0);
    collatzData.push({
        x: i,
        y: numberOfCollatzSteps
    });
    
}

// simplest way to plot
var data = {
    name: 'points',
    values: collatzData
};
new LineChart()
    .for([data])
    .plot();