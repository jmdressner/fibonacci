
fibonacci(2, 3);

function fibonacci(number1, number2) {
	let result = [number1, number2];
	for(let i = 0; i <= 10; i++) {
		let sum = result[i] + result[i+1];
		result.push(sum);
	}	
	console.log(result);
}