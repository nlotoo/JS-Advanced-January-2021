function addAndRemove(input) {

    let result = [];
    let counter = 0;

    input.forEach(x => {
        if (x === 'add') {
            counter++
            result.push(counter)

        } else if (x === 'remove') {
            result.pop()
            counter++
        }
    })

    return (result.length <= 0) ? 'Empty' : result.join('\n')

}
