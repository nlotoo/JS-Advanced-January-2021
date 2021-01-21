function rectangle(width, heigth, color) {

    function firstLetter(word) {
        return word[0].toUpperCase() + word.slice(1)
    }

    function calcArea() {
        return this.width * this.heigth
    }


    return {
        width,
        heigth,
        color: firstLetter(color),
        calcArea
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


