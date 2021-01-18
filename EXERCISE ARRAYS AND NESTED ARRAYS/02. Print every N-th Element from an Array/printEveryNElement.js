function printN(input, n) {


    let counter = 0;
    let result = [];
    for (let i = 1; i < input.length; i++) {

        if (i === 1) {
            result.push(input[0])

        }

        counter++
        if (counter === n) {
            result.push(input[i])
            counter = 0;
        }

    }

    console.log(result)

}
printN(['5',
    '20',
    '31',
    '4',
    '20'], 2)

printN(['dsa',
    'asd',
    'test',
    'tset'], 2)
printN(['1',
    '2',
    '3',
    '4',
    '5'], 6)