function heroicInvetory(data) {

    let input = data
    let resultBag = [];


    for (let i = 0; i < input.length; i++) {
        let obj = {};
        let [name, level, items] = input[i].split(' / ')
        items = items ? items.split(', ') : [];

        obj.name = name
        obj.level = Number(level)
        obj.items = items
        resultBag.push(obj)


    }

    return JSON.stringify(resultBag)
}
