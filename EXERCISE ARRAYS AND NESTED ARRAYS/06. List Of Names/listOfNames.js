function listOfNames(input) {

    counter = 1;
    input.sort((a, b) => a.localeCompare(b)).forEach(x => {
        
        console.log(`${counter++}.${x}`)
    })
}
