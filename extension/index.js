require('better-module-alias')(__dirname)
const module1 = require('./deepModules/modules1')
const module2 = require('./anotherDeepModules/modules2')
module.exports = {module1, module2}