function solve(data) {


    listJuice = {};
    inBottle = {};

    for (let line of data) {
        let [juice, quantity] = line.split(' => ')
        quantity = Number(quantity)
        if (listJuice.hasOwnProperty(juice)) {
            temp = listJuice[juice]
            listJuice[juice] = quantity + temp
        } else {
            listJuice[juice] = quantity
        }
        if (listJuice[juice] >= 1000) {
            if (inBottle[juice]) {
                inBottle[juice] += parseInt(listJuice[juice] / 1000);
            } else {
                inBottle[juice] = parseInt(listJuice[juice] / 1000);
            }

            listJuice[juice] = listJuice[juice] % 1000;
        }


    }

    Object.entries(inBottle).forEach(([key , value]) => { 
        console.log(`${key} => ${value}`);
   })

    arrayOfJuice = [];
    for (let bar in listJuice) {
        class JuiceMaker {
            constructor(juice, quantity) {
                this.juice = juice;
                this.quantity = quantity;
            }
        }

        let newJuice = new JuiceMaker(bar, listJuice[bar])
        arrayOfJuice.push(newJuice)
    }

    for (lineOfArray of arrayOfJuice) {

    }















} solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

)