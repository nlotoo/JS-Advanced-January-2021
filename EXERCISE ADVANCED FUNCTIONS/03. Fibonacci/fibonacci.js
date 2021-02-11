function getFibonaci() {

    let num1 = 0;
    let num2 = 1;
   function fib() {
        let result = num1 + num2
        num1 = num2
        num2 = result
        return num1;

    }
    return fib;
}