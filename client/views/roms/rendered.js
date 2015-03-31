Template.rom.onRendered(function() { });

Template.rom.onDestroyed(function() {
  Nes.stop();
});
