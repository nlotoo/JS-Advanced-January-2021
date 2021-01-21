function catalogueSolve(data) {


    let obj = {};

    for (line of data) {
        let [item, price] = line.split(' : ')
        obj[item] = price
    }

    sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    
    let sortingAlpha = {};

    for (let i = 0; i < sorted.length; i++) {
        letter = sorted[i][0].slice(0, 1)
        if (sortingAlpha.hasOwnProperty(letter)) {
            sortingAlpha[letter].push(sorted[i][0], sorted[i][1])
        } else {
            sortingAlpha[letter] = [sorted[i][0], sorted[i][1]]
        }
    }
    for (viewLine of Object.entries(sortingAlpha)) {
        console.log(viewLine[0])
        for (let i = 0; i < viewLine[1].length; i++) {
            if (i % 2 === 0) {
                items = viewLine[1][i]
                prices = viewLine[1][i + 1]
                console.log(`  ${items}: ${prices}`)
            }
        }
    }
}
