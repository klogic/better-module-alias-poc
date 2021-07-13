const module1 = require('$module1/index')
function module2(){
	// I want to call module1
	console.log('I call from module2: ' + module1());

	return "Hi I'am module2";
}
module.exports = module2