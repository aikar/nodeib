var nodeib = require('nodeib');
console.log(nodeib.getModulePaths('foo', 'bar'));
console.log(Config.get('foo', 1))
console.log(Config.get('bar', 2))
console.log(Config.get('baz.foo', 3))
console.log(Config.get('baz', 4))
