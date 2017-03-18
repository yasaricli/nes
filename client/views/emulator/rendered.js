import cfxnes from '/imports/cfxnes/lib/src/cfxnes';

Template.emulator.onRendered(function() {
  const file = this.data.rom().file();

  this.nes = cfxnes({
    video: {
      scale: 1
    }
  });

  this.nes.rom.load(file.url()).then((data) => {

    // start
    this.nes.start();
  })
});

Template.emulator.onDestroyed(function() {
  this.nes.stop();
});
