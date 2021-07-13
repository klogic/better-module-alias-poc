# About this project

This project for POC how better-module-alias work

### Step
1. create module1 function in `./extension/deepModules/modules1/index.js`
2. create module2 function in `./extension/anotherDeepModules/modules2/index.js`
3. in module2 call module1 function
4. in `./extension/index.js` call both function
5. in package.json add `_moduleAliases`
6. repace `require(../../anotherDeepModules/modules2/index)` with `$module1/index`
7. on `./index.js` call `extension` for check is extension callable.