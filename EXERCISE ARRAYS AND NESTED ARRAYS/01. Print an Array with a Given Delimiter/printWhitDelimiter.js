function delimiterWhit(input, delimiter) {



    let inputArray = ""
    input.forEach((x, i) => { (i === input.length - 1) ? inputArray += x : inputArray += x + `${delimiter}` })

    return inputArray
}
delimiterWhit(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)
delimiterWhit(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)