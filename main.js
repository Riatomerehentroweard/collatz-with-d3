//1 2 4 8

const collatzData = [];
const numbersReachingFour = {}

const ceiling = 10000;
for (let i = 1; i < ceiling; i++) {
    console.log((i/ceiling)*100 + '%');
    
    const collatzNumber = getCollatzNumber(i, i, 0, 4);
    collatzData.push({
        x: i,
        y: collatzNumber.numberOfSteps
    });

    if(numbersReachingFour[collatzNumber.previousNumber]) {
        numbersReachingFour[collatzNumber.previousNumber].hits++;
    } else {
        numbersReachingFour[collatzNumber.previousNumber] = {
            hits: 1
        }
    }  
}

console.log(numbersReachingFour);


// simplest way to plot
var data = {
    name: 'points',
    values: collatzData
};
new LineChart()
    .for([data])
    .plot();