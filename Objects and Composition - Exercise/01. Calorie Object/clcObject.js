function obcjectCalories(data) {
    let obj = {};
    for (let i = 0; i < data.length; i += 2) {
        let item = data[i];
        let calories = Number(data[i + 1]);
        obj[item] = calories;
    }

    return obj;

}
