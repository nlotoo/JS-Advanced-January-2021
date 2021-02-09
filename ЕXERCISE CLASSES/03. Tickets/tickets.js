function solveTickets(data, criterion) {

    ticketList = []


    

    for (let line of data) {
        let [destination, price, status] = line.split('|')

        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = Number(price);
                this.status = status
            }
        }
        let newTicket = new Ticket(destination, price, status)
        ticketList.push(newTicket)

    }
  
    return ticketList.sort(Sorting)


    function Sorting(a, b) {

        if (criterion === 'destination') {
            return a.destination.localeCompare(b.destination)
        } else if (criterion === 'price ') {
            return a.price - b.price
        } else if (criterion === 'status') {
            return a.status.localeCompare(b.status)
        }

    }





}
solveTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
)

