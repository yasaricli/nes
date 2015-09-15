// Default sessions
Session.setDefault('watchId', null);
Session.setDefault('status', null);

Template.emulator.onRendered(function() {
  var _this = this;

  // if rom found then
  if (_.has(this.data, 'rom')) {

    // Run Jnes fn
    Nes = Jnes(_this);

    var rom = this.data.rom(),
        file = rom.file();

    // Get file
    return getFile(file, function(data) {

      // load
      Nes.loadRom(data);

      // start
      Nes.start();
    });
  }
});
