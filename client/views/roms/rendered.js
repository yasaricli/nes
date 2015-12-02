Template.watch.onRendered(function() {
  const self = this;
  const context = this.find('#Emulator').getContext('2d');

  // watch connect
  WatchStream.on('watch', (data) => {

    // equal data id to game id.
    if (_.isEqual(self.data.watchId(), data._id)) {

      // new game draw image
      const img = new Image();
      img.src = data.toDataURL;

      // draw image
      context.drawImage(img, 0, 0);
    }
  });
});
