function solve() {

	textAreaElement = document.querySelector('textarea').value;
	const button = document.querySelector('button');

	const result = document.querySelector('#bestRestaurant>p')
	const resultW = document.querySelector('#workers>p')


	button.addEventListener('click', event => {
		textAreaArray = JSON.parse(textAreaElement)

		let restaurants = {}

		textAreaArray.forEach(element => {

			const tokens = element.split(' - ');
			const name = tokens[0];
			const workerArr = tokens[1].split(', ')
			let workers = [];

			avgSalary = 0;
			bestSalary = 0;

			for (let worker of workerArr) {
				const workerTokens = worker.split(' ')
				const salary = Number(workerTokens[1])
				workers.push({ name: workerTokens[0], salary, })
			}

			if (restaurants[name]) {
				workers = workers.concat(restaurants[name].workers)

			}
			workers.sort((a, b) => b.salary - a.salary);

			bestSalary = workers[0].salary;
			avgSalary = workers
				.reduce((sum, worker) => sum + worker.salary) / workers.length


			restaurants[name] = {
				workers,
				avgSalary,
				bestSalary,
			}

		});

		let bestRestaurantSalary = 0;
		let best = undefined;

		for (const name in restaurants) {
			if (restaurants[name].avgSalary > bestRestaurantSalary) {
				best = {
					name,
					avgSalary: restaurantsp[name].avgSalary,
					bestSalary: restaurantsp[name].bestSalary,
					workers: restaurantsp[name].workers,
				}
			}
			bestRestaurantSalary = restaurants[name].avgSalary
		}
		result.textContent = `Name: ${best.name} Average Salary: ${(best.avgSalary).toFixed(2)}} Best Salary: ${(best.bestSalary).toFixed(2)}`
		best.workers.forEach(worker => {
			workersResult = `Name: ${worker.name} With Salary ${worker.salary}`
		})
		resultW.textContent = workersResult.join(' ');


	});












}
