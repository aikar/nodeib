var net   = require('net'),
    path  = require('path');
    
Class('NodeIB.Module.Process', {
  has:{
    module: {
      is: 'rw',
      init: function() {
        console.log("module.init", arguments)
      }
    }
  },
  my: {
    have: {
      x:'1'
    },
    methods: {
      // STATIC
      init: function (moduleFileName) {
        if (!moduleFileName) {
          throw new Error("Please specify a module with -m");
        }
        // convert relative to absolute.
        moduleFileName = path.resolve(process.cwd(), moduleFileName);
        if (!moduleFileName || !path.existsSync(moduleFileName)) {
          throw new Error("Error: Module not found: " + moduleFileName);
        }
        
        var nope = require('nope');
        nope.autoload(moduleFileName + "/lib");
        var moduleEntryFileName = require.resolve(moduleFileName);
        var module = nope.loadClassByFile(moduleEntryFileName);
        new NodeIB.Module.Process({module: module});
      }
    }
  },
  methods: {
    // PUBLIC
    initialize: function (vars) {
      this.module = new vars.module;
      this.linkup();
    },
    
    /**
     * Links up to the parent process
     */
    linkup: function (cb) {
      console.error('LINK')
      //net.createConnection
    }
  }
})
