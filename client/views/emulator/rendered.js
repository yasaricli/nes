// Default sessions
Session.setDefault('status', '');

Template.emulator.onRendered(function() {
  var _this = this;

  // if rom found then
  if (_.has(this.data, 'rom')) {

    // Run Jnes fn
    Nes = Jnes(_this);

    var rom = this.data.rom(),
        file = rom.file();

    // GET AJAX GAME URL
    return $.ajax({
        url: file.url(),
        xhr: function() {
            var xhr = $.ajaxSettings.xhr();
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
            return xhr;
        },
        complete: function(xhr, status) {

            // LOAD AND START GAME
            Nes.loadRom(xhr.responseText);
            Nes.start();
        }
    });
  }
});
