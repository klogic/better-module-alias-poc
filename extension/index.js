require('better-module-alias')(__dirname)
const module1 = require('$module1')
const module2 = require('$module2')
module.exports = {module1, module2}