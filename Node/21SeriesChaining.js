// series(tasks, callback): Each function in tasks run only after the previous function is completed. If any of the functions throw an error, the subsequent functions are not executed and the callback is fired with an error value. On completion of tasks, the data is passed into the callback function as an array.

// Async. series takes the collection of asynchronous functions and optional callback method. When all the tasks complete the execution, then the final callback will be called and return the results to the server. This result variable will hold the array of the item with the company, job, application, and licence object.


const async = require('async');

async.series([
	(callback) => {
		setTimeout(() => {
			console.log('This is the first function');
			callback(null, 1);
		}, 3000);
	},
	(callback) => {
		setTimeout(() => {
			console.log('This is the second function');
			// callback(null, 1);
		}, 3000);
		callback(2000, 2);
	}
], (err, results) => {
	if (err) console.error(err);
	console.log(results);
});
