Class('NodeIB.Module.Base', {
  methods: {
    onChannelText: function (from, to, message) {
      
    },
    
    onPM: function (from, message) {
      console.error("PM", from, message)
    }
  }
});
