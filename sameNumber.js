function sameDigit(num) {
    let n =num
    let sumOfdigits = 0;
    let first = num % 10;
    let flag = false
    let number = String(num)


    for (let i = 0; i < number.length; i++) {
        if (n <= 9) {
            flag=true
            break;
            

        }

        sumOfdigits += num % 10
        if (num % 10 !== first) {
            num = Math.floor(num / 10)
            flag = true
        } else {
            num = Math.floor(num / 10);
        }

    }
    if (!flag) {
        console.log(true);
        console.log(sumOfdigits);
    } else {
        console.log(false);
        console.log(sumOfdigits)
    }


}

sameDigit(2222222)
