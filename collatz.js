const getNumberOfCollatzSteps = (number, numberOfSteps) => {
    ++numberOfSteps;

    if (number === 4) {
        return numberOfSteps;
    }

    if (number % 2 == 0) {
        return getNumberOfCollatzSteps(number / 2, numberOfSteps);
    } else {
        return getNumberOfCollatzSteps(number * 3 + 1, numberOfSteps);
    }
}