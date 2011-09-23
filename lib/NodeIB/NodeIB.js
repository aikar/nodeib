var fs    = require('fs'),
    path  = require('path'),
    args  = require('optimist').argv;
    
var home = process.env.HOME;

Singleton('NodeIB', {
  has: {
    configFile: {
      is: 'rw'
    }
  },
  methods: {
    // PUBLIC
    initialize: function () {
      this.configFile = new Config().configFile;
    },
  
    getModulePaths: function (paths) {
      paths = paths || [];
      return paths.concat([
        path.dirname(this.configFile) + "/modules", 
        process.cwd() + "/modules",
        home + "/.nodeib_modules",
        "/usr/local/lib/nodeib_modules",
        "/usr/lib/nodeib_modules"
        ]);
    },
  
    startBot: function () {
      
    },
    
    
    initModule: function () {
      NodeIB.Module.Process.init(args.m);
    }
  }
});
