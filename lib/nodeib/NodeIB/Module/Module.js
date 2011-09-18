var path = require('path')
class NodeIB_Module {
	new(moduleName) {
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
};

module.exports = NodeIB_Module;