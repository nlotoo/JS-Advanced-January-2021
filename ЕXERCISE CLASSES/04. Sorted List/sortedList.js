
// let arr = [1, 2, 3, 4, 5, 6]

// arr =arr.slice(1, 1)
// console.log(arr)



// stopera;
// •	add(elemenent) - adds a new element to the collection
// •	remove(index) - removes the element at position index
// •	get(index) - returns the value of the element at position index
// •	size - number of elements stored in the collection




class List {
    constructor() {
        this.colection = [];
        this.size = this.colection.length;
    }
    add(input) {
        this.colection.push(input)
        this.colection.sort((a, b) => a - b);
        

    }
    remove(input) {
        if (input <= this.colection.length && input >= 0) {
            

            return this.colection = this.colection.filter((x, index) => input !== index)

        } else {
            return false
        }


    }
    get(index) {
        if (index <= this.colection.length && index >= 0 && this.colection[index] !== undefined) {

           

            for (let i = 0; i < this.colection.length; i++) {
                if (i == index) {
                    return this.colection[i]
                }
            }
        } else {
            return false
        }

    }
    size() {
        return this.colection.length
    }
}













let list = new List();
list.add()
console.log(list.get(0));
list.remove(-1);
console.log(list.get(1));
