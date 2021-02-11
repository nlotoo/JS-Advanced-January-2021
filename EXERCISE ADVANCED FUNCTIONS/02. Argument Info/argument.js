function solve(...arguments) {

    objList = {};

    for (let i = 0; i < arguments.length; i++) {

        resultOfType = typeof arguments[i];

        if (objList.hasOwnProperty(resultOfType)) {
            objList[resultOfType] += 1
        } else {
            objList[resultOfType] = 1
        }

        console.log(`${resultOfType}: ${arguments[i]}`)
    }

    sorted = Object.entries(objList).sort(Sorting).forEach(element => {
        console.log(`${element[0]} = ${element[1]}`)
    });

    function Sorting(a, b) {
        return b[1] - a[1]
    }
    
    
}
solve({ name: 'bob' }, 3.333, 9.999)