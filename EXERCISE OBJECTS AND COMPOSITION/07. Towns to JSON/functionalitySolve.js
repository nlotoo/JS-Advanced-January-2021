function solve(input) {

    let [columns, ...table] = input.map(splitLine)


    function isEmptyString(x) {
        return x !== ''
    }

    function convertToNum(x) {
        return  isNaN(x) ? x : Number(Number(x).toFixed(2))
    }

    function splitLine(input) {
        return input.split('|').filter(isEmptyString).map(x => x.trim()).map(convertToNum);
    }




    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc
        },{})
    }))

}
