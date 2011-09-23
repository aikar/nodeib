var path = require('path')
Class('NodeIB.Module', {
	methods: {
		initialize: function (moduleName) {
			var paths = nodeib.getModulePaths();
			var module = null;
			paths.some(function (path) {
				var fullPath = path + "/" + moduleName.toLower() + "/package.json";
				return (path.existsSync(fullPath) && (module = fullPath));
			});
	
			if (module) {
				console.log("Found module", fullPath)
			}
		}
	}
});
