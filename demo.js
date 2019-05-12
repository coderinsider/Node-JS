


var fs = require('fs');
var data = require('./package.json');
console.log(data.name);
fs.readFile('./package.json', 'utf-8', (err, data) => {
	var data = JSON.parse(data)
	console.log(data.author)
})
