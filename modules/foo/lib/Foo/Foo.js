Singleton({
  isa: NodeIB.Module.Base,
  methods: {
    initialize: function () {
      console.log("Foo: Module Init")
      new Foo.Bar();
      this.onPM("Admiral Ackbar", "ITS A TRAP")
    }
  }
});
