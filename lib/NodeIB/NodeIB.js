var fs    = require('fs'),
    path  = require('path'),
    args  = require('optimist').argv;
    
var home = process.env.HOME;
var instance = null;

class NodeIB {
  var configFile;

  // STATIC
  class getInstance() {
    if (!instance) {
      instance = new NodeIB;
    }
    return instance;
  }
  
  // PUBLIC
  new() {
    if (arguments.callee.caller.caller !== NodeIB.getInstance) {
      throw new Error("NodeIB - singleton: Please use getInstance() to get an instance.");
    }
    this.configFile = Config.getInstance().configFile;
  }

  getModulePaths (...paths) {
    return [...paths,
      path.dirname(this.configFile) + "/modules", 
      process.cwd() + "/modules",
      home + "/.nodeib_modules",
      "/usr/local/lib/nodeib_modules",
      "/usr/lib/nodeib_modules"
      ];
  }

  startBot() {
    
  }
  
  
  initModule () {
    NodeIB_Module_Process.init(args.m);
  }
}

module.exports = NodeIB;
