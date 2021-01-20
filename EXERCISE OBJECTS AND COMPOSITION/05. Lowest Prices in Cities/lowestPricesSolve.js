function solve(data) {
    let log = {};

    while (data.length) {
        let sale = data.shift()
        let [town, product, price] = sale.split(' | ')
        price = Number(price)


        if (!log[product]) {
            log[product] = { town, price: price }
        } else {
            log[product] = log[product].price <= price ? log[product] : log[product] = { town, price: price }
        }

    }

    let result = [];

    for (const product in log) {
        
         result.push(`${product} -> ${log[product].price} (${log[product].town})`);
    }
}
