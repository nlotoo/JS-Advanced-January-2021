function solve(speedKmH, area) {



    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50
            break;
        case 'residential':
            limit = 20
            break;
    }

    const speeding = speedKmH - limit

    if (speeding <= 0) {
        return console.log(`Driving ${speedKmH} km/h in a ${limit} zone`)
    }
    status = ''
    if (speeding <= 20) {
        status = 'speeding'        
    } else if (speeding > 20 && speeding <= 40){
        status = 'excessive speeding'
    }else {
        status='reckless driving'
    }



        return console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`)




}
