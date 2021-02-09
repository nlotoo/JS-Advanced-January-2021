function solve(array, criteria) {

    function spliLine(line) { return line.split('|') }


    function converToticket([destination, price, status]) {
        return new Ticket(destination, Number(price), status)
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    const sortMapper = {

        'destination': (a, b) => a.destination.localeComapre(b.destination),
        'price': (a, b) => a - b,
        'status': (a, b) => a.status.localeComapre(b.status),
    }


    return array
        .map(spliLine)
        .map(converToticket)
        .sort(sortMapper[criteria])
}