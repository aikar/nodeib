class Foo : NodeIB_Module_Base {
  new() {
    
    console.log("Module Init")
    new Foo_Bar();
  }
}
module.exports = Foo

