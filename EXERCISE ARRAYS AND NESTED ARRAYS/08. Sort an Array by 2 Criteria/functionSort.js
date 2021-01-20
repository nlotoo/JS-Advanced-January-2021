function sortBy2(input) {

    return input.sort((index1, index2) => (index1.length == index2.length) ? index1.localeCompare(index2) : index1.length - index2.length).join('\n')

}
