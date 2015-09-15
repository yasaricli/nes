var root = this, SCREENS;

SCREENS = {
  DEFAULT: {
    width: '256px',
    height: '240px'
  },
  ZOOM: {
    width: '512px',
    height: '480px'
  }
};

JSNES.DummyUI = function(nes) {
    this.nes = nes;
    this.enable = function() {};
    this.updateStatus = function() {};
    this.writeAudio = function() {};
    this.writeFrame = function() {};
};

root.Jnes = function(_this) {
    return new JSNES({
        ui: function(nes) {
            var doc = $(document);
            this.screen = _this.find('#Emulator');
            this.canvasContext = this.screen.getContext('2d');
            this.canvasImageData = this.canvasContext.getImageData(0, 0, 256, 240);

            // watch Stream id
            this.watchId = Random.id(50);

            // options
            nes.opts.emulateSound = true;

            for (var i = 3; i < this.canvasImageData.data.length-3; i += 4) {
              this.canvasImageData.data[i] = 0xFF;
            }

            // DEFAULT SCREEN
            this.setScreen = function(prop) {
              return $(this.screen).animate(SCREENS[prop]);
            };

            // KEYBOARD
            doc.bind('keydown', function(evt) {
              if (evt.target.tagName != 'INPUT') {
                nes.keyboard.keyDown(evt);
              }
            });

            doc.bind('keyup', function(evt) {
              if (evt.target.tagName != 'INPUT') {
                nes.keyboard.keyUp(evt);
              }
            });

            doc.bind('keypress', function(evt) {
              if (evt.target.tagName != 'INPUT') {
                nes.keyboard.keyPress(evt);
              }
            });

            /*
             * yasaricli:dynamicaudio package write audio method write..
             * */
            this.dynamicaudio = new DynamicAudio({
              swf: '/dynamicaudio.swf'
            });

            this.enable = function() {};

            this.updateStatus = function(text) {
              Session.set('status', text);
            };

            this.screenshot = function() {
              var data = this.screen.toDataURL("image/png"),
                  img = new Image();
              img.src = data;
              return img;
            };

            this.writeAudio = function(samples) {
              this.dynamicaudio.writeInt(samples);
            };

            this.writeFrame = function(buffer, prevBuffer) {
                var imageData = this.canvasImageData.data,
                    pixel, i, j;

                for (i=0; i<256*240; i++) {
                    pixel = buffer[i];
                    if (pixel != prevBuffer[i]) {
                        j = i*4;
                        imageData[j] = pixel & 0xFF;
                        imageData[j+1] = (pixel >> 8) & 0xFF;
                        imageData[j+2] = (pixel >> 16) & 0xFF;
                        prevBuffer[i] = pixel;
                    }
                }

                // send stream
                WatchStream.emit('watch', {
                  _id: this.watchId,
                  toDataURL: this.screen.toDataURL()
                });

                this.canvasContext.putImageData(this.canvasImageData, 0, 0);
            };
        }
    });
};
