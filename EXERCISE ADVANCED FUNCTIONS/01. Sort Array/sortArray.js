function solve(data, type) {


    if (type === "asc") {
        data.sort((a, b) => a - b);
    } else if (type === "desc") {
        data.sort((a, b) => b - a);
    }
   return data
}
solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')