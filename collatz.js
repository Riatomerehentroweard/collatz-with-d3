const getCollatzNumber = (number, previousNumber, numberOfSteps, breakNumber, sequence) => {
    ++numberOfSteps;

    if (!sequence) {
        sequence = []
    }

    sequence.unshift(number);

    if (number === breakNumber) {
        return {
            numberOfSteps,
            previousNumber,
            sequence
        };
    }

    if (number % 2 == 0) {
        return getCollatzNumber(number / 2, number, numberOfSteps, breakNumber, sequence);
    } else {
        return getCollatzNumber(number * 3 + 1, number, numberOfSteps, breakNumber, sequence);
    }
}