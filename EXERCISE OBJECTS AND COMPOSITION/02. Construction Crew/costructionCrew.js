function solve(data) {



    if (data['dizziness']) {
        data['levelOfHydrated'] += data['weight'] * 0.1 * data['experience']
        data['dizziness'] = false
    }


    return data



}
solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})
solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
})
solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
})