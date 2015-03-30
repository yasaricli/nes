// Default sessions
Session.setDefault('status', '');

Template.rom.onRendered(function() {
    var _this = this,
        rom = this.data.rom(),
        file = rom.file();

    // Run Jnes fn
    Nes = Jnes(_this);

    // GET AJAX GAME URL
    $.ajax({
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
});

Template.rom.onDestroyed(function() {
  Nes.stop();
});
