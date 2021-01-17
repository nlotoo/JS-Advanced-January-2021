function solve(num, firstOp, secondOp, thirdOp, fourthOp, fifthOp) {


    let n = Number(num)

    let operationArray = [];
    operationArray.push(firstOp, secondOp, thirdOp, fourthOp, fifthOp);
    console.log(operationArray);

    for (let i = 0; i < operationArray.length; i++) {

        if (operationArray[i] === 'chop') {
            n = n / 2
            console.log(n)
        } else if (operationArray[i] === 'dice') {
            n = Math.sqrt(n)
            console.log(n)
        } else if (operationArray[i] === 'spice') {
            n = n + 1
            console.log(n)
        } else if (operationArray[i] === 'bake') {
            n = n * 3
            console.log(n)
        } else if (operationArray[i] === 'fillet') {
            substractPeace = n * 0.20
            n = n - substractPeace
            console.log(n)
        }
    }














}
//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')