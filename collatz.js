const getCollatzNumber = (number, previousNumber, numberOfSteps, breakNumber) => {
    ++numberOfSteps;

    if (number === breakNumber) {
        return {
            numberOfSteps,
            previousNumber
        };
    }

    if (number % 2 == 0) {
        return getCollatzNumber(number / 2, number, numberOfSteps, breakNumber);
    } else {
        return getCollatzNumber(number * 3 + 1, number, numberOfSteps, breakNumber);
    }
}