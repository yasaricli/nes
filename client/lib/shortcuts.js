var root = this;

root.isAuthenticated = function(callback, $this) {
    return callback && callback.call($this ? $this : {});
}


/* ROM.JS END */

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

            this.screen = _this.find('#Emulator');
            this.canvasContext = this.screen.getContext('2d');
            this.canvasImageData = this.canvasContext.getImageData(0, 0, 256, 240);

            for (var i = 3; i < this.canvasImageData.data.length-3; i += 4) {
                this.canvasImageData.data[i] = 0xFF;
            }

            // KEYBOARD
            $(document).
                bind('keydown', function(evt) {
                      nes.keyboard.keyDown(evt);
                }).
                bind('keyup', function(evt) {
                    nes.keyboard.keyUp(evt);
                }).
                bind('keypress', function(evt) {
                    nes.keyboard.keyPress(evt);
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

            this.writeAudio = function() {};
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
                this.canvasContext.putImageData(this.canvasImageData, 0, 0);
            };
        }
    });
};
