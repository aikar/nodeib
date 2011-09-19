var instance = null;
class NodeIB_Module_Manager {
  var loadedModules = {};
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
      throw new Error("NodeIB_Module_Manager - singleton: Please use getInstance() to get an instance.");
    }
  }

}
module.exports = NodeIB_Module_Manager
