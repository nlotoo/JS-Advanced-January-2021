function extracting(input) {

    inputArray = input
    resultArray = [];
    first = inputArray[0];
    resultArray.push(first)
    for (let i = 1; i < inputArray.length; i++) {


        if (first <= inputArray[i]) {
            resultArray.push(inputArray[i])
            first = inputArray[i]
        }
    }
    console.log(resultArray)





}

 extracting([1, 
    2, 
    3,
    4]);
    
extracting([20, 1, 2, 3, 4])