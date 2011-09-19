var net   = require('net'),
    path  = require('path');
    
class NodeIB_Module_Process {
  var module = null;
  
  // STATIC
  class init(module) {
    module = path.resolve(process.cwd(), module);
    if (!module || !path.existsSync(module)) {
      throw new Error("Error: Module not found.");
    }
    require('autoloader')(module + "/lib");
    new NodeIB_Module_Process(require(module));
  }
  
  // PUBLIC
  new(module) {
    if (arguments.callee.caller.caller !== NodeIB_Module_Process.init) {
      throw new Error("NodeIB_Module_Process: Please use init() to initialize a module process");
    }
    this.module = new module;
    
    this.linkup();
  }
  
  /**
   * Links up to the parent process
   */
  linkup(cb = null) {
    //net.createConnection
  }
}

module.exports = NodeIB_Module_Process
