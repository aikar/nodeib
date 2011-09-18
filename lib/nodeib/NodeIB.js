var fs    = require('fs'),
    path  = require('path');
var home = process.env.HOME;
var foo = {"bar": "baz"}
class NodeIB {
  var configFile;

  new() {
    this.configFile = NodeIB_Config.getInstance().configDir;
  }

  getModulePaths (...paths) {
    return [...paths,
      path.basename(this.configDir) + "/modules", 
      process.cwd() + "/modules",
      home + "/.nodeib_modules",
      "/usr/local/lib/nodeib_modules",
      "/usr/lib/nodeib_modules"
      ];
  }

  startBot() {
    
  }
}

module.exports = NodeIB;
