var args  = require('optimist').argv,
    fs    = require('fs'),
    path  = require('path');
var home = process.env.HOME;

class NodeIB {
  var config;
  new(foo = 'bar') {
    
    var configPaths = [
      process.cwd() + "/" + (args.c || 'nodeib.json'), 
      home + "/.nodeib.json", 
      "/etc/nodeib.json"
      ];
    var configFile = null;
    if (configPaths.some(function(file) {
      return (path.existsSync(file) && (configFile = file));
    })) {
      this.initConfig(configFile);
    } else {
      throw "Config not found. Please create a ~/.nodeib.json";
    }
  }

  initConfig (configFile) {
    this.configDir = path.dirname(configFile);
  }

  getModulePaths (...paths) {
    return [...paths,
      this.configDir + "/modules", 
      process.cwd() + "/modules",
      home + "/.nodeib_modules",
      "/usr/local/lib/nodeib_modules",
      "/usr/lib/nodeib_modules"
      ];
  }
}
module.exports = NodeIB;