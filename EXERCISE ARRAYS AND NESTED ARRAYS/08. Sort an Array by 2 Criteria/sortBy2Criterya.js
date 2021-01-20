function sortBy2(input) {



    sorted = input.sort(sorting)

    function sorting(index1, index2) {

        first = index1
        second = index2

        if (first.length == second.length) {
            return first.localeCompare(second)
        } else {
            return first.length - second.length
        }





    }


    console.log(sorted.join('\n'))




}
sortBy2(
    [ 'Jack', 'Isacc', 'George', 'Theodor', 'Harrison' ]
)