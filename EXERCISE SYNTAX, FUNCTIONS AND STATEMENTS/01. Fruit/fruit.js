function solve(fruit, kg, price) {



    let kgNeed = Number(kg/1000);
    let priceNeed=Number(price);


    console.log(`I need $${(kgNeed*priceNeed).toFixed(2)} to buy ${(kgNeed).toFixed(2)} kilograms ${fruit}.`)


}
solve('orange', '2500', '1.80')
solve('apple', '1563', '2.35')