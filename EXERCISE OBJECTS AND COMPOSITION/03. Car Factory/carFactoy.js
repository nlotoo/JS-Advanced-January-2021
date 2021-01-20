function solve(input) {

    function engineFunc(power) {

        engine = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]
        return engine.find((arrayRow) => arrayRow.power >= power)
    }

    function carriageFunc(color, carriage) {
        return { type: carriage, color: color }
    }

    function wheelsFunc(size) {
        if (size % 2 == 0) {
            --size
        }
        return size
    }


    console.log({
        model: input.model,
        engine: engineFunc(input.power),
        carriage: carriageFunc(input.color, input.carriage),
        wheels: wheelsFunc(input.wheelsize)
    })

}
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)