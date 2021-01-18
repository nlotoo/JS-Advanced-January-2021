function rotateArray(input, num) {

    let rotationCount = num;
    let inputArray = input;


    for (let i = 0; i < rotationCount; i++) {
        let lastOne = inputArray.pop();
        inputArray.unshift(lastOne);
    }

    return inputArray.join(' ')



}
