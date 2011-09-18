var args  = require('optimist').argv,
    fs    = require('fs'),
    path  = require('path');
var home = process.env.HOME;
var foo = {"bar": "baz"}
class NodeIB {
  var configDir;
  new() {
    var configPaths = [
      process.env.NODEIB_CONFIG,
      process.cwd() + "/" + (args.c || 'nodeib.json'), 
      home + "/.nodeib.json", 
      "/etc/nodeib.json"
      ];
    var configFile = null;
    if (configPaths.some(function(file) {
      return (path.existsSync(file) && (configFile = file));
    })) {
      this.init(configFile);
    } else {
      throw "Config not found. Please create a ~/.nodeib.json";
    }
  }
  init (configFile) {
    this.initConfig(configFile);
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

  start() {
    
  }
}

module.exports = NodeIB;
