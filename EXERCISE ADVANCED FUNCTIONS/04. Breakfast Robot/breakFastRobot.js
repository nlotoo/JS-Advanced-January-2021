function solution(...data) {

    // apple - made with 1 carbohydrates and 2 flavour
    // lemonade - made with 10 carbohydrates and 20 flavour
    // burger - made with 5 carbohydrates, 7 fat and 3 flavour
    // eggs - made with 5 protein, 1 fat and 1 flavour
    // turkey - made with 10 protein, 10 carbohydrates, 10 fat and 10 flavour
    const receipts = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    for (let i = 0; i < data.length; i++) {
        let [command, ...rest] = data[i].split(' ')

        if (command === 'restock') {
            let typeStock = rest[0];
            let quantity = rest[1];
            stock[typeStock] += quantity
        } else if (command === 'prepare') {
            let product = rest[0];
            let productsQuantity = Number(rest[1]);
            if (receipts[product]) {
                for (line of Object.entries(receipts[product])) {
                    needed = receipts[product][line[0]] * productsQuantity
                    avaiable = stock[line[0]]
                    if (avaiable < needed) {
                      `Error: not enough ${line[0]} in stock`
                    }

                }

            }
        }
    }




}
solution(
    // "restock carbohydrate 10",
    // "restock flavour 10",
    "prepare apple 1",
    "restock fat 10",
    "prepare burger 1",
    "report")