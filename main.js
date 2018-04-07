const collatzData = [];
const numbersReachingFour = {}
const breakNumber = 1;
const sequences = [];

const ceiling = 100000;
for (let i = breakNumber; i < ceiling; i++) {

    const collatzNumber = getCollatzNumber(i, i, 0, breakNumber);
    collatzData.push({
        x: i,
        y: collatzNumber.numberOfSteps
    });

    if (numbersReachingFour[collatzNumber.previousNumber]) {
        numbersReachingFour[collatzNumber.previousNumber].hits++;
    } else {
        numbersReachingFour[collatzNumber.previousNumber] = {
            hits: 1
        }
    }

    sequences.push(collatzNumber.sequence);
}

console.log(sequences);

var data = {
    name: 'points',
    values: collatzData
};
new LineChart()
    .for([data])
    .plot();