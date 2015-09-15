Template.watch.onRendered(function() {
  var self = this,
      context = this.find('#Emulator').getContext('2d');

  // watch connect
  WatchStream.on('watch', function(data) {

    // equal data id to game id.
    if (_.isEqual(self.data.watchId(), data._id)) {

      // new game draw image
      var img = new Image();
      img.src = data.toDataURL;

      // draw image
      context.drawImage(img, 0, 0);
    }
  });
});
