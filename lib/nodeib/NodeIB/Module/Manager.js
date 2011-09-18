var instance = null;
class NodeIB_Module_Manager {

  // STATIC
  class getInstance() {
    if (!instance) {
      instance = new NodeIB_Module_Manager;
    }
    return instance;
  }

  // PUBLIC
  new() {
      if (arguments.callee.caller.caller !== NodeIB_Module_Manager.getInstance) {
      throw new Error("NodeIB_Module_MAnager - singleton: Please use getInstance() to get an instance.");
    }
    this.bar = "x";
  }

  initModule () {
    var module = process.env.NODEIB_MODULE || null;
    if (!module) {
      throw "Error: Module name not found. Please do not run nodeib_module yourself. It is for nodeib to use.";
    }
  }

}
module.exports = NodeIB_Module_Manager
