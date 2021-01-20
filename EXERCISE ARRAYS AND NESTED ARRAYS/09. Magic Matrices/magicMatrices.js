function magicXa(input) {
    let array = [];

    let firstColumnSum = 0;
    let secondColumSum = 0;
    let thirtColumSum = 0;



    for (let i = 0; i < input.length; i++) {
        let rowArray = input[i];
        if (i === 0) {
            array.push(rowArray.reduce((a, b) => a + b))
        } else if (i === 1) {
            array.push(rowArray.reduce((a, b) => a + b))
        } else if (i === 2) {
            array.push(rowArray.reduce((a, b) => a + b))
        }
        for (let j = 0; j < rowArray.length; j++) {
            if (j === 0) {
                firstColumnSum += rowArray[j]
            } else if (j === 1) {
                secondColumSum += rowArray[j]
            } else if (j === 2) {
                thirtColumSum += rowArray[j]
            }
        }
    }


    array.push(firstColumnSum, secondColumSum, thirtColumSum);
    array.sort((a, b) => !(a === b) ? flag = false : flag=true );

    return flag
   

} 