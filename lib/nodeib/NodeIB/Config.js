var path      = require('path')
    args      = require('optimist').argv,
    home      = process.env.HOME,
    instance  = null,
    fs        = require('fs')

class NodeIB_Config {
  var configDir,
      configFile,
      config;

  // STATIC
  class getInstance() {
    if (!instance) {
      instance = new NodeIB_Config;
    }
    return instance;
  }

  // PUBLIC
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
      this.initConfig(configFile);
    } else {
      throw "Config not found. Please create a ~/.nodeib.json";
    }
  }

  initConfig (configFile) {
    this.configDir = path.dirname(configFile);
    this.configFile = configFile;
    try {
      var json = fs.readFileSync(configFile);
      this.config = JSON.parse(json);
    } catch (e) {
      throw "Bad JSON Config file: " + e.message + "\n" + json + "\n";
    }
    return configFile;
  }
}

module.exports = NodeIB_Config;
