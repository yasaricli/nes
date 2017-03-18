Template.upload.events({
  'change #File'(event, template) {

    // each all files
    FS.Utility.eachFile(event, (file) => {

      // insert file
      Files.insert(file, (err, fileObj) => {

        // is uploaded file then
        fileObj.on('uploaded', () => {

          // go to emulator.
          Router.go('Emulator', {
            _id: fileObj._id
          });
        });
      });
    });
  },

  'click #Play'(event, template) {
    template.find('#File').click();
  }
});

Template.emulator.events({
  'click .screen'(event, instance) {
    instance.nes.fullscreen.enter();
  },

  'click .refresh'(event, instance) {
    instance.nes.reset();
  }
});
