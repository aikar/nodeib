var path      = require('path')
    args      = require('optimist').argv,
    home      = process.env.HOME,
    fs        = require('fs')

Singleton('Config', {
  has: {
    configDir:null,
    configFile: null,
    config: null
  },
  my: {
    methods: {
      get: function (key, def) {
        return new Config().get(key, def)
      }
    }
  },
  methods: {
    // PUBLIC
    initialize: function () {
      var configPaths = [
        path.resolve(process.cwd(), args.c || 'nodeib.json'), 
        home + "/.nodeib.json", 
        "/etc/nodeib.json"
        ];
      
      if (process.env.NODEIB_CONFIG) {
        configPaths.unshift(path.resolve(process.cwd(), process.env.NODEIB_CONFIG))
      }
      
      var configFile = null;
      if (configPaths.some(function(file) {
        return (path.existsSync(file) && (configFile = file));
      })) {
        this.initConfig(configFile);
      } else {
        throw "Config not found. Please create a ~/.nodeib.json";
      }
    },
  
    initConfig: function (configFile) {
      this.configDir = path.dirname(configFile);
      this.configFile = configFile;
      try {
        var json = fs.readFileSync(configFile);
        this.config = JSON.parse(json);
      } catch (e) {
        throw "Bad JSON Config file: " + e.message + "\n" + json + "\n";
      }
      return configFile;
    },
  
    get: function (key, def) {
      def = def || null;
      var config = this.config;
      var value = def;
      key.toString().split('.').forEach(function(key) {
        if (config[key]) {
          value = config = config[key]
        }
      });
      return value;
    }
  }
});

