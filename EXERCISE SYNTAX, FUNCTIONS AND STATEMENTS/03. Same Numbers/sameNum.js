function solve(number) {

    const string = number.toString();
    let isSame = true;
    let sum = 0;


    for (let i = 0; i < string.length; i++) {
        let current = Number(string[i]);
        if (string[i] !== string[i + 1]) {
            isSame = false;
        }
        sum += current;
    }
    console.log(`${isSame}\n${sum}`)

}
solve(1234)
solve(2222222)
