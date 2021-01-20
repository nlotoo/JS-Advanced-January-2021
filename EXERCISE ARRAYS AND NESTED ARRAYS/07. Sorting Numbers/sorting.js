function sortingBigestSmalest(input) {
    let result = [];
    let inputArray = input
    
    sortedArray = inputArray.sort((a, b) => a - b)
    let l = sortedArray.length /2

    for (let i = 0; i < l; i++) {
        front = sortedArray.shift();
        back = sortedArray.pop();
        result.push(front, back)

    }

   return result;
} 