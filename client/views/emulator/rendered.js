Template.emulator.onRendered(function() {
  const self = this;
  const file = this.data.rom().file();

  this.cfxnes = nes = new CFxNES({});

  // output
  this.cfxnes.setVideoOutput(this.find("#Emulator"));

  /// Success, run the emulator
  this.cfxnes.downloadCartridge(file.url()).then(function() {

    self.cfxnes.start();
  })
});


Template.emulator.onDestroyed(function() {
  this.cfxnes.stop();
});
