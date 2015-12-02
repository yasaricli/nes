(function(){// Input 0
var $jscomp = {scope:{}, global:this}, Symbol=this.Symbol;
$jscomp.initSymbol = function() {
  $jscomp.global.Symbol || (Symbol = $jscomp.Symbol);
  $jscomp.initSymbol = function() {
  };
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(a) {
  return "jscomp_symbol_" + a + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  Symbol.iterator || (Symbol.iterator = Symbol("iterator"));
  $jscomp.initSymbolIterator = function() {
  };
};
$jscomp.makeIterator = function(a) {
  $jscomp.initSymbolIterator();
  if (a[Symbol.iterator]) {
    return a[Symbol.iterator]();
  }
  if (!(a instanceof Array || "string" == typeof a || a instanceof String)) {
    throw new TypeError(a + " is not iterable");
  }
  var b = 0;
  return {next:function() {
    return b == a.length ? {done:!0} : {done:!1, value:a[b++]};
  }};
};
$jscomp.arrayFromIterator = function(a) {
  for (var b, c = [];!(b = a.next()).done;) {
    c.push(b.value);
  }
  return c;
};
$jscomp.arrayFromIterable = function(a) {
  return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
};
$jscomp.arrayFromArguments = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    b.push(a[c]);
  }
  return b;
};
$jscomp.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  for (var d in b) {
    if ($jscomp.global.Object.defineProperties) {
      var e = $jscomp.global.Object.getOwnPropertyDescriptor(b, d);
      void 0 !== e && $jscomp.global.Object.defineProperty(a, d, e);
    } else {
      a[d] = b[d];
    }
  }
};
var module$core$src$utils$objects = {};
function copyObject$$module$core$src$utils$objects(a) {
  return JSON.parse(JSON.stringify(a));
}
function getProperty$$module$core$src$utils$objects(a, b) {
  for (var c = [], d = 1;d < arguments.length;++d) {
    c[d - 1] = arguments[d];
  }
  for (d = 0;null != a && d < c.length;d++) {
    a = a[c[d]];
  }
  return a;
}
function setProperty$$module$core$src$utils$objects(a, b) {
  for (var c = [], d = 1;d < arguments.length;++d) {
    c[d - 1] = arguments[d];
  }
  if (2 > c.length) {
    throw Error("setProperty: function requires at least 3 arguments");
  }
  for (var d = c.length - 2, e = a, f = 0;f < d;f++) {
    var g = c[f];
    null == e[g] && (e[g] = {});
    e = e[g];
  }
  e[c[d]] = c[d + 1];
  return a;
}
function forEachProperty$$module$core$src$utils$objects(a, b, c) {
  for (var d in a) {
    a.hasOwnProperty(d) && b.call(c, d, a[d]);
  }
}
function copyProperties$$module$core$src$utils$objects(a, b) {
  b = void 0 === b ? {} : b;
  forEachProperty$$module$core$src$utils$objects(a, function(a, d) {
    b[a] = d;
  });
  return b;
}
function mergeProperties$$module$core$src$utils$objects(a, b) {
  return copyProperties$$module$core$src$utils$objects(b, copyProperties$$module$core$src$utils$objects(a));
}
function setProperties$$module$core$src$utils$objects(a, b, c) {
  b = $jscomp.makeIterator(b);
  for (var d = b.next();!d.done;d = b.next()) {
    a[d.value] = c;
  }
  return a;
}
function nullProperties$$module$core$src$utils$objects(a, b) {
  return setProperties$$module$core$src$utils$objects(a, b, null);
}
function makeEnumeration$$module$core$src$utils$objects(a) {
  var b = {}, c;
  forEachProperty$$module$core$src$utils$objects(a, function(d, e) {
    "function" !== typeof e && (c = c || e, b[e.id || d] = e, a[d] = e.id || d);
  });
  a.getParams = function(a) {
    return b[a] || c;
  };
  a.toString = function(b) {
    var c = a.getParams(b);
    return c && (c.name || c.id) || b;
  };
  return a;
}
module$core$src$utils$objects.copyObject = copyObject$$module$core$src$utils$objects;
module$core$src$utils$objects.getProperty = getProperty$$module$core$src$utils$objects;
module$core$src$utils$objects.setProperty = setProperty$$module$core$src$utils$objects;
module$core$src$utils$objects.forEachProperty = forEachProperty$$module$core$src$utils$objects;
module$core$src$utils$objects.copyProperties = copyProperties$$module$core$src$utils$objects;
module$core$src$utils$objects.mergeProperties = mergeProperties$$module$core$src$utils$objects;
module$core$src$utils$objects.setProperties = setProperties$$module$core$src$utils$objects;
module$core$src$utils$objects.nullProperties = nullProperties$$module$core$src$utils$objects;
module$core$src$utils$objects.makeEnumeration = makeEnumeration$$module$core$src$utils$objects;
// Input 1
var module$core$src$common$Region = {}, Region$$module$core$src$common$Region = {NTSC:{id:"ntsc", name:"NTSC", framesPerSecond:60, cpuFrequency:1789773, ppuClipTopBottom:!0, frameCounterMax4:[7457, 7456, 7458, 7457, 1, 1], frameCounterMax5:[7457, 7456, 7458, 7458, 7452, 1], noiseChannelTimerPeriods:[4, 8, 16, 32, 64, 96, 128, 160, 202, 254, 380, 508, 762, 1016, 2034, 4068], dmcChannelTimerPeriods:[428, 380, 340, 320, 286, 254, 226, 214, 190, 160, 142, 128, 106, 84, 72, 54]}, PAL:{id:"pal", name:"PAL",
framesPerSecond:50, cpuFrequency:1491477.5, ppuClipTopBottom:!1, frameCounterMax4:[8313, 8314, 8312, 8313, 1, 1], frameCounterMax5:[8313, 8314, 8312, 8314, 8312, 1], noiseChannelTimerPeriods:[4, 8, 14, 30, 60, 88, 118, 148, 188, 236, 354, 472, 708, 944, 1890, 3778], dmcChannelTimerPeriods:[398, 354, 316, 298, 276, 236, 210, 198, 176, 148, 132, 118, 98, 78, 66, 50]}};
module$core$src$utils$objects.makeEnumeration(Region$$module$core$src$common$Region);
var $jscompDefaultExport$$module$core$src$common$Region = Region$$module$core$src$common$Region;
module$core$src$common$Region.default = $jscompDefaultExport$$module$core$src$common$Region;
// Input 2
var module$core$src$common$constants = {}, VIDEO_WIDTH$$module$core$src$common$constants = 256, VIDEO_HEIGHT$$module$core$src$common$constants = 240, RESET$$module$core$src$common$constants = 1, NMI$$module$core$src$common$constants = 2, IRQ_APU$$module$core$src$common$constants = 4, IRQ_DCM$$module$core$src$common$constants = 8, IRQ_EXT$$module$core$src$common$constants = 16, IRQ$$module$core$src$common$constants = IRQ_APU$$module$core$src$common$constants | IRQ_DCM$$module$core$src$common$constants |
IRQ_EXT$$module$core$src$common$constants, LENGTH_COUNTER_VALUES$$module$core$src$common$constants = [10, 254, 20, 2, 40, 4, 80, 6, 160, 8, 60, 10, 14, 12, 26, 14, 12, 16, 24, 18, 48, 20, 96, 22, 192, 24, 72, 26, 16, 28, 32, 30];
module$core$src$common$constants.VIDEO_WIDTH = VIDEO_WIDTH$$module$core$src$common$constants;
module$core$src$common$constants.VIDEO_HEIGHT = VIDEO_HEIGHT$$module$core$src$common$constants;
module$core$src$common$constants.RESET = RESET$$module$core$src$common$constants;
module$core$src$common$constants.NMI = NMI$$module$core$src$common$constants;
module$core$src$common$constants.IRQ_APU = IRQ_APU$$module$core$src$common$constants;
module$core$src$common$constants.IRQ_DCM = IRQ_DCM$$module$core$src$common$constants;
module$core$src$common$constants.IRQ_EXT = IRQ_EXT$$module$core$src$common$constants;
module$core$src$common$constants.IRQ = IRQ$$module$core$src$common$constants;
module$core$src$common$constants.LENGTH_COUNTER_VALUES = LENGTH_COUNTER_VALUES$$module$core$src$common$constants;
// Input 3
var module$core$src$utils$arrays = {};
function zeroArray$$module$core$src$utils$arrays(a, b, c) {
  return fillArray$$module$core$src$utils$arrays(a, 0, b, c);
}
function fillArray$$module$core$src$utils$arrays(a, b, c, d) {
  d = void 0 === d ? a.length : d;
  c = Math.max(0, void 0 === c ? 0 : c);
  for (d = Math.min(d, a.length);c < d;c++) {
    a[c] = b;
  }
  return a;
}
function copyArray$$module$core$src$utils$arrays(a, b) {
  null == b && (b = Array(a.length));
  for (var c = Math.min(a.length, b.length), d = 0;d < c;d++) {
    b[d] = a[d];
  }
  return b;
}
function arrayToProperties$$module$core$src$utils$arrays(a, b, c) {
  var d = {};
  a = $jscomp.makeIterator(a);
  for (var e = a.next();!e.done;e = a.next()) {
    e = e.value, d[e] = b.call(c, e);
  }
  return d;
}
module$core$src$utils$arrays.zeroArray = zeroArray$$module$core$src$utils$arrays;
module$core$src$utils$arrays.fillArray = fillArray$$module$core$src$utils$arrays;
module$core$src$utils$arrays.copyArray = copyArray$$module$core$src$utils$arrays;
module$core$src$utils$arrays.arrayToProperties = arrayToProperties$$module$core$src$utils$arrays;
// Input 4
var module$core$src$utils$system = {};
detectEndianness$$module$core$src$utils$system();
var ENDIANNESS$$module$core$src$utils$system = detectEndianness$$module$core$src$utils$system();
function detectEndianness$$module$core$src$utils$system() {
  var a = new ArrayBuffer(4), b = new Uint32Array(a), a = new Uint8Array(a);
  b[0] = 255;
  return 255 === a[0] ? "LE" : "BE";
}
function newByteArray$$module$core$src$utils$system(a) {
  return new Uint8Array(a);
}
function newUintArray$$module$core$src$utils$system(a) {
  a = Array(a);
  module$core$src$utils$arrays.zeroArray(a);
  return a;
}
module$core$src$utils$system.ENDIANNESS = ENDIANNESS$$module$core$src$utils$system;
module$core$src$utils$system.detectEndianness = detectEndianness$$module$core$src$utils$system;
module$core$src$utils$system.newByteArray = newByteArray$$module$core$src$utils$system;
module$core$src$utils$system.newUintArray = newUintArray$$module$core$src$utils$system;
// Input 5
var module$core$src$utils$colors = {}, _ENDIANNESS$$module$core$src$utils$colors = module$core$src$utils$system.ENDIANNESS, BLACK_COLOR$$module$core$src$utils$colors = packColor$$module$core$src$utils$colors(0, 0, 0);
function packColor$$module$core$src$utils$colors(a, b, c, d, e) {
  d = void 0 === d ? 255 : d;
  e = void 0 === e ? module$core$src$utils$system.ENDIANNESS : e;
  return "LE" === e ? (d << 24 | c << 16 | b << 8 | a) >>> 0 : (a << 24 | b << 16 | c << 8 | d) >>> 0;
}
function unpackColor$$module$core$src$utils$colors(a, b) {
  b = void 0 === b ? module$core$src$utils$system.ENDIANNESS : b;
  return "LE" === b ? [a & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255] : [a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255];
}
module$core$src$utils$colors.BLACK_COLOR = BLACK_COLOR$$module$core$src$utils$colors;
module$core$src$utils$colors.packColor = packColor$$module$core$src$utils$colors;
module$core$src$utils$colors.unpackColor = unpackColor$$module$core$src$utils$colors;
// Input 6
var module$core$src$NES = {}, NES$$module$core$src$NES = function() {
  this.dependencies = "cpu cpuMemory ppu ppuMemory apu dma mapperFactory".split(" ");
};
NES$$module$core$src$NES.prototype.inject = function(a, b, c, d, e, f, g) {
  this.cpu = a;
  this.ppu = c;
  this.apu = e;
  this.dma = f;
  this.cpuMemory = b;
  this.ppuMemory = d;
  this.mapperFactory = g;
};
NES$$module$core$src$NES.prototype.pressPower = function() {
  this.updateRegionParams();
  this.isCartridgeInserted() && (this.cpuMemory.powerUp(), this.ppuMemory.powerUp(), this.mapper.powerUp(), this.ppu.powerUp(), this.apu.powerUp(), this.dma.powerUp(), this.cpu.powerUp());
};
NES$$module$core$src$NES.prototype.pressReset = function() {
  this.cpu.activateInterrupt(module$core$src$common$constants.RESET);
};
NES$$module$core$src$NES.prototype.connectInputDevice = function(a, b) {
  this.cpuMemory.setInputDevice(a, b);
};
NES$$module$core$src$NES.prototype.getConnectedInputDevice = function(a) {
  return this.cpuMemory.getInputDevice(a);
};
NES$$module$core$src$NES.prototype.insertCartridge = function(a) {
  this.cartridge = a;
  this.mapper = this.mapperFactory.createMapper(a);
  this.cpu.connectMapper(this.mapper);
  this.ppu.connectMapper(this.mapper);
  this.cpuMemory.connectMapper(this.mapper);
  this.ppuMemory.connectMapper(this.mapper);
  this.pressPower();
};
NES$$module$core$src$NES.prototype.isCartridgeInserted = function() {
  return null != this.cartridge;
};
NES$$module$core$src$NES.prototype.removeCartridge = function() {
  this.cartridge = null;
};
NES$$module$core$src$NES.prototype.loadCartridgeData = function(a) {
  return this.mapper ? Promise.all([this.mapper.loadPRGRAM(a), this.mapper.loadCHRRAM(a)]) : Promise.resolve();
};
NES$$module$core$src$NES.prototype.saveCartridgeData = function(a) {
  return this.mapper ? Promise.all([this.mapper.savePRGRAM(a), this.mapper.saveCHRRAM(a)]) : Promise.resolve();
};
NES$$module$core$src$NES.prototype.renderFrame = function(a) {
  this.isCartridgeInserted() ? this.renderNormalFrame(a) : this.renderEmptyFrame(a);
};
NES$$module$core$src$NES.prototype.renderNormalFrame = function(a) {
  for (this.ppu.setFrameBuffer(a);!this.ppu.isFrameAvailable();) {
    this.cpu.step();
  }
};
NES$$module$core$src$NES.prototype.renderEmptyFrame = function(a) {
  for (var b = 0;b < a.length;b++) {
    var c = ~~(255 * Math.random());
    a[b] = module$core$src$utils$colors.packColor(c, c, c);
  }
};
NES$$module$core$src$NES.prototype.renderDebugFrame = function(a) {
  this.isCartridgeInserted() ? this.renderNormalDebugFrame(a) : this.renderEmptyDebugFrame(a);
};
NES$$module$core$src$NES.prototype.renderNormalDebugFrame = function(a) {
  this.ppu.setFrameBuffer(a);
  this.ppu.renderDebugFrame();
};
NES$$module$core$src$NES.prototype.renderEmptyDebugFrame = function(a) {
  for (var b = 0;b < a.length;b++) {
    a[b] = module$core$src$utils$colors.BLACK_COLOR;
  }
};
NES$$module$core$src$NES.prototype.initAudioRecording = function(a) {
  this.apu.initRecording(a);
};
NES$$module$core$src$NES.prototype.startAudioRecording = function(a) {
  this.apu.startRecording(a);
};
NES$$module$core$src$NES.prototype.stopAudioRecording = function() {
  this.apu.stopRecording();
};
NES$$module$core$src$NES.prototype.readAudioBuffer = function() {
  return this.apu.readOutputBuffer();
};
NES$$module$core$src$NES.prototype.setChannelEnabled = function(a, b) {
  this.apu.setChannelEnabled(a, b);
};
NES$$module$core$src$NES.prototype.isChannelEnabled = function(a) {
  return this.apu.isChannelEnabled(a);
};
NES$$module$core$src$NES.prototype.step = function() {
  this.cpu.step();
};
NES$$module$core$src$NES.prototype.setPalette = function(a) {
  this.ppu.setPalette(a);
};
NES$$module$core$src$NES.prototype.setRegion = function(a) {
  this.region = a;
  this.updateRegionParams();
};
NES$$module$core$src$NES.prototype.getRegion = function() {
  return this.region || this.cartridge && this.cartridge.region;
};
NES$$module$core$src$NES.prototype.updateRegionParams = function() {
  var a = module$core$src$common$Region.default.getParams(this.getRegion());
  this.ppu.setRegionParams(a);
  this.apu.setRegionParams(a);
};
module$core$src$NES.default = NES$$module$core$src$NES;
// Input 7
var module$core$src$common$Mirroring = {}, Mirroring$$module$core$src$common$Mirroring = {SINGLE_SCREEN_0:{id:"single-screen-0", name:"Single screen (0)", areas:[0, 0, 0, 0]}, SINGLE_SCREEN_1:{id:"single-screen-1", name:"Single screen (1)", areas:[1, 1, 1, 1]}, SINGLE_SCREEN_2:{id:"single-screen-2", name:"Single screen (2)", areas:[2, 2, 2, 2]}, SINGLE_SCREEN_3:{id:"single-screen-3", name:"Single screen (3)", areas:[3, 3, 3, 3]}, HORIZONTAL:{id:"horizontal", name:"Horizontal", areas:[0, 0, 1, 1]},
VERTICAL:{id:"vertical", name:"Vertical", areas:[0, 1, 0, 1]}, FOUR_SCREEN:{id:"four-screen", name:"Four screen", areas:[0, 1, 2, 3]}, getSingleScreen:function(a) {
  switch(a) {
    case 0:
      return Mirroring$$module$core$src$common$Mirroring.SINGLE_SCREEN_0;
    case 1:
      return Mirroring$$module$core$src$common$Mirroring.SINGLE_SCREEN_1;
    case 2:
      return Mirroring$$module$core$src$common$Mirroring.SINGLE_SCREEN_2;
    case 3:
      return Mirroring$$module$core$src$common$Mirroring.SINGLE_SCREEN_3;
  }
}};
module$core$src$utils$objects.makeEnumeration(Mirroring$$module$core$src$common$Mirroring);
var $jscompDefaultExport$$module$core$src$common$Mirroring = Mirroring$$module$core$src$common$Mirroring;
module$core$src$common$Mirroring.default = $jscompDefaultExport$$module$core$src$common$Mirroring;
// Input 8
var module$core$src$readers$AbstractReader = {}, ZIP_SIGNATURE$$module$core$src$readers$AbstractReader = [80, 75, 3, 4], AbstractReader$$module$core$src$readers$AbstractReader = function() {
  this.reset();
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.reset = function() {
  this.offset = 0;
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.readByte = function() {
  return this.read(1)[0];
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.read = function(a) {
  var b = this.peek(a);
  this.skip(a);
  return b;
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.peek = function(a) {
  return this.peekOffset(this.offset, a);
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.skip = function(a) {
  this.offset += a;
  if (this.offset > this.getLength()) {
    throw Error("Unexpected end of input.");
  }
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.contains = function(a) {
  var b = this.peek(a.length);
  if (b.length !== a.length) {
    return !1;
  }
  for (var c = 0;c < a.length;c++) {
    if (b[c] !== a[c]) {
      return !1;
    }
  }
  return !0;
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.check = function(a) {
  if (!this.contains(a)) {
    throw Error("Invalid input signature.");
  }
  this.skip(a.length);
};
AbstractReader$$module$core$src$readers$AbstractReader.prototype.tryUnzip = function(a) {
  if (this.contains(ZIP_SIGNATURE$$module$core$src$readers$AbstractReader)) {
    if (null == a) {
      throw Error("Unable to unzip data: JSZip library is not available.");
    }
    a = a(this.getData()).file(/^.*\.nes$/i);
    if (0 < a.length) {
      this.onUnzip(a[0]);
    }
  }
};
module$core$src$readers$AbstractReader.default = AbstractReader$$module$core$src$readers$AbstractReader;
// Input 9
var module$core$src$readers$LocalFileReader = {}, LocalFileReader$$module$core$src$readers$LocalFileReader = function(a) {
  module$core$src$readers$AbstractReader.default.call(this);
  this.buffer = require("fs").readFileSync(a);
};
$jscomp.inherits(LocalFileReader$$module$core$src$readers$LocalFileReader, module$core$src$readers$AbstractReader.default);
LocalFileReader$$module$core$src$readers$LocalFileReader.prototype.getData = function() {
  return this.buffer;
};
LocalFileReader$$module$core$src$readers$LocalFileReader.prototype.getLength = function() {
  return this.buffer.length;
};
LocalFileReader$$module$core$src$readers$LocalFileReader.prototype.peekOffset = function(a, b) {
  return this.buffer.slice(a, a + b);
};
LocalFileReader$$module$core$src$readers$LocalFileReader.prototype.onUnzip = function(a) {
  this.buffer = a.asNodeBuffer();
};
module$core$src$readers$LocalFileReader.default = LocalFileReader$$module$core$src$readers$LocalFileReader;
// Input 10
var module$core$src$loaders$AbstractLoader = {}, AbstractLoader$$module$core$src$loaders$AbstractLoader = function(a) {
  this.name = a;
};
AbstractLoader$$module$core$src$loaders$AbstractLoader.prototype.load = function(a) {
  var b = {};
  this.read(a, b);
  return b;
};
module$core$src$loaders$AbstractLoader.default = AbstractLoader$$module$core$src$loaders$AbstractLoader;
// Input 11
var module$core$src$loaders$INESLoader = {}, INES_SIGNATURE$$module$core$src$loaders$INESLoader = [78, 69, 83, 26], mappers$$module$core$src$loaders$INESLoader = {0:"NROM", 1:"MMC1", 2:"UNROM", 3:"CNROM", 4:"MMC3", 7:"AOROM", 11:"ColorDreams", 34:"BNROM"}, INESLoader$$module$core$src$loaders$INESLoader = function(a) {
  module$core$src$loaders$AbstractLoader.default.call(this, a || "iNES");
};
$jscomp.inherits(INESLoader$$module$core$src$loaders$INESLoader, module$core$src$loaders$AbstractLoader.default);
INESLoader$$module$core$src$loaders$INESLoader.prototype.supports = function(a) {
  return a.contains(INES_SIGNATURE$$module$core$src$loaders$INESLoader);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.read = function(a, b) {
  this.readHeader(a, b);
  this.readTrainer(a, b);
  this.readPRGROM(a, b);
  this.readCHRROM(a, b);
  this.detectPRGRAM(b);
  this.setMapper(b);
  this.setSubmapper(b);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readHeader = function(a, b) {
  a.check(INES_SIGNATURE$$module$core$src$loaders$INESLoader);
  this.readPRGROMSize(a, b);
  this.readCHRROMSize(a, b);
  this.readControlBytes(a, b);
  this.readByte8(a, b);
  this.readByte9(a, b);
  this.readByte10(a, b);
  this.readByte11(a, b);
  this.readByte12(a, b);
  this.readByte13(a, b);
  a.skip(2);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readPRGROMSize = function(a, b) {
  b.prgROMSize = 16384 * a.readByte();
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readCHRROMSize = function(a, b) {
  b.chrROMSize = 8192 * a.readByte();
  b.hasCHRROM = 0 !== b.chrROMSize;
  b.hasCHRRAM = 0 === b.chrROMSize;
  b.chrRAMSize = b.hasCHRRAM ? 8192 : void 0;
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readControlBytes = function(a, b) {
  var c = a.readByte(), d = a.readByte();
  b.mirroring = c & 8 ? module$core$src$common$Mirroring.default.FOUR_SCREEN : c & 1 ? module$core$src$common$Mirroring.default.VERTICAL : module$core$src$common$Mirroring.default.HORIZONTAL;
  b.hasPRGRAMBattery = 0 !== (c & 2);
  b.hasTrainer = 0 !== (c & 4);
  b.isVsUnisistem = 0 !== (d & 1);
  b.isPlayChoice = 0 !== (d & 2);
  b.mapperId = d & 240 | c >>> 4;
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readByte8 = function(a, b) {
  b.prgRAMUnits = a.readByte();
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readByte9 = function(a, b) {
  var c = a.readByte();
  b.region = c & 1 ? module$core$src$common$Region.default.PAL : module$core$src$common$Region.default.NTSC;
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readByte10 = function(a, b) {
  a.skip(1);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readByte11 = function(a, b) {
  a.skip(1);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readByte12 = function(a, b) {
  a.skip(1);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readByte13 = function(a, b) {
  a.skip(1);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readTrainer = function(a, b) {
  b.hasTrainer && (b.trainer = a.read(512));
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readPRGROM = function(a, b) {
  b.prgROM = a.read(b.prgROMSize);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.readCHRROM = function(a, b) {
  b.chrROM = a.read(b.chrROMSize);
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.detectPRGRAM = function(a) {
  a.hasPRGRAM = a.hasPRGRAMBattery || 0 < a.prgRAMUnits;
  a.prgRAMSize = a.hasPRGRAM ? 8192 * (a.prgRAMUnits || 1) : void 0;
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.setMapper = function(a) {
  a.mapper = mappers$$module$core$src$loaders$INESLoader[a.mapperId] || a.mapperId.toString();
  "BNROM" === a.mapper && a.hasCHRROM && (a.mapper = "NINA-001");
};
INESLoader$$module$core$src$loaders$INESLoader.prototype.setSubmapper = function(a) {
};
module$core$src$loaders$INESLoader.default = INESLoader$$module$core$src$loaders$INESLoader;
// Input 12
var module$core$src$readers$ArrayBufferReader = {}, ArrayBufferReader$$module$core$src$readers$ArrayBufferReader = function(a) {
  module$core$src$readers$AbstractReader.default.call(this);
  this.array = new Uint8Array(a);
};
$jscomp.inherits(ArrayBufferReader$$module$core$src$readers$ArrayBufferReader, module$core$src$readers$AbstractReader.default);
ArrayBufferReader$$module$core$src$readers$ArrayBufferReader.prototype.getData = function() {
  return this.array;
};
ArrayBufferReader$$module$core$src$readers$ArrayBufferReader.prototype.getLength = function() {
  return this.array.length;
};
ArrayBufferReader$$module$core$src$readers$ArrayBufferReader.prototype.peekOffset = function(a, b) {
  return this.array.subarray(a, a + b);
};
ArrayBufferReader$$module$core$src$readers$ArrayBufferReader.prototype.onUnzip = function(a) {
  this.array = a.asUint8Array();
};
module$core$src$readers$ArrayBufferReader.default = ArrayBufferReader$$module$core$src$readers$ArrayBufferReader;
// Input 13
var module$core$src$loaders$NES2Loader = {}, submappers$$module$core$src$loaders$NES2Loader = {MMC1:{1:"SUROM", 2:"SOROM", 3:"SXROM"}}, NES2Loader$$module$core$src$loaders$NES2Loader = function() {
  module$core$src$loaders$INESLoader.default.call(this, "NES 2.0");
};
$jscomp.inherits(NES2Loader$$module$core$src$loaders$NES2Loader, module$core$src$loaders$INESLoader.default);
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.supports = function(a) {
  return module$core$src$loaders$INESLoader.default.prototype.supports.call(this, a) ? (a = a.peek(8), 8 === a.length && 8 === (a[7] & 12)) : !1;
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.readByte8 = function(a, b) {
  var c = a.readByte();
  b.mapperId |= (c & 15) << 8;
  b.submapperId = (c & 240) >>> 4;
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.readByte9 = function(a, b) {
  var c = a.readByte();
  b.prgROMSize += 16384 * ((c & 15) << 8);
  b.chrROMSize += 8192 * ((c & 240) << 4);
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.readByte10 = function(a, b) {
  var c = a.readByte();
  b.prgRAMSizeBattery = this.computeRAMSize((c & 240) >>> 4);
  b.prgRAMSize = b.prgRAMSizeBattery + this.computeRAMSize(c & 15);
  b.hasPRGRAM = 0 !== b.prgRAMSize;
  b.hasPRGRAMBattery = 0 !== b.prgRAMSizeBattery;
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.readByte11 = function(a, b) {
  var c = a.readByte();
  b.chrRAMSizeBattery = this.computeRAMSize((c & 240) >>> 4);
  b.chrRAMSize = b.chrRAMSizeBattery + this.computeRAMSize(c & 15);
  b.hasCHRRAM = 0 !== b.chrRAMSize;
  b.hasCHRRAMBattery = 0 !== b.chrRAMSizeBattery;
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.readByte12 = function(a, b) {
  var c = a.readByte();
  b.region = c & 1 ? module$core$src$common$Region.default.PAL : module$core$src$common$Region.default.NTSC;
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.computeRAMSize = function(a) {
  return 0 < a ? 128 * Math.pow(2, a - 1) : 0;
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.detectPRGRAM = function() {
};
NES2Loader$$module$core$src$loaders$NES2Loader.prototype.setSubmapper = function(a) {
  a.submapper = submappers$$module$core$src$loaders$NES2Loader[a.mapper] && submappers$$module$core$src$loaders$NES2Loader[a.mapper][a.submapperId] || a.submapperId.toString();
};
module$core$src$loaders$NES2Loader.default = NES2Loader$$module$core$src$loaders$NES2Loader;
// Input 14
var module$core$src$utils$format = {};
function numberAsHex$$module$core$src$utils$format(a) {
  return a.toString(16).toUpperCase();
}
function byteAsHex$$module$core$src$utils$format(a) {
  a = numberAsHex$$module$core$src$utils$format(a);
  return 1 === a.length ? "0" + a : a;
}
function wordAsHex$$module$core$src$utils$format(a) {
  var b = byteAsHex$$module$core$src$utils$format(a & 255);
  return byteAsHex$$module$core$src$utils$format(a >>> 8) + b;
}
function fillLeft$$module$core$src$utils$format(a, b, c) {
  a = Array(b + 1).join(void 0 === c ? " " : c) + a;
  return a.slice(a.length - b);
}
function fillRight$$module$core$src$utils$format(a, b, c) {
  return (a + Array(b + 1).join(void 0 === c ? " " : c)).slice(0, b);
}
function capitalize$$module$core$src$utils$format(a) {
  return a.split(" ").map(function(a) {
    return a.length ? a[0].toUpperCase() + a.slice(1) : a;
  }).join(" ");
}
function formatOptional$$module$core$src$utils$format(a) {
  return null != a ? a : "???";
}
function formatSize$$module$core$src$utils$format(a) {
  return "number" !== typeof a ? void 0 : 1048576 <= Math.abs(a) ? ~~(a / 1048576) + " MB" : 1024 <= Math.abs(a) ? ~~(a / 1024) + " KB" : a + " B";
}
function formatData$$module$core$src$utils$format(a) {
  return "object" !== typeof a || null === a ? void 0 : String.fromCharCode.apply(null, a);
}
function formatError$$module$core$src$utils$format(a) {
  var b = "Name:    " + a.name + "\nMessage: " + a.message;
  "string" === typeof a.stack && (b += "\nStack:   " + a.stack.split("\n").map(function(a) {
    return "         " + a;
  }).join("\n").substr(9));
  return b;
}
module$core$src$utils$format.numberAsHex = numberAsHex$$module$core$src$utils$format;
module$core$src$utils$format.byteAsHex = byteAsHex$$module$core$src$utils$format;
module$core$src$utils$format.wordAsHex = wordAsHex$$module$core$src$utils$format;
module$core$src$utils$format.fillLeft = fillLeft$$module$core$src$utils$format;
module$core$src$utils$format.fillRight = fillRight$$module$core$src$utils$format;
module$core$src$utils$format.capitalize = capitalize$$module$core$src$utils$format;
module$core$src$utils$format.formatOptional = formatOptional$$module$core$src$utils$format;
module$core$src$utils$format.formatSize = formatSize$$module$core$src$utils$format;
module$core$src$utils$format.formatData = formatData$$module$core$src$utils$format;
module$core$src$utils$format.formatError = formatError$$module$core$src$utils$format;
// Input 15
var module$core$src$utils$logger = {}, LogLevel$$module$core$src$utils$logger = {OFF:1, ERROR:2, WARN:3, INFO:4, ALL:4}, Logger$$module$core$src$utils$logger = function(a) {
  this.level = a || LogLevel$$module$core$src$utils$logger.OFF;
  this.writers = [];
};
Logger$$module$core$src$utils$logger.prototype.attach = function(a) {
  0 > this.writers.indexOf(a) && this.writers.push(a);
};
Logger$$module$core$src$utils$logger.prototype.detach = function(a) {
  a = this.writers.indexOf(a);
  0 <= a && this.writers.splice(a, 1);
};
Logger$$module$core$src$utils$logger.prototype.close = function() {
  for (var a = $jscomp.makeIterator(this.writers), b = a.next();!b.done;b = a.next()) {
    b = b.value, b.close && b.close();
  }
  this.writers = [];
};
Logger$$module$core$src$utils$logger.prototype.setLevel = function(a) {
  this.level = a;
};
Logger$$module$core$src$utils$logger.prototype.info = function(a) {
  if (this.level >= LogLevel$$module$core$src$utils$logger.INFO) {
    for (var b = $jscomp.makeIterator(this.writers), c = b.next();!c.done;c = b.next()) {
      c.value.info(a);
    }
  }
};
Logger$$module$core$src$utils$logger.prototype.warn = function(a) {
  if (this.level >= LogLevel$$module$core$src$utils$logger.WARN) {
    for (var b = $jscomp.makeIterator(this.writers), c = b.next();!c.done;c = b.next()) {
      c.value.warn(a);
    }
  }
};
Logger$$module$core$src$utils$logger.prototype.error = function(a, b) {
  if (this.level >= LogLevel$$module$core$src$utils$logger.ERROR) {
    a = a && b && "object" === typeof b ? a + "\n\n" + module$core$src$utils$format.formatError(b) : a && "object" === typeof a ? module$core$src$utils$format.formatError(a) : a || "Unknown error";
    for (var c = $jscomp.makeIterator(this.writers), d = c.next();!d.done;d = c.next()) {
      d.value.error(a);
    }
  }
};
var LogWriter$$module$core$src$utils$logger = {toConsole:function() {
  return console;
}, toFile:function(a) {
  return new FileWriter$$module$core$src$utils$logger(a);
}, toBuffer:function() {
  return new BufferWriter$$module$core$src$utils$logger;
}}, FileWriter$$module$core$src$utils$logger = function(a) {
  this.fs = require("fs");
  this.fd = this.fs.openSync(a, "w");
};
FileWriter$$module$core$src$utils$logger.prototype.info = function(a) {
  this.write(a);
};
FileWriter$$module$core$src$utils$logger.prototype.warn = function(a) {
  this.write(a);
};
FileWriter$$module$core$src$utils$logger.prototype.error = function(a) {
  this.write(a);
};
FileWriter$$module$core$src$utils$logger.prototype.write = function(a) {
  this.fs.writeSync(this.fd, a + "\n");
};
FileWriter$$module$core$src$utils$logger.prototype.close = function() {
  this.fs.close(this.fd);
};
var BufferWriter$$module$core$src$utils$logger = function() {
  this.buffer = [];
};
BufferWriter$$module$core$src$utils$logger.prototype.info = function(a) {
  this.buffer.push(a);
};
BufferWriter$$module$core$src$utils$logger.prototype.warn = function(a) {
  this.buffer.push(a);
};
BufferWriter$$module$core$src$utils$logger.prototype.error = function(a) {
  this.buffer.push(a);
};
BufferWriter$$module$core$src$utils$logger.prototype.write = function(a) {
  this.buffer.push(a);
};
BufferWriter$$module$core$src$utils$logger.prototype.close = function() {
};
var logger$$module$core$src$utils$logger = new Logger$$module$core$src$utils$logger;
logger$$module$core$src$utils$logger.setLevel(LogLevel$$module$core$src$utils$logger.WARN);
logger$$module$core$src$utils$logger.attach(LogWriter$$module$core$src$utils$logger.toConsole());
var $jscompDefaultExport$$module$core$src$utils$logger = logger$$module$core$src$utils$logger;
module$core$src$utils$logger.LogLevel = LogLevel$$module$core$src$utils$logger;
module$core$src$utils$logger.Logger = Logger$$module$core$src$utils$logger;
module$core$src$utils$logger.LogWriter = LogWriter$$module$core$src$utils$logger;
module$core$src$utils$logger.default = $jscompDefaultExport$$module$core$src$utils$logger;
// Input 16
var module$core$src$factories$CartridgeFactory = {}, loaders$$module$core$src$factories$CartridgeFactory = [new module$core$src$loaders$NES2Loader.default, new module$core$src$loaders$INESLoader.default], CartridgeFactory$$module$core$src$factories$CartridgeFactory = function() {
  this.dependencies = ["jszip"];
};
CartridgeFactory$$module$core$src$factories$CartridgeFactory.prototype.inject = function(a) {
  this.JSZip = a;
};
CartridgeFactory$$module$core$src$factories$CartridgeFactory.prototype.fromArrayBuffer = function(a) {
  module$core$src$utils$logger.default.info("Loading cartridge from array buffer");
  return this.fromReader(new module$core$src$readers$ArrayBufferReader.default(a));
};
CartridgeFactory$$module$core$src$factories$CartridgeFactory.prototype.fromLocalFile = function(a) {
  module$core$src$utils$logger.default.info('Loading cartridge from "' + a + '"');
  return this.fromReader(new module$core$src$readers$LocalFileReader.default(a));
};
CartridgeFactory$$module$core$src$factories$CartridgeFactory.prototype.fromReader = function(a) {
  a.tryUnzip(this.JSZip);
  for (var b = $jscomp.makeIterator(loaders$$module$core$src$factories$CartridgeFactory), c = b.next();!c.done;c = b.next()) {
    if (c = c.value, c.supports(a)) {
      return module$core$src$utils$logger.default.info('Using "' + c.name + '" loader'), a = c.load(a), this.printCartridgeInfo(a), a;
    }
  }
  throw Error("Unsupported input data format.");
};
CartridgeFactory$$module$core$src$factories$CartridgeFactory.prototype.printCartridgeInfo = function(a) {
  module$core$src$utils$logger.default.info("==========[Cartridge Info - Start]==========");
  module$core$src$utils$logger.default.info("Mapper                : " + module$core$src$utils$format.formatOptional(a.mapper));
  module$core$src$utils$logger.default.info("Submapper             : " + module$core$src$utils$format.formatOptional(a.submapper));
  module$core$src$utils$logger.default.info("has PRG RAM           : " + module$core$src$utils$format.formatOptional(a.hasPRGRAM));
  module$core$src$utils$logger.default.info("has PRG RAM battery   : " + module$core$src$utils$format.formatOptional(a.hasPRGRAMBattery));
  module$core$src$utils$logger.default.info("has CHR ROM           : " + module$core$src$utils$format.formatOptional(a.hasCHRROM));
  module$core$src$utils$logger.default.info("has CHR RAM           : " + module$core$src$utils$format.formatOptional(a.hasCHRRAM));
  module$core$src$utils$logger.default.info("has CHR RAM battery   : " + module$core$src$utils$format.formatOptional(a.hasCHRRAMBattery));
  module$core$src$utils$logger.default.info("has trainer           : " + module$core$src$utils$format.formatOptional(a.hasTrainer));
  module$core$src$utils$logger.default.info("PRG ROM size          : " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(a.prgROMSize)));
  module$core$src$utils$logger.default.info("PRG RAM size          : " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(a.prgRAMSize)));
  module$core$src$utils$logger.default.info("PRG RAM size (battery): " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(a.prgRAMSizeBattery)));
  module$core$src$utils$logger.default.info("CHR ROM size          : " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(a.chrROMSize)));
  module$core$src$utils$logger.default.info("CHR RAM size          : " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(a.chrRAMSize)));
  module$core$src$utils$logger.default.info("CHR RAM size (battery): " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(a.chrRAMSizeBattery)));
  module$core$src$utils$logger.default.info("Mirroring             : " + module$core$src$utils$format.formatOptional(module$core$src$common$Mirroring.default.toString(a.mirroring)));
  module$core$src$utils$logger.default.info("Region                : " + module$core$src$utils$format.formatOptional(module$core$src$common$Region.default.toString(a.region)));
  module$core$src$utils$logger.default.info("is Vs Unisistem       : " + module$core$src$utils$format.formatOptional(a.isVsUnisistem));
  module$core$src$utils$logger.default.info("is PlayChoice         : " + module$core$src$utils$format.formatOptional(a.isPlayChoice));
  module$core$src$utils$logger.default.info("Trainer               : " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatData(a.trainer)));
  module$core$src$utils$logger.default.info("==========[Cartridge Info - End]==========");
};
module$core$src$factories$CartridgeFactory.default = CartridgeFactory$$module$core$src$factories$CartridgeFactory;
// Input 17
var module$core$src$channels$NoiseChannel = {}, NoiseChannel$$module$core$src$channels$NoiseChannel = function() {
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting noise channel");
  this.setEnabled(!1);
  this.envelopeVolume = this.envelopeCycle = this.timerCycle = 0;
  this.shiftRegister = 1;
  this.writeEnvelope(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.setEnabled = function(a) {
  this.enabled = a;
  this.enabled || (this.lengthCounter = 0);
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.setRegionParams = function(a) {
  this.timerPeriods = a.noiseChannelTimerPeriods;
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.writeEnvelope = function(a) {
  this.lengthCounterHalt = 0 !== (a & 32);
  this.useConstantVolume = 0 !== (a & 16);
  this.constantVolume = a & 15;
  this.envelopeLoop = this.lengthCounterHalt;
  this.envelopePeriod = this.constantVolume;
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.writeTimer = function(a) {
  this.timerMode = 0 !== (a & 128);
  this.timerPeriod = this.timerPeriods[a & 15];
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.writeLengthCounter = function(a) {
  this.enabled && (this.lengthCounter = module$core$src$common$constants.LENGTH_COUNTER_VALUES[(a & 248) >>> 3]);
  this.envelopeReset = !0;
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod, this.updateShiftRegister());
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.tickQuarterFrame = function() {
  this.updateEnvelope();
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.updateShiftRegister = function() {
  this.shiftRegister = this.shiftRegister >>> 1 | (this.shiftRegister & 1 ^ this.shiftRegister >>> (this.timerMode ? 6 : 1) & 1) << 14;
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.updateEnvelope = function() {
  this.envelopeReset ? (this.envelopeReset = !1, this.envelopeCycle = this.envelopePeriod, this.envelopeVolume = 15) : 0 < this.envelopeCycle ? this.envelopeCycle-- : (this.envelopeCycle = this.envelopePeriod, 0 < this.envelopeVolume ? this.envelopeVolume-- : this.envelopeLoop && (this.envelopeVolume = 15));
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
NoiseChannel$$module$core$src$channels$NoiseChannel.prototype.getOutputValue = function() {
  return !this.lengthCounter || this.shiftRegister & 1 ? 0 : this.useConstantVolume ? this.constantVolume : this.envelopeVolume;
};
module$core$src$channels$NoiseChannel.default = NoiseChannel$$module$core$src$channels$NoiseChannel;
// Input 18
var module$core$src$channels$TriangleChannel = {}, DUTY_WAVEFORM$$module$core$src$channels$TriangleChannel = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], TriangleChannel$$module$core$src$channels$TriangleChannel = function() {
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting triangle channel");
  this.setEnabled(!1);
  this.linearCounter = this.dutyPosition = this.timerPeriod = this.timerCycle = 0;
  this.writeLinearCounter(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.setEnabled = function(a) {
  this.enabled = a;
  this.enabled || (this.lengthCounter = 0);
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.writeLinearCounter = function(a) {
  this.lengthCounterHalt = 0 !== (a & 128);
  this.linearCounterMax = a & 127;
  this.linearCounterControl = this.lengthCounterHalt;
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.writeTimer = function(a) {
  this.timerPeriod = this.timerPeriod & 1792 | a & 255;
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.writeLengthCounter = function(a) {
  this.timerPeriod = this.timerPeriod & 255 | (a & 7) << 8;
  this.enabled && (this.lengthCounter = module$core$src$common$constants.LENGTH_COUNTER_VALUES[(a & 248) >>> 3]);
  this.linearCounterReset = !0;
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod + 1, this.lengthCounter && this.linearCounter && 3 < this.timerPeriod && (this.dutyPosition = this.dutyPosition + 1 & 31));
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.tickQuarterFrame = function() {
  this.updateLinearCounter();
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.updateLinearCounter = function() {
  this.linearCounterReset ? this.linearCounter = this.linearCounterMax : 0 < this.linearCounter && this.linearCounter--;
  this.linearCounterControl || (this.linearCounterReset = !1);
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
TriangleChannel$$module$core$src$channels$TriangleChannel.prototype.getOutputValue = function() {
  return DUTY_WAVEFORM$$module$core$src$channels$TriangleChannel[this.dutyPosition];
};
module$core$src$channels$TriangleChannel.default = TriangleChannel$$module$core$src$channels$TriangleChannel;
// Input 19
var module$core$src$channels$PulseChannel = {}, DUTY_WAVEFORMS$$module$core$src$channels$PulseChannel = [[0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 1]], PulseChannel$$module$core$src$channels$PulseChannel = function(a) {
  this.channelId = a;
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting pulse channel " + this.channelId);
  this.setEnabled(!1);
  this.sweepCycle = this.envelopeVolume = this.envelopeCycle = this.timerPeriod = this.timerCycle = 0;
  this.writeDutyEnvelope(0);
  this.writeSweep(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.setEnabled = function(a) {
  this.enabled = a;
  this.enabled || (this.lengthCounter = 0);
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.writeDutyEnvelope = function(a) {
  this.dutySelection = (a & 192) >>> 6;
  this.lengthCounterHalt = 0 !== (a & 32);
  this.useConstantVolume = 0 !== (a & 16);
  this.constantVolume = a & 15;
  this.envelopeLoop = this.lengthCounterHalt;
  this.envelopePeriod = this.constantVolume;
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.writeSweep = function(a) {
  this.sweepEnabled = 0 !== (a & 128);
  this.sweepPeriod = (a & 112) >>> 4;
  this.sweepNegate = 0 !== (a & 8);
  this.sweepShift = a & 7;
  this.sweepReset = !0;
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.writeTimer = function(a) {
  this.timerPeriod = this.timerPeriod & 1792 | a & 255;
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.writeLengthCounter = function(a) {
  this.timerPeriod = this.timerPeriod & 255 | (a & 7) << 8;
  this.enabled && (this.lengthCounter = module$core$src$common$constants.LENGTH_COUNTER_VALUES[(a & 248) >>> 3]);
  this.dutyPosition = 0;
  this.envelopeReset = !0;
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod + 1 << 1, this.dutyPosition = this.dutyPosition + 1 & 7);
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.tickQuarterFrame = function() {
  this.updateEnvelope();
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
  this.updateSweep();
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.updateEnvelope = function() {
  this.envelopeReset ? (this.envelopeReset = !1, this.envelopeCycle = this.envelopePeriod, this.envelopeVolume = 15) : 0 < this.envelopeCycle ? this.envelopeCycle-- : (this.envelopeCycle = this.envelopePeriod, 0 < this.envelopeVolume ? this.envelopeVolume-- : this.envelopeLoop && (this.envelopeVolume = 15));
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.updateSweep = function() {
  0 < this.sweepCycle ? this.sweepCycle-- : (this.sweepEnabled && this.sweepShift && this.isTimerPeriodValid() && (this.timerPeriod += this.getSweep()), this.sweepCycle = this.sweepPeriod);
  this.sweepReset && (this.sweepReset = !1, this.sweepCycle = this.sweepPeriod);
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.getSweep = function() {
  var a = this.timerPeriod >>> this.sweepShift;
  return this.sweepNegate ? 1 === this.channelId ? ~a : -a : a;
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.isTimerPeriodValid = function() {
  return 8 <= this.timerPeriod && 2048 > this.timerPeriod + this.getSweep();
};
PulseChannel$$module$core$src$channels$PulseChannel.prototype.getOutputValue = function() {
  return this.lengthCounter && this.isTimerPeriodValid() ? (this.useConstantVolume ? this.constantVolume : this.envelopeVolume) * DUTY_WAVEFORMS$$module$core$src$channels$PulseChannel[this.dutySelection][this.dutyPosition] : 0;
};
module$core$src$channels$PulseChannel.default = PulseChannel$$module$core$src$channels$PulseChannel;
// Input 20
var module$core$src$channels$DMCChannel = {}, DMCChannel$$module$core$src$channels$DMCChannel = function(a, b) {
  this.cpu = a;
  this.cpuMemory = b;
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting DMC channel");
  this.setEnabled(!1);
  this.timerCycle = 0;
  this.shiftRegister = this.sampleBuffer = null;
  this.memoryAccessCycles = this.shiftRegisterBits = 0;
  this.writeFlagsTimer(0);
  this.writeOutputLevel(0);
  this.writeSampleAddress(0);
  this.writeSampleLength(0);
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.setEnabled = function(a) {
  this.enabled = a;
  this.enabled ? 0 === this.sampleRemainingLength && (this.sampleCurrentAddress = this.sampleAddress, this.sampleRemainingLength = this.sampleLength) : this.sampleRemainingLength = 0;
  this.cpu.clearInterrupt(module$core$src$common$constants.IRQ_DCM);
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.setRegionParams = function(a) {
  this.timerPeriods = a.dmcChannelTimerPeriods;
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.writeFlagsTimer = function(a) {
  this.irqEnabled = 0 !== (a & 128);
  this.sampleLoop = 0 !== (a & 64);
  this.timerPeriod = this.timerPeriods[a & 15];
  this.irqEnabled || this.cpu.clearInterrupt(module$core$src$common$constants.IRQ_DCM);
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.writeOutputLevel = function(a) {
  this.outputValue = a & 127;
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.writeSampleAddress = function(a) {
  this.sampleAddress = 49152 | (a & 255) << 6;
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.writeSampleLength = function(a) {
  this.sampleLength = (a & 255) << 4 | 1;
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.tick = function() {
  0 < this.memoryAccessCycles && this.memoryAccessCycles--;
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod, this.updateSample());
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.updateSample = function() {
  this.updateSampleBuffer();
  this.updateShiftRegister();
  this.updateOutputValue();
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.updateSampleBuffer = function() {
  null === this.sampleBuffer && 0 < this.sampleRemainingLength && (this.sampleBuffer = this.cpuMemory.read(this.sampleCurrentAddress), this.memoryAccessCycles = 4, 65535 > this.sampleCurrentAddress ? this.sampleCurrentAddress++ : this.sampleCurrentAddress = 32768, 0 >= --this.sampleRemainingLength && (this.sampleLoop ? (this.sampleCurrentAddress = this.sampleAddress, this.sampleRemainingLength = this.sampleLength) : this.irqEnabled && this.cpu.activateInterrupt(module$core$src$common$constants.IRQ_DCM)));
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.updateShiftRegister = function() {
  0 >= --this.shiftRegisterBits && (this.shiftRegisterBits = 8, this.shiftRegister = this.sampleBuffer, this.sampleBuffer = null);
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.updateOutputValue = function() {
  null !== this.shiftRegister && (this.shiftRegister & 1 ? 125 >= this.outputValue && (this.outputValue += 2) : 2 <= this.outputValue && (this.outputValue -= 2), this.shiftRegister >>>= 1);
};
DMCChannel$$module$core$src$channels$DMCChannel.prototype.getOutputValue = function() {
  return this.outputValue;
};
module$core$src$channels$DMCChannel.default = DMCChannel$$module$core$src$channels$DMCChannel;
// Input 21
var module$core$src$units$APU = {}, APU$$module$core$src$units$APU = function() {
  this.dependencies = ["cpu", "cpuMemory"];
};
APU$$module$core$src$units$APU.prototype.inject = function(a, b) {
  this.cpu = a;
  this.pulseChannel1 = new module$core$src$channels$PulseChannel.default(1);
  this.pulseChannel2 = new module$core$src$channels$PulseChannel.default(2);
  this.triangleChannel = new module$core$src$channels$TriangleChannel.default;
  this.noiseChannel = new module$core$src$channels$NoiseChannel.default;
  this.dmcChannel = new module$core$src$channels$DMCChannel.default(a, b);
  this.channelEnabled = [!0, !0, !0, !0, !0];
  this.stopRecording();
};
APU$$module$core$src$units$APU.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting APU");
  this.clearFrameIRQ();
  this.pulseChannel1.powerUp();
  this.pulseChannel2.powerUp();
  this.triangleChannel.powerUp();
  this.noiseChannel.powerUp();
  this.dmcChannel.powerUp();
  this.writeFrameCounter(0);
};
APU$$module$core$src$units$APU.prototype.setRegionParams = function(a) {
  this.frameCounterMax4 = a.frameCounterMax4;
  this.frameCounterMax5 = a.frameCounterMax5;
  this.cpuFrequency = a.cpuFrequency;
  this.noiseChannel.setRegionParams(a);
  this.dmcChannel.setRegionParams(a);
};
APU$$module$core$src$units$APU.prototype.activateFrameIRQ = function() {
  this.frameIrqActive = !0;
  this.cpu.activateInterrupt(module$core$src$common$constants.IRQ_APU);
};
APU$$module$core$src$units$APU.prototype.clearFrameIRQ = function() {
  this.frameIrqActive = !1;
  this.cpu.clearInterrupt(module$core$src$common$constants.IRQ_APU);
};
APU$$module$core$src$units$APU.prototype.writeFrameCounter = function(a) {
  this.frameCounterLast = a;
  this.frameFiveStepMode = 0 !== (a & 128);
  this.frameIrqDisabled = 0 !== (a & 64);
  this.frameStep = 0;
  this.frameCounterResetDelay = 4;
  null == this.frameCounter && (this.frameCounter = this.getFrameCounterMax());
  this.frameIrqDisabled && this.clearFrameIRQ();
  this.frameFiveStepMode && (this.tickHalfFrame(), this.tickQuarterFrame());
};
APU$$module$core$src$units$APU.prototype.getFrameCounterMax = function() {
  return this.frameFiveStepMode ? this.frameCounterMax5[this.frameStep] : this.frameCounterMax4[this.frameStep];
};
APU$$module$core$src$units$APU.prototype.writePulseDutyEnvelope = function(a, b) {
  this.getPulseChannel(a).writeDutyEnvelope(b);
};
APU$$module$core$src$units$APU.prototype.writePulseSweep = function(a, b) {
  this.getPulseChannel(a).writeSweep(b);
};
APU$$module$core$src$units$APU.prototype.writePulseTimer = function(a, b) {
  this.getPulseChannel(a).writeTimer(b);
};
APU$$module$core$src$units$APU.prototype.writePulseLengthCounter = function(a, b) {
  this.getPulseChannel(a).writeLengthCounter(b);
};
APU$$module$core$src$units$APU.prototype.getPulseChannel = function(a) {
  return 1 === a ? this.pulseChannel1 : this.pulseChannel2;
};
APU$$module$core$src$units$APU.prototype.writeTriangleLinearCounter = function(a) {
  this.triangleChannel.writeLinearCounter(a);
};
APU$$module$core$src$units$APU.prototype.writeTriangleTimer = function(a) {
  this.triangleChannel.writeTimer(a);
};
APU$$module$core$src$units$APU.prototype.writeTriangleLengthCounter = function(a) {
  this.triangleChannel.writeLengthCounter(a);
};
APU$$module$core$src$units$APU.prototype.writeNoiseEnvelope = function(a) {
  this.noiseChannel.writeEnvelope(a);
};
APU$$module$core$src$units$APU.prototype.writeNoiseTimer = function(a) {
  this.noiseChannel.writeTimer(a);
};
APU$$module$core$src$units$APU.prototype.writeNoiseLengthCounter = function(a) {
  this.noiseChannel.writeLengthCounter(a);
};
APU$$module$core$src$units$APU.prototype.writeDMCFlagsTimer = function(a) {
  this.dmcChannel.writeFlagsTimer(a);
};
APU$$module$core$src$units$APU.prototype.writeDMCOutputLevel = function(a) {
  this.dmcChannel.writeOutputLevel(a);
};
APU$$module$core$src$units$APU.prototype.writeDMCSampleAddress = function(a) {
  this.dmcChannel.writeSampleAddress(a);
};
APU$$module$core$src$units$APU.prototype.writeDMCSampleLength = function(a) {
  this.dmcChannel.writeSampleLength(a);
};
APU$$module$core$src$units$APU.prototype.setChannelEnabled = function(a, b) {
  this.channelEnabled[a] = b;
};
APU$$module$core$src$units$APU.prototype.isChannelEnabled = function(a) {
  return this.channelEnabled[a];
};
APU$$module$core$src$units$APU.prototype.writeStatus = function(a) {
  this.pulseChannel1.setEnabled(0 !== (a & 1));
  this.pulseChannel2.setEnabled(0 !== (a & 2));
  this.triangleChannel.setEnabled(0 !== (a & 4));
  this.noiseChannel.setEnabled(0 !== (a & 8));
  this.dmcChannel.setEnabled(0 !== (a & 16));
};
APU$$module$core$src$units$APU.prototype.readStatus = function() {
  var a = this.getStatus();
  this.clearFrameIRQ();
  return a;
};
APU$$module$core$src$units$APU.prototype.getStatus = function() {
  return 0 < this.pulseChannel1.lengthCounter | (0 < this.pulseChannel2.lengthCounter) << 1 | (0 < this.triangleChannel.lengthCounter) << 2 | (0 < this.noiseChannel.lengthCounter) << 3 | (0 < this.dmcChannel.sampleRemainingLength) << 4 | this.frameIrqActive << 6 | this.dmcChannel.irqActive << 7;
};
APU$$module$core$src$units$APU.prototype.isBlockingCPU = function() {
  return 0 < this.dmcChannel.memoryAccessCycles;
};
APU$$module$core$src$units$APU.prototype.isBlockingDMA = function() {
  return 2 < this.dmcChannel.memoryAccessCycles;
};
APU$$module$core$src$units$APU.prototype.tick = function() {
  this.tickFrameCounter();
  this.pulseChannel1.tick();
  this.pulseChannel2.tick();
  this.triangleChannel.tick();
  this.noiseChannel.tick();
  this.dmcChannel.tick();
  this.recordingActive && this.recordOutputValue();
};
APU$$module$core$src$units$APU.prototype.tickFrameCounter = function() {
  this.frameCounterResetDelay && 0 >= --this.frameCounterResetDelay && (this.frameCounter = this.getFrameCounterMax());
  0 >= --this.frameCounter && this.tickFrameStep();
};
APU$$module$core$src$units$APU.prototype.tickFrameStep = function() {
  this.frameStep = (this.frameStep + 1) % 6;
  this.frameCounter = this.getFrameCounterMax();
  switch(this.frameStep) {
    case 1:
      this.tickQuarterFrame();
      break;
    case 2:
      this.tickQuarterFrame();
      this.tickHalfFrame();
      break;
    case 3:
      this.tickQuarterFrame();
      break;
    case 4:
      this.tickFrameIRQ();
      break;
    case 5:
      this.tickQuarterFrame();
      this.tickHalfFrame();
      this.tickFrameIRQ();
      break;
    case 0:
      this.tickFrameIRQ();
  }
};
APU$$module$core$src$units$APU.prototype.tickQuarterFrame = function() {
  this.pulseChannel1.tickQuarterFrame();
  this.pulseChannel2.tickQuarterFrame();
  this.triangleChannel.tickQuarterFrame();
  this.noiseChannel.tickQuarterFrame();
};
APU$$module$core$src$units$APU.prototype.tickHalfFrame = function() {
  this.pulseChannel1.tickHalfFrame();
  this.pulseChannel2.tickHalfFrame();
  this.triangleChannel.tickHalfFrame();
  this.noiseChannel.tickHalfFrame();
};
APU$$module$core$src$units$APU.prototype.tickFrameIRQ = function() {
  this.frameIrqDisabled || this.frameFiveStepMode || this.activateFrameIRQ();
};
APU$$module$core$src$units$APU.prototype.getOutputValue = function() {
  return this.getPulseOutputValue() + this.getTriangleNoiseDMCOutput();
};
APU$$module$core$src$units$APU.prototype.getPulseOutputValue = function() {
  var a = this.channelEnabled[0] ? this.pulseChannel1.getOutputValue() : 0, b = this.channelEnabled[1] ? this.pulseChannel2.getOutputValue() : 0;
  return a || b ? 95.88 / (8128 / (a + b) + 100) : 0;
};
APU$$module$core$src$units$APU.prototype.getTriangleNoiseDMCOutput = function() {
  var a = this.channelEnabled[2] ? this.triangleChannel.getOutputValue() : 0, b = this.channelEnabled[3] ? this.noiseChannel.getOutputValue() : 0, c = this.channelEnabled[4] ? this.dmcChannel.getOutputValue() : 0;
  return a || b || c ? 159.79 / (1 / (a / 8227 + b / 12241 + c / 22638) + 100) : 0;
};
APU$$module$core$src$units$APU.prototype.initRecording = function(a) {
  this.bufferSize = a;
  this.lastPosition = a - 1;
  this.recordBuffer = new Float32Array(a);
  this.recordPosition = -1;
  this.recordCycle = 0;
  this.outputBuffer = new Float32Array(a);
  this.outputBufferFull = !1;
};
APU$$module$core$src$units$APU.prototype.startRecording = function(a) {
  if (!this.recordBuffer) {
    throw Error("Cannot start audio recording without initialization");
  }
  this.sampleRate = a;
  this.sampleRateAdjustment = 0;
  this.recordingActive = !0;
};
APU$$module$core$src$units$APU.prototype.stopRecording = function() {
  this.recordingActive = !1;
};
APU$$module$core$src$units$APU.prototype.recordOutputValue = function() {
  var a = ~~(this.recordCycle++ * this.sampleRate / this.cpuFrequency);
  a > this.recordPosition && this.fillRecordBuffer(a);
};
APU$$module$core$src$units$APU.prototype.fillRecordBuffer = function(a) {
  var b = this.getOutputValue();
  if (null == a || a > this.lastPosition) {
    a = this.lastPosition;
  }
  for (;this.recordPosition < a;) {
    this.recordBuffer[++this.recordPosition] = b, this.sampleRate += this.sampleRateAdjustment;
  }
  this.recordPosition >= this.lastPosition && !this.outputBufferFull && this.swapOutputBuffer();
};
APU$$module$core$src$units$APU.prototype.swapOutputBuffer = function() {
  var a = $jscomp.makeIterator([this.recordBuffer, this.outputBuffer]);
  this.outputBuffer = a.next().value;
  this.recordBuffer = a.next().value;
  this.outputBufferFull = !0;
  this.recordPosition = -1;
  this.recordCycle = 0;
};
APU$$module$core$src$units$APU.prototype.readOutputBuffer = function() {
  this.outputBufferFull || this.fillRecordBuffer();
  this.computeSampleRateAdjustment();
  this.outputBufferFull = !1;
  return this.outputBuffer;
};
APU$$module$core$src$units$APU.prototype.computeSampleRateAdjustment = function() {
  this.sampleRateAdjustment = 100 * (.5 - this.recordPosition / this.bufferSize) / this.bufferSize;
};
module$core$src$units$APU.default = APU$$module$core$src$units$APU;
// Input 22
var module$core$src$units$CPU = {}, Operation$$module$core$src$units$CPU = function(a, b, c, d) {
  this.instruction = a;
  this.addressingMode = b;
  this.cycles = c;
  this.pageCrossEnabled = d;
}, CPU$$module$core$src$units$CPU = function() {
  this.dependencies = ["cpuMemory", "ppu", "apu", "dma"];
  this.initOperations();
};
CPU$$module$core$src$units$CPU.prototype.inject = function(a, b, c, d) {
  this.cpuMemory = a;
  this.ppu = b;
  this.apu = c;
  this.dma = d;
};
CPU$$module$core$src$units$CPU.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting CPU");
  this.resetRegisters();
  this.resetVariables();
  this.resetMemory();
  this.handleReset();
};
CPU$$module$core$src$units$CPU.prototype.resetRegisters = function() {
  this.registerY = this.registerX = this.accumulator = this.stackPointer = this.programCounter = 0;
  this.setStatus(0);
};
CPU$$module$core$src$units$CPU.prototype.resetVariables = function() {
  this.activeInterrupts = this.cycle = 0;
  this.halted = !1;
};
CPU$$module$core$src$units$CPU.prototype.resetMemory = function() {
  for (var a = 0;2048 > a;a++) {
    this.writeByte(a, 255);
  }
  for (a = 16384;16400 > a;a++) {
    this.writeByte(a, 0);
  }
  this.writeByte(8, 247);
  this.writeByte(9, 239);
  this.writeByte(10, 223);
  this.writeByte(15, 191);
};
CPU$$module$core$src$units$CPU.prototype.step = function() {
  var a = this.dma.isBlockingCPU() || this.apu.isBlockingCPU();
  this.activeInterrupts && !a && this.resolveInterrupt();
  this.halted || a ? this.tick(1) : this.executeOperation();
};
CPU$$module$core$src$units$CPU.prototype.resolveInterrupt = function() {
  if (this.activeInterrupts & module$core$src$common$constants.RESET) {
    this.handleReset();
  } else {
    if (this.activeInterrupts & module$core$src$common$constants.NMI) {
      this.handleNMI();
    } else {
      if (this.interruptDisable) {
        return;
      }
      this.handleIRQ();
    }
  }
  this.tick(7);
};
CPU$$module$core$src$units$CPU.prototype.handleReset = function() {
  this.cycle = 0;
  this.writeByte(16405, 0);
  this.writeByte(16407, this.apu.frameCounterLast);
  this.stackPointer = this.stackPointer - 3 & 255;
  this.enterInterruptHandler(65532);
  this.clearInterrupt(module$core$src$common$constants.RESET);
  this.halted = !1;
};
CPU$$module$core$src$units$CPU.prototype.handleNMI = function() {
  this.saveStateBeforeInterrupt();
  this.enterInterruptHandler(65530);
  this.clearInterrupt(module$core$src$common$constants.NMI);
};
CPU$$module$core$src$units$CPU.prototype.handleIRQ = function() {
  this.saveStateBeforeInterrupt();
  this.enterInterruptHandler(65534);
};
CPU$$module$core$src$units$CPU.prototype.saveStateBeforeInterrupt = function() {
  this.pushWord(this.programCounter);
  this.pushByte(this.getStatus());
};
CPU$$module$core$src$units$CPU.prototype.enterInterruptHandler = function(a) {
  this.interruptDisable = 1;
  this.programCounter = this.readWord(a);
};
CPU$$module$core$src$units$CPU.prototype.executeOperation = function() {
  var a = this.readOperation();
  if (a) {
    var b = a.instruction, c = a.addressingMode;
    this.pageCrossed = !1;
    this.pageCrossEnabled = a.pageCrossEnabled;
    this.operationCycles = a.cycles;
    a = c.call(this);
    b.call(this, a);
    this.tick(this.operationCycles);
  } else {
    module$core$src$utils$logger.default.info("CPU halted!"), this.halted = !0;
  }
};
CPU$$module$core$src$units$CPU.prototype.readOperation = function() {
  return this.operations[this.readNextProgramByte()];
};
CPU$$module$core$src$units$CPU.prototype.readNextProgramByte = function() {
  return this.readByte(this.moveProgramCounter(1));
};
CPU$$module$core$src$units$CPU.prototype.readNextProgramWord = function() {
  return this.readWord(this.moveProgramCounter(2));
};
CPU$$module$core$src$units$CPU.prototype.moveProgramCounter = function(a) {
  var b = this.programCounter;
  this.programCounter = this.programCounter + a & 65535;
  return b;
};
CPU$$module$core$src$units$CPU.prototype.readByte = function(a) {
  return this.cpuMemory.read(a);
};
CPU$$module$core$src$units$CPU.prototype.readWord = function(a) {
  return this.readByte(a + 1 & 65535) << 8 | this.readByte(a);
};
CPU$$module$core$src$units$CPU.prototype.readWordFromSamePage = function(a) {
  return this.readByte(a & 65280 | a + 1 & 255) << 8 | this.readByte(a);
};
CPU$$module$core$src$units$CPU.prototype.writeByte = function(a, b) {
  this.cpuMemory.write(a, b);
  return b;
};
CPU$$module$core$src$units$CPU.prototype.writeWord = function(a, b) {
  this.writeByte(a, b & 255);
  return this.writeByte(a + 1 & 65535, b >>> 8);
};
CPU$$module$core$src$units$CPU.prototype.pushByte = function(a) {
  this.writeByte(256 + this.stackPointer, a);
  this.stackPointer = this.stackPointer - 1 & 255;
};
CPU$$module$core$src$units$CPU.prototype.pushWord = function(a) {
  this.pushByte(a >>> 8);
  this.pushByte(a & 255);
};
CPU$$module$core$src$units$CPU.prototype.popByte = function() {
  this.stackPointer = this.stackPointer + 1 & 255;
  return this.readByte(256 + this.stackPointer);
};
CPU$$module$core$src$units$CPU.prototype.popWord = function() {
  return this.popByte() | this.popByte() << 8;
};
CPU$$module$core$src$units$CPU.prototype.getStatus = function() {
  return this.carryFlag | this.zeroFlag << 1 | this.interruptDisable << 2 | this.decimalMode << 3 | 32 | this.overflowFlag << 6 | this.negativeFlag << 7;
};
CPU$$module$core$src$units$CPU.prototype.setStatus = function(a) {
  this.carryFlag = a & 1;
  this.zeroFlag = a >>> 1 & 1;
  this.interruptDisable = a >>> 2 & 1;
  this.decimalMode = a >>> 3 & 1;
  this.overflowFlag = a >>> 6 & 1;
  this.negativeFlag = a >>> 7;
};
CPU$$module$core$src$units$CPU.prototype.activateInterrupt = function(a) {
  this.activeInterrupts |= a;
};
CPU$$module$core$src$units$CPU.prototype.clearInterrupt = function(a) {
  this.activeInterrupts &= ~a;
};
CPU$$module$core$src$units$CPU.prototype.tick = function(a) {
  for (var b = 0;b < a;b++) {
    this.apu.isBlockingDMA() || this.dma.tick(), this.ppu.tick(), this.ppu.tick(), this.ppu.tick(), this.apu.tick(), this.cycle++;
  }
};
CPU$$module$core$src$units$CPU.prototype.impliedMode = function() {
};
CPU$$module$core$src$units$CPU.prototype.accumulatorMode = function() {
};
CPU$$module$core$src$units$CPU.prototype.immediateMode = function() {
  return this.moveProgramCounter(1);
};
CPU$$module$core$src$units$CPU.prototype.zeroPageMode = function() {
  return this.readNextProgramByte();
};
CPU$$module$core$src$units$CPU.prototype.zeroPageXMode = function() {
  return this.getIndexedAddressByte(this.readNextProgramByte(), this.registerX);
};
CPU$$module$core$src$units$CPU.prototype.zeroPageYMode = function() {
  return this.getIndexedAddressByte(this.readNextProgramByte(), this.registerY);
};
CPU$$module$core$src$units$CPU.prototype.absoluteMode = function() {
  return this.readNextProgramWord();
};
CPU$$module$core$src$units$CPU.prototype.absoluteXMode = function() {
  return this.getIndexedAddressWord(this.readNextProgramWord(), this.registerX);
};
CPU$$module$core$src$units$CPU.prototype.absoluteYMode = function() {
  return this.getIndexedAddressWord(this.readNextProgramWord(), this.registerY);
};
CPU$$module$core$src$units$CPU.prototype.relativeMode = function() {
  var a = this.programCounter + 1 & 65535, b = this.getSignedByte(this.readNextProgramByte());
  return this.getIndexedAddressWord(a, b);
};
CPU$$module$core$src$units$CPU.prototype.indirectMode = function() {
  return this.readWordFromSamePage(this.readNextProgramWord());
};
CPU$$module$core$src$units$CPU.prototype.indirectXMode = function() {
  return this.readWordFromSamePage(this.zeroPageXMode());
};
CPU$$module$core$src$units$CPU.prototype.indirectYMode = function() {
  var a = this.readWordFromSamePage(this.readNextProgramByte());
  return this.getIndexedAddressWord(a, this.registerY);
};
CPU$$module$core$src$units$CPU.prototype.getIndexedAddressByte = function(a, b) {
  return a + b & 255;
};
CPU$$module$core$src$units$CPU.prototype.getIndexedAddressWord = function(a, b) {
  this.pageCrossed = (a & 65280) !== (a + b & 65280);
  this.pageCrossEnabled && this.pageCrossed && this.operationCycles++;
  return a + b & 65535;
};
CPU$$module$core$src$units$CPU.prototype.getSignedByte = function(a) {
  return 128 <= a ? a - 256 : a;
};
CPU$$module$core$src$units$CPU.prototype.NOP = function() {
};
CPU$$module$core$src$units$CPU.prototype.CLC = function() {
  this.carryFlag = 0;
};
CPU$$module$core$src$units$CPU.prototype.CLI = function() {
  this.interruptDisable = 0;
};
CPU$$module$core$src$units$CPU.prototype.CLD = function() {
  this.decimalMode = 0;
};
CPU$$module$core$src$units$CPU.prototype.CLV = function() {
  this.overflowFlag = 0;
};
CPU$$module$core$src$units$CPU.prototype.SEC = function() {
  this.carryFlag = 1;
};
CPU$$module$core$src$units$CPU.prototype.SEI = function() {
  this.interruptDisable = 1;
};
CPU$$module$core$src$units$CPU.prototype.SED = function() {
  this.decimalMode = 1;
};
CPU$$module$core$src$units$CPU.prototype.STA = function(a) {
  this.writeByte(a, this.accumulator);
};
CPU$$module$core$src$units$CPU.prototype.STX = function(a) {
  this.writeByte(a, this.registerX);
};
CPU$$module$core$src$units$CPU.prototype.SAX = function(a) {
  this.writeByte(a, this.accumulator & this.registerX);
};
CPU$$module$core$src$units$CPU.prototype.STY = function(a) {
  this.writeByte(a, this.registerY);
};
CPU$$module$core$src$units$CPU.prototype.SHA = function(a) {
  this.storeHighAddressIntoMemory(a, this.accumulator & this.registerX);
};
CPU$$module$core$src$units$CPU.prototype.SHX = function(a) {
  this.storeHighAddressIntoMemory(a, this.registerX);
};
CPU$$module$core$src$units$CPU.prototype.SHY = function(a) {
  this.storeHighAddressIntoMemory(a, this.registerY);
};
CPU$$module$core$src$units$CPU.prototype.LDA = function(a) {
  this.storeValueIntoAccumulator(this.readByte(a));
};
CPU$$module$core$src$units$CPU.prototype.LDX = function(a) {
  this.storeValueIntoRegisterX(this.readByte(a));
};
CPU$$module$core$src$units$CPU.prototype.LDY = function(a) {
  this.storeValueIntoRegisterY(this.readByte(a));
};
CPU$$module$core$src$units$CPU.prototype.LAX = function(a) {
  a = this.readByte(a);
  this.storeValueIntoAccumulator(a);
  this.storeValueIntoRegisterX(a);
};
CPU$$module$core$src$units$CPU.prototype.LAS = function(a) {
  this.stackPointer &= this.readByte(a);
  this.storeValueIntoAccumulator(this.stackPointer);
  this.storeValueIntoRegisterX(this.stackPointer);
};
CPU$$module$core$src$units$CPU.prototype.TAX = function() {
  this.storeValueIntoRegisterX(this.accumulator);
};
CPU$$module$core$src$units$CPU.prototype.TAY = function() {
  this.storeValueIntoRegisterY(this.accumulator);
};
CPU$$module$core$src$units$CPU.prototype.TXA = function() {
  this.storeValueIntoAccumulator(this.registerX);
};
CPU$$module$core$src$units$CPU.prototype.TYA = function() {
  this.storeValueIntoAccumulator(this.registerY);
};
CPU$$module$core$src$units$CPU.prototype.TSX = function() {
  this.storeValueIntoRegisterX(this.stackPointer);
};
CPU$$module$core$src$units$CPU.prototype.TXS = function() {
  this.stackPointer = this.registerX;
};
CPU$$module$core$src$units$CPU.prototype.PHA = function() {
  this.pushByte(this.accumulator);
};
CPU$$module$core$src$units$CPU.prototype.PHP = function() {
  this.pushByte(this.getStatus() | 16);
};
CPU$$module$core$src$units$CPU.prototype.PLA = function() {
  this.storeValueIntoAccumulator(this.popByte());
};
CPU$$module$core$src$units$CPU.prototype.PLP = function() {
  this.setStatus(this.popByte());
};
CPU$$module$core$src$units$CPU.prototype.AND = function(a) {
  return this.storeValueIntoAccumulator(this.accumulator & this.readByte(a));
};
CPU$$module$core$src$units$CPU.prototype.ORA = function(a) {
  this.storeValueIntoAccumulator(this.accumulator | this.readByte(a));
};
CPU$$module$core$src$units$CPU.prototype.EOR = function(a) {
  this.storeValueIntoAccumulator(this.accumulator ^ this.readByte(a));
};
CPU$$module$core$src$units$CPU.prototype.BIT = function(a) {
  a = this.readByte(a);
  this.zeroFlag = 0 === (this.accumulator & a);
  this.overflowFlag = a >>> 6 & 1;
  this.negativeFlag = a >>> 7;
};
CPU$$module$core$src$units$CPU.prototype.INC = function(a) {
  return this.storeValueIntoMemory(a, this.readByte(a) + 1 & 255);
};
CPU$$module$core$src$units$CPU.prototype.INX = function() {
  this.storeValueIntoRegisterX(this.registerX + 1 & 255);
};
CPU$$module$core$src$units$CPU.prototype.INY = function() {
  this.storeValueIntoRegisterY(this.registerY + 1 & 255);
};
CPU$$module$core$src$units$CPU.prototype.DEC = function(a) {
  return this.storeValueIntoMemory(a, this.readByte(a) - 1 & 255);
};
CPU$$module$core$src$units$CPU.prototype.DEX = function() {
  this.storeValueIntoRegisterX(this.registerX - 1 & 255);
};
CPU$$module$core$src$units$CPU.prototype.DEY = function() {
  this.storeValueIntoRegisterY(this.registerY - 1 & 255);
};
CPU$$module$core$src$units$CPU.prototype.CMP = function(a) {
  this.compareRegisterAndMemory(this.accumulator, a);
};
CPU$$module$core$src$units$CPU.prototype.CPX = function(a) {
  this.compareRegisterAndMemory(this.registerX, a);
};
CPU$$module$core$src$units$CPU.prototype.CPY = function(a) {
  this.compareRegisterAndMemory(this.registerY, a);
};
CPU$$module$core$src$units$CPU.prototype.BCC = function(a) {
  this.branchIf(!this.carryFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.BCS = function(a) {
  this.branchIf(this.carryFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.BNE = function(a) {
  this.branchIf(!this.zeroFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.BEQ = function(a) {
  this.branchIf(this.zeroFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.BVC = function(a) {
  this.branchIf(!this.overflowFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.BVS = function(a) {
  this.branchIf(this.overflowFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.BPL = function(a) {
  this.branchIf(!this.negativeFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.BMI = function(a) {
  this.branchIf(this.negativeFlag, a);
};
CPU$$module$core$src$units$CPU.prototype.JMP = function(a) {
  this.programCounter = a;
};
CPU$$module$core$src$units$CPU.prototype.JSR = function(a) {
  this.pushWord(this.programCounter - 1 & 65535);
  this.programCounter = a;
};
CPU$$module$core$src$units$CPU.prototype.RTS = function() {
  this.programCounter = this.popWord() + 1 & 65535;
};
CPU$$module$core$src$units$CPU.prototype.BRK = function() {
  this.moveProgramCounter(1);
  this.pushWord(this.programCounter);
  this.pushByte(this.getStatus() | 16);
  this.interruptDisable = 1;
  this.programCounter = this.readWord(65534);
};
CPU$$module$core$src$units$CPU.prototype.RTI = function() {
  this.setStatus(this.popByte());
  this.programCounter = this.popWord();
};
CPU$$module$core$src$units$CPU.prototype.ADC = function(a) {
  this.addValueToAccumulator(this.readByte(a));
};
CPU$$module$core$src$units$CPU.prototype.SBC = function(a) {
  this.addValueToAccumulator(this.readByte(a) ^ 255);
};
CPU$$module$core$src$units$CPU.prototype.ASL = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateLeft, !1);
};
CPU$$module$core$src$units$CPU.prototype.LSR = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateRight, !1);
};
CPU$$module$core$src$units$CPU.prototype.ROL = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateLeft, !0);
};
CPU$$module$core$src$units$CPU.prototype.ROR = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateRight, !0);
};
CPU$$module$core$src$units$CPU.prototype.DCP = function(a) {
  this.compareRegisterAndOperand(this.accumulator, this.DEC(a));
};
CPU$$module$core$src$units$CPU.prototype.ISB = function(a) {
  this.addValueToAccumulator(this.INC(a) ^ 255);
};
CPU$$module$core$src$units$CPU.prototype.SLO = function(a) {
  this.storeValueIntoAccumulator(this.accumulator | this.ASL(a));
};
CPU$$module$core$src$units$CPU.prototype.SRE = function(a) {
  this.storeValueIntoAccumulator(this.accumulator ^ this.LSR(a));
};
CPU$$module$core$src$units$CPU.prototype.RLA = function(a) {
  this.storeValueIntoAccumulator(this.accumulator & this.ROL(a));
};
CPU$$module$core$src$units$CPU.prototype.XAA = function(a) {
  this.storeValueIntoAccumulator(this.registerX & this.AND(a));
};
CPU$$module$core$src$units$CPU.prototype.RRA = function(a) {
  this.addValueToAccumulator(this.ROR(a));
};
CPU$$module$core$src$units$CPU.prototype.AXS = function(a) {
  this.registerX = this.compareRegisterAndMemory(this.accumulator & this.registerX, a);
};
CPU$$module$core$src$units$CPU.prototype.ANC = function(a) {
  this.rotateLeft(this.AND(a), !1);
};
CPU$$module$core$src$units$CPU.prototype.ALR = function(a) {
  this.AND(a);
  this.LSR();
};
CPU$$module$core$src$units$CPU.prototype.ARR = function(a) {
  this.AND(a);
  this.ROR();
  this.carryFlag = this.accumulator >>> 6 & 1;
  this.overflowFlag = this.accumulator >>> 5 & 1 ^ this.carryFlag;
};
CPU$$module$core$src$units$CPU.prototype.TAS = function(a) {
  this.stackPointer = this.accumulator & this.registerX;
  this.SHA(a);
};
CPU$$module$core$src$units$CPU.prototype.storeValueIntoAccumulator = function(a) {
  this.updateZeroAndNegativeFlag(a);
  return this.accumulator = a;
};
CPU$$module$core$src$units$CPU.prototype.storeValueIntoRegisterX = function(a) {
  this.updateZeroAndNegativeFlag(a);
  this.registerX = a;
};
CPU$$module$core$src$units$CPU.prototype.storeValueIntoRegisterY = function(a) {
  this.updateZeroAndNegativeFlag(a);
  this.registerY = a;
};
CPU$$module$core$src$units$CPU.prototype.storeValueIntoMemory = function(a, b) {
  this.updateZeroAndNegativeFlag(b);
  return this.writeByte(a, b);
};
CPU$$module$core$src$units$CPU.prototype.storeHighAddressIntoMemory = function(a, b) {
  this.pageCrossed ? this.writeByte(a, this.readByte(a)) : this.writeByte(a, b & (a >>> 8) + 1);
};
CPU$$module$core$src$units$CPU.prototype.addValueToAccumulator = function(a) {
  var b = this.accumulator + a + this.carryFlag;
  this.carryFlag = b >>> 8 & 1;
  this.overflowFlag = ((this.accumulator ^ b) & (a ^ b)) >>> 7 & 1;
  return this.storeValueIntoAccumulator(b & 255);
};
CPU$$module$core$src$units$CPU.prototype.compareRegisterAndMemory = function(a, b) {
  return this.compareRegisterAndOperand(a, this.readByte(b));
};
CPU$$module$core$src$units$CPU.prototype.compareRegisterAndOperand = function(a, b) {
  var c = a - b;
  this.carryFlag = 0 <= c;
  this.updateZeroAndNegativeFlag(c);
  return c & 255;
};
CPU$$module$core$src$units$CPU.prototype.branchIf = function(a, b) {
  a && (this.programCounter = b, this.operationCycles += this.pageCrossed ? 2 : 1);
};
CPU$$module$core$src$units$CPU.prototype.rotateAccumulatorOrMemory = function(a, b, c) {
  if (null != a) {
    return b = b.call(this, this.readByte(a), c), this.storeValueIntoMemory(a, b);
  }
  b = b.call(this, this.accumulator, c);
  return this.storeValueIntoAccumulator(b);
};
CPU$$module$core$src$units$CPU.prototype.rotateLeft = function(a, b) {
  var c = b & this.carryFlag;
  this.carryFlag = a >>> 7;
  return (a << 1 | c) & 255;
};
CPU$$module$core$src$units$CPU.prototype.rotateRight = function(a, b) {
  var c = (b & this.carryFlag) << 7;
  this.carryFlag = a & 1;
  return a >>> 1 | c;
};
CPU$$module$core$src$units$CPU.prototype.updateZeroAndNegativeFlag = function(a) {
  this.zeroFlag = 0 === (a & 255);
  this.negativeFlag = a >>> 7 & 1;
};
CPU$$module$core$src$units$CPU.prototype.initOperations = function() {
  this.operations = Array(255);
  this.operations[26] = new Operation$$module$core$src$units$CPU(this.NOP, this.impliedMode, 2, 0);
  this.operations[58] = new Operation$$module$core$src$units$CPU(this.NOP, this.impliedMode, 2, 0);
  this.operations[90] = new Operation$$module$core$src$units$CPU(this.NOP, this.impliedMode, 2, 0);
  this.operations[122] = new Operation$$module$core$src$units$CPU(this.NOP, this.impliedMode, 2, 0);
  this.operations[218] = new Operation$$module$core$src$units$CPU(this.NOP, this.impliedMode, 2, 0);
  this.operations[234] = new Operation$$module$core$src$units$CPU(this.NOP, this.impliedMode, 2, 0);
  this.operations[250] = new Operation$$module$core$src$units$CPU(this.NOP, this.impliedMode, 2, 0);
  this.operations[128] = new Operation$$module$core$src$units$CPU(this.NOP, this.immediateMode, 2, 0);
  this.operations[130] = new Operation$$module$core$src$units$CPU(this.NOP, this.immediateMode, 2, 0);
  this.operations[137] = new Operation$$module$core$src$units$CPU(this.NOP, this.immediateMode, 2, 0);
  this.operations[194] = new Operation$$module$core$src$units$CPU(this.NOP, this.immediateMode, 2, 0);
  this.operations[226] = new Operation$$module$core$src$units$CPU(this.NOP, this.immediateMode, 2, 0);
  this.operations[4] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageMode, 3, 0);
  this.operations[68] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageMode, 3, 0);
  this.operations[100] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageMode, 3, 0);
  this.operations[20] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageXMode, 4, 0);
  this.operations[52] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageXMode, 4, 0);
  this.operations[84] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageXMode, 4, 0);
  this.operations[116] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageXMode, 4, 0);
  this.operations[212] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageXMode, 4, 0);
  this.operations[244] = new Operation$$module$core$src$units$CPU(this.NOP, this.zeroPageXMode, 4, 0);
  this.operations[12] = new Operation$$module$core$src$units$CPU(this.NOP, this.absoluteMode, 4, 0);
  this.operations[28] = new Operation$$module$core$src$units$CPU(this.NOP, this.absoluteXMode, 4, 1);
  this.operations[60] = new Operation$$module$core$src$units$CPU(this.NOP, this.absoluteXMode, 4, 1);
  this.operations[92] = new Operation$$module$core$src$units$CPU(this.NOP, this.absoluteXMode, 4, 1);
  this.operations[124] = new Operation$$module$core$src$units$CPU(this.NOP, this.absoluteXMode, 4, 1);
  this.operations[220] = new Operation$$module$core$src$units$CPU(this.NOP, this.absoluteXMode, 4, 1);
  this.operations[252] = new Operation$$module$core$src$units$CPU(this.NOP, this.absoluteXMode, 4, 1);
  this.operations[24] = new Operation$$module$core$src$units$CPU(this.CLC, this.impliedMode, 2, 0);
  this.operations[88] = new Operation$$module$core$src$units$CPU(this.CLI, this.impliedMode, 2, 0);
  this.operations[216] = new Operation$$module$core$src$units$CPU(this.CLD, this.impliedMode, 2, 0);
  this.operations[184] = new Operation$$module$core$src$units$CPU(this.CLV, this.impliedMode, 2, 0);
  this.operations[56] = new Operation$$module$core$src$units$CPU(this.SEC, this.impliedMode, 2, 0);
  this.operations[120] = new Operation$$module$core$src$units$CPU(this.SEI, this.impliedMode, 2, 0);
  this.operations[248] = new Operation$$module$core$src$units$CPU(this.SED, this.impliedMode, 2, 0);
  this.operations[133] = new Operation$$module$core$src$units$CPU(this.STA, this.zeroPageMode, 3, 0);
  this.operations[149] = new Operation$$module$core$src$units$CPU(this.STA, this.zeroPageXMode, 4, 0);
  this.operations[141] = new Operation$$module$core$src$units$CPU(this.STA, this.absoluteMode, 4, 0);
  this.operations[157] = new Operation$$module$core$src$units$CPU(this.STA, this.absoluteXMode, 5, 0);
  this.operations[153] = new Operation$$module$core$src$units$CPU(this.STA, this.absoluteYMode, 5, 0);
  this.operations[129] = new Operation$$module$core$src$units$CPU(this.STA, this.indirectXMode, 6, 0);
  this.operations[145] = new Operation$$module$core$src$units$CPU(this.STA, this.indirectYMode, 6, 0);
  this.operations[134] = new Operation$$module$core$src$units$CPU(this.STX, this.zeroPageMode, 3, 0);
  this.operations[150] = new Operation$$module$core$src$units$CPU(this.STX, this.zeroPageYMode, 4, 0);
  this.operations[142] = new Operation$$module$core$src$units$CPU(this.STX, this.absoluteMode, 4, 0);
  this.operations[135] = new Operation$$module$core$src$units$CPU(this.SAX, this.zeroPageMode, 3, 0);
  this.operations[151] = new Operation$$module$core$src$units$CPU(this.SAX, this.zeroPageYMode, 4, 0);
  this.operations[143] = new Operation$$module$core$src$units$CPU(this.SAX, this.absoluteMode, 4, 0);
  this.operations[131] = new Operation$$module$core$src$units$CPU(this.SAX, this.indirectXMode, 6, 0);
  this.operations[132] = new Operation$$module$core$src$units$CPU(this.STY, this.zeroPageMode, 3, 0);
  this.operations[148] = new Operation$$module$core$src$units$CPU(this.STY, this.zeroPageXMode, 4, 0);
  this.operations[140] = new Operation$$module$core$src$units$CPU(this.STY, this.absoluteMode, 4, 0);
  this.operations[147] = new Operation$$module$core$src$units$CPU(this.SHA, this.indirectYMode, 6, 0);
  this.operations[159] = new Operation$$module$core$src$units$CPU(this.SHA, this.absoluteYMode, 5, 0);
  this.operations[158] = new Operation$$module$core$src$units$CPU(this.SHX, this.absoluteYMode, 5, 0);
  this.operations[156] = new Operation$$module$core$src$units$CPU(this.SHY, this.absoluteXMode, 5, 0);
  this.operations[169] = new Operation$$module$core$src$units$CPU(this.LDA, this.immediateMode, 2, 0);
  this.operations[165] = new Operation$$module$core$src$units$CPU(this.LDA, this.zeroPageMode, 3, 0);
  this.operations[181] = new Operation$$module$core$src$units$CPU(this.LDA, this.zeroPageXMode, 4, 0);
  this.operations[173] = new Operation$$module$core$src$units$CPU(this.LDA, this.absoluteMode, 4, 0);
  this.operations[189] = new Operation$$module$core$src$units$CPU(this.LDA, this.absoluteXMode, 4, 1);
  this.operations[185] = new Operation$$module$core$src$units$CPU(this.LDA, this.absoluteYMode, 4, 1);
  this.operations[161] = new Operation$$module$core$src$units$CPU(this.LDA, this.indirectXMode, 6, 0);
  this.operations[177] = new Operation$$module$core$src$units$CPU(this.LDA, this.indirectYMode, 5, 1);
  this.operations[162] = new Operation$$module$core$src$units$CPU(this.LDX, this.immediateMode, 2, 0);
  this.operations[166] = new Operation$$module$core$src$units$CPU(this.LDX, this.zeroPageMode, 3, 0);
  this.operations[182] = new Operation$$module$core$src$units$CPU(this.LDX, this.zeroPageYMode, 4, 0);
  this.operations[174] = new Operation$$module$core$src$units$CPU(this.LDX, this.absoluteMode, 4, 0);
  this.operations[190] = new Operation$$module$core$src$units$CPU(this.LDX, this.absoluteYMode, 4, 1);
  this.operations[160] = new Operation$$module$core$src$units$CPU(this.LDY, this.immediateMode, 2, 0);
  this.operations[164] = new Operation$$module$core$src$units$CPU(this.LDY, this.zeroPageMode, 3, 0);
  this.operations[180] = new Operation$$module$core$src$units$CPU(this.LDY, this.zeroPageXMode, 4, 0);
  this.operations[172] = new Operation$$module$core$src$units$CPU(this.LDY, this.absoluteMode, 4, 0);
  this.operations[188] = new Operation$$module$core$src$units$CPU(this.LDY, this.absoluteXMode, 4, 1);
  this.operations[171] = new Operation$$module$core$src$units$CPU(this.LAX, this.immediateMode, 2, 0);
  this.operations[167] = new Operation$$module$core$src$units$CPU(this.LAX, this.zeroPageMode, 3, 0);
  this.operations[183] = new Operation$$module$core$src$units$CPU(this.LAX, this.zeroPageYMode, 4, 0);
  this.operations[175] = new Operation$$module$core$src$units$CPU(this.LAX, this.absoluteMode, 4, 0);
  this.operations[191] = new Operation$$module$core$src$units$CPU(this.LAX, this.absoluteYMode, 4, 1);
  this.operations[163] = new Operation$$module$core$src$units$CPU(this.LAX, this.indirectXMode, 6, 0);
  this.operations[179] = new Operation$$module$core$src$units$CPU(this.LAX, this.indirectYMode, 5, 1);
  this.operations[187] = new Operation$$module$core$src$units$CPU(this.LAS, this.absoluteYMode, 4, 1);
  this.operations[170] = new Operation$$module$core$src$units$CPU(this.TAX, this.impliedMode, 2, 0);
  this.operations[168] = new Operation$$module$core$src$units$CPU(this.TAY, this.impliedMode, 2, 0);
  this.operations[138] = new Operation$$module$core$src$units$CPU(this.TXA, this.impliedMode, 2, 0);
  this.operations[152] = new Operation$$module$core$src$units$CPU(this.TYA, this.impliedMode, 2, 0);
  this.operations[154] = new Operation$$module$core$src$units$CPU(this.TXS, this.impliedMode, 2, 0);
  this.operations[186] = new Operation$$module$core$src$units$CPU(this.TSX, this.impliedMode, 2, 0);
  this.operations[72] = new Operation$$module$core$src$units$CPU(this.PHA, this.impliedMode, 3, 0);
  this.operations[8] = new Operation$$module$core$src$units$CPU(this.PHP, this.impliedMode, 3, 0);
  this.operations[104] = new Operation$$module$core$src$units$CPU(this.PLA, this.impliedMode, 4, 0);
  this.operations[40] = new Operation$$module$core$src$units$CPU(this.PLP, this.impliedMode, 4, 0);
  this.operations[41] = new Operation$$module$core$src$units$CPU(this.AND, this.immediateMode, 2, 0);
  this.operations[37] = new Operation$$module$core$src$units$CPU(this.AND, this.zeroPageMode, 3, 0);
  this.operations[53] = new Operation$$module$core$src$units$CPU(this.AND, this.zeroPageXMode, 4, 0);
  this.operations[45] = new Operation$$module$core$src$units$CPU(this.AND, this.absoluteMode, 4, 0);
  this.operations[61] = new Operation$$module$core$src$units$CPU(this.AND, this.absoluteXMode, 4, 1);
  this.operations[57] = new Operation$$module$core$src$units$CPU(this.AND, this.absoluteYMode, 4, 1);
  this.operations[33] = new Operation$$module$core$src$units$CPU(this.AND, this.indirectXMode, 6, 0);
  this.operations[49] = new Operation$$module$core$src$units$CPU(this.AND, this.indirectYMode, 5, 1);
  this.operations[9] = new Operation$$module$core$src$units$CPU(this.ORA, this.immediateMode, 2, 0);
  this.operations[5] = new Operation$$module$core$src$units$CPU(this.ORA, this.zeroPageMode, 3, 0);
  this.operations[21] = new Operation$$module$core$src$units$CPU(this.ORA, this.zeroPageXMode, 4, 0);
  this.operations[13] = new Operation$$module$core$src$units$CPU(this.ORA, this.absoluteMode, 4, 0);
  this.operations[29] = new Operation$$module$core$src$units$CPU(this.ORA, this.absoluteXMode, 4, 1);
  this.operations[25] = new Operation$$module$core$src$units$CPU(this.ORA, this.absoluteYMode, 4, 1);
  this.operations[1] = new Operation$$module$core$src$units$CPU(this.ORA, this.indirectXMode, 6, 0);
  this.operations[17] = new Operation$$module$core$src$units$CPU(this.ORA, this.indirectYMode, 5, 1);
  this.operations[73] = new Operation$$module$core$src$units$CPU(this.EOR, this.immediateMode, 2, 0);
  this.operations[69] = new Operation$$module$core$src$units$CPU(this.EOR, this.zeroPageMode, 3, 0);
  this.operations[85] = new Operation$$module$core$src$units$CPU(this.EOR, this.zeroPageXMode, 4, 0);
  this.operations[77] = new Operation$$module$core$src$units$CPU(this.EOR, this.absoluteMode, 4, 0);
  this.operations[93] = new Operation$$module$core$src$units$CPU(this.EOR, this.absoluteXMode, 4, 1);
  this.operations[89] = new Operation$$module$core$src$units$CPU(this.EOR, this.absoluteYMode, 4, 1);
  this.operations[65] = new Operation$$module$core$src$units$CPU(this.EOR, this.indirectXMode, 6, 0);
  this.operations[81] = new Operation$$module$core$src$units$CPU(this.EOR, this.indirectYMode, 5, 1);
  this.operations[36] = new Operation$$module$core$src$units$CPU(this.BIT, this.zeroPageMode, 3, 0);
  this.operations[44] = new Operation$$module$core$src$units$CPU(this.BIT, this.absoluteMode, 4, 0);
  this.operations[230] = new Operation$$module$core$src$units$CPU(this.INC, this.zeroPageMode, 5, 0);
  this.operations[246] = new Operation$$module$core$src$units$CPU(this.INC, this.zeroPageXMode, 6, 0);
  this.operations[238] = new Operation$$module$core$src$units$CPU(this.INC, this.absoluteMode, 6, 0);
  this.operations[254] = new Operation$$module$core$src$units$CPU(this.INC, this.absoluteXMode, 7, 0);
  this.operations[232] = new Operation$$module$core$src$units$CPU(this.INX, this.impliedMode, 2, 0);
  this.operations[200] = new Operation$$module$core$src$units$CPU(this.INY, this.impliedMode, 2, 0);
  this.operations[198] = new Operation$$module$core$src$units$CPU(this.DEC, this.zeroPageMode, 5, 0);
  this.operations[214] = new Operation$$module$core$src$units$CPU(this.DEC, this.zeroPageXMode, 6, 0);
  this.operations[206] = new Operation$$module$core$src$units$CPU(this.DEC, this.absoluteMode, 6, 0);
  this.operations[222] = new Operation$$module$core$src$units$CPU(this.DEC, this.absoluteXMode, 7, 0);
  this.operations[202] = new Operation$$module$core$src$units$CPU(this.DEX, this.impliedMode, 2, 0);
  this.operations[136] = new Operation$$module$core$src$units$CPU(this.DEY, this.impliedMode, 2, 0);
  this.operations[201] = new Operation$$module$core$src$units$CPU(this.CMP, this.immediateMode, 2, 0);
  this.operations[197] = new Operation$$module$core$src$units$CPU(this.CMP, this.zeroPageMode, 3, 0);
  this.operations[213] = new Operation$$module$core$src$units$CPU(this.CMP, this.zeroPageXMode, 4, 0);
  this.operations[205] = new Operation$$module$core$src$units$CPU(this.CMP, this.absoluteMode, 4, 0);
  this.operations[221] = new Operation$$module$core$src$units$CPU(this.CMP, this.absoluteXMode, 4, 1);
  this.operations[217] = new Operation$$module$core$src$units$CPU(this.CMP, this.absoluteYMode, 4, 1);
  this.operations[193] = new Operation$$module$core$src$units$CPU(this.CMP, this.indirectXMode, 6, 0);
  this.operations[209] = new Operation$$module$core$src$units$CPU(this.CMP, this.indirectYMode, 5, 1);
  this.operations[224] = new Operation$$module$core$src$units$CPU(this.CPX, this.immediateMode, 2, 0);
  this.operations[228] = new Operation$$module$core$src$units$CPU(this.CPX, this.zeroPageMode, 3, 0);
  this.operations[236] = new Operation$$module$core$src$units$CPU(this.CPX, this.absoluteMode, 4, 0);
  this.operations[192] = new Operation$$module$core$src$units$CPU(this.CPY, this.immediateMode, 2, 0);
  this.operations[196] = new Operation$$module$core$src$units$CPU(this.CPY, this.zeroPageMode, 3, 0);
  this.operations[204] = new Operation$$module$core$src$units$CPU(this.CPY, this.absoluteMode, 4, 0);
  this.operations[144] = new Operation$$module$core$src$units$CPU(this.BCC, this.relativeMode, 2, 0);
  this.operations[176] = new Operation$$module$core$src$units$CPU(this.BCS, this.relativeMode, 2, 0);
  this.operations[208] = new Operation$$module$core$src$units$CPU(this.BNE, this.relativeMode, 2, 0);
  this.operations[240] = new Operation$$module$core$src$units$CPU(this.BEQ, this.relativeMode, 2, 0);
  this.operations[80] = new Operation$$module$core$src$units$CPU(this.BVC, this.relativeMode, 2, 0);
  this.operations[112] = new Operation$$module$core$src$units$CPU(this.BVS, this.relativeMode, 2, 0);
  this.operations[16] = new Operation$$module$core$src$units$CPU(this.BPL, this.relativeMode, 2, 0);
  this.operations[48] = new Operation$$module$core$src$units$CPU(this.BMI, this.relativeMode, 2, 0);
  this.operations[76] = new Operation$$module$core$src$units$CPU(this.JMP, this.absoluteMode, 3, 0);
  this.operations[108] = new Operation$$module$core$src$units$CPU(this.JMP, this.indirectMode, 5, 0);
  this.operations[32] = new Operation$$module$core$src$units$CPU(this.JSR, this.absoluteMode, 6, 0);
  this.operations[96] = new Operation$$module$core$src$units$CPU(this.RTS, this.impliedMode, 6, 0);
  this.operations[0] = new Operation$$module$core$src$units$CPU(this.BRK, this.impliedMode, 7, 0);
  this.operations[64] = new Operation$$module$core$src$units$CPU(this.RTI, this.impliedMode, 6, 0);
  this.operations[105] = new Operation$$module$core$src$units$CPU(this.ADC, this.immediateMode, 2, 0);
  this.operations[101] = new Operation$$module$core$src$units$CPU(this.ADC, this.zeroPageMode, 3, 0);
  this.operations[117] = new Operation$$module$core$src$units$CPU(this.ADC, this.zeroPageXMode, 4, 0);
  this.operations[109] = new Operation$$module$core$src$units$CPU(this.ADC, this.absoluteMode, 4, 0);
  this.operations[125] = new Operation$$module$core$src$units$CPU(this.ADC, this.absoluteXMode, 4, 1);
  this.operations[121] = new Operation$$module$core$src$units$CPU(this.ADC, this.absoluteYMode, 4, 1);
  this.operations[97] = new Operation$$module$core$src$units$CPU(this.ADC, this.indirectXMode, 6, 0);
  this.operations[113] = new Operation$$module$core$src$units$CPU(this.ADC, this.indirectYMode, 5, 1);
  this.operations[233] = new Operation$$module$core$src$units$CPU(this.SBC, this.immediateMode, 2, 0);
  this.operations[235] = new Operation$$module$core$src$units$CPU(this.SBC, this.immediateMode, 2, 0);
  this.operations[229] = new Operation$$module$core$src$units$CPU(this.SBC, this.zeroPageMode, 3, 0);
  this.operations[245] = new Operation$$module$core$src$units$CPU(this.SBC, this.zeroPageXMode, 4, 0);
  this.operations[237] = new Operation$$module$core$src$units$CPU(this.SBC, this.absoluteMode, 4, 0);
  this.operations[253] = new Operation$$module$core$src$units$CPU(this.SBC, this.absoluteXMode, 4, 1);
  this.operations[249] = new Operation$$module$core$src$units$CPU(this.SBC, this.absoluteYMode, 4, 1);
  this.operations[225] = new Operation$$module$core$src$units$CPU(this.SBC, this.indirectXMode, 6, 0);
  this.operations[241] = new Operation$$module$core$src$units$CPU(this.SBC, this.indirectYMode, 5, 1);
  this.operations[10] = new Operation$$module$core$src$units$CPU(this.ASL, this.accumulatorMode, 2, 0);
  this.operations[6] = new Operation$$module$core$src$units$CPU(this.ASL, this.zeroPageMode, 5, 0);
  this.operations[22] = new Operation$$module$core$src$units$CPU(this.ASL, this.zeroPageXMode, 6, 0);
  this.operations[14] = new Operation$$module$core$src$units$CPU(this.ASL, this.absoluteMode, 6, 0);
  this.operations[30] = new Operation$$module$core$src$units$CPU(this.ASL, this.absoluteXMode, 7, 0);
  this.operations[74] = new Operation$$module$core$src$units$CPU(this.LSR, this.accumulatorMode, 2, 0);
  this.operations[70] = new Operation$$module$core$src$units$CPU(this.LSR, this.zeroPageMode, 5, 0);
  this.operations[86] = new Operation$$module$core$src$units$CPU(this.LSR, this.zeroPageXMode, 6, 0);
  this.operations[78] = new Operation$$module$core$src$units$CPU(this.LSR, this.absoluteMode, 6, 0);
  this.operations[94] = new Operation$$module$core$src$units$CPU(this.LSR, this.absoluteXMode, 7, 0);
  this.operations[42] = new Operation$$module$core$src$units$CPU(this.ROL, this.accumulatorMode, 2, 0);
  this.operations[38] = new Operation$$module$core$src$units$CPU(this.ROL, this.zeroPageMode, 5, 0);
  this.operations[54] = new Operation$$module$core$src$units$CPU(this.ROL, this.zeroPageXMode, 6, 0);
  this.operations[46] = new Operation$$module$core$src$units$CPU(this.ROL, this.absoluteMode, 6, 0);
  this.operations[62] = new Operation$$module$core$src$units$CPU(this.ROL, this.absoluteXMode, 7, 0);
  this.operations[106] = new Operation$$module$core$src$units$CPU(this.ROR, this.accumulatorMode, 2, 0);
  this.operations[102] = new Operation$$module$core$src$units$CPU(this.ROR, this.zeroPageMode, 5, 0);
  this.operations[118] = new Operation$$module$core$src$units$CPU(this.ROR, this.zeroPageXMode, 6, 0);
  this.operations[110] = new Operation$$module$core$src$units$CPU(this.ROR, this.absoluteMode, 6, 0);
  this.operations[126] = new Operation$$module$core$src$units$CPU(this.ROR, this.absoluteXMode, 7, 0);
  this.operations[199] = new Operation$$module$core$src$units$CPU(this.DCP, this.zeroPageMode, 5, 0);
  this.operations[215] = new Operation$$module$core$src$units$CPU(this.DCP, this.zeroPageXMode, 6, 0);
  this.operations[207] = new Operation$$module$core$src$units$CPU(this.DCP, this.absoluteMode, 6, 0);
  this.operations[223] = new Operation$$module$core$src$units$CPU(this.DCP, this.absoluteXMode, 7, 0);
  this.operations[219] = new Operation$$module$core$src$units$CPU(this.DCP, this.absoluteYMode, 7, 0);
  this.operations[195] = new Operation$$module$core$src$units$CPU(this.DCP, this.indirectXMode, 8, 0);
  this.operations[211] = new Operation$$module$core$src$units$CPU(this.DCP, this.indirectYMode, 8, 0);
  this.operations[231] = new Operation$$module$core$src$units$CPU(this.ISB, this.zeroPageMode, 5, 0);
  this.operations[247] = new Operation$$module$core$src$units$CPU(this.ISB, this.zeroPageXMode, 6, 0);
  this.operations[239] = new Operation$$module$core$src$units$CPU(this.ISB, this.absoluteMode, 6, 0);
  this.operations[255] = new Operation$$module$core$src$units$CPU(this.ISB, this.absoluteXMode, 7, 0);
  this.operations[251] = new Operation$$module$core$src$units$CPU(this.ISB, this.absoluteYMode, 7, 0);
  this.operations[227] = new Operation$$module$core$src$units$CPU(this.ISB, this.indirectXMode, 8, 0);
  this.operations[243] = new Operation$$module$core$src$units$CPU(this.ISB, this.indirectYMode, 8, 0);
  this.operations[7] = new Operation$$module$core$src$units$CPU(this.SLO, this.zeroPageMode, 5, 0);
  this.operations[23] = new Operation$$module$core$src$units$CPU(this.SLO, this.zeroPageXMode, 6, 0);
  this.operations[15] = new Operation$$module$core$src$units$CPU(this.SLO, this.absoluteMode, 6, 0);
  this.operations[31] = new Operation$$module$core$src$units$CPU(this.SLO, this.absoluteXMode, 7, 0);
  this.operations[27] = new Operation$$module$core$src$units$CPU(this.SLO, this.absoluteYMode, 7, 0);
  this.operations[3] = new Operation$$module$core$src$units$CPU(this.SLO, this.indirectXMode, 8, 0);
  this.operations[19] = new Operation$$module$core$src$units$CPU(this.SLO, this.indirectYMode, 8, 0);
  this.operations[71] = new Operation$$module$core$src$units$CPU(this.SRE, this.zeroPageMode, 5, 0);
  this.operations[87] = new Operation$$module$core$src$units$CPU(this.SRE, this.zeroPageXMode, 6, 0);
  this.operations[79] = new Operation$$module$core$src$units$CPU(this.SRE, this.absoluteMode, 6, 0);
  this.operations[95] = new Operation$$module$core$src$units$CPU(this.SRE, this.absoluteXMode, 7, 0);
  this.operations[91] = new Operation$$module$core$src$units$CPU(this.SRE, this.absoluteYMode, 7, 0);
  this.operations[67] = new Operation$$module$core$src$units$CPU(this.SRE, this.indirectXMode, 8, 0);
  this.operations[83] = new Operation$$module$core$src$units$CPU(this.SRE, this.indirectYMode, 8, 0);
  this.operations[39] = new Operation$$module$core$src$units$CPU(this.RLA, this.zeroPageMode, 5, 0);
  this.operations[55] = new Operation$$module$core$src$units$CPU(this.RLA, this.zeroPageXMode, 6, 0);
  this.operations[47] = new Operation$$module$core$src$units$CPU(this.RLA, this.absoluteMode, 6, 0);
  this.operations[63] = new Operation$$module$core$src$units$CPU(this.RLA, this.absoluteXMode, 7, 0);
  this.operations[59] = new Operation$$module$core$src$units$CPU(this.RLA, this.absoluteYMode, 7, 0);
  this.operations[35] = new Operation$$module$core$src$units$CPU(this.RLA, this.indirectXMode, 8, 0);
  this.operations[51] = new Operation$$module$core$src$units$CPU(this.RLA, this.indirectYMode, 8, 0);
  this.operations[139] = new Operation$$module$core$src$units$CPU(this.XAA, this.immediateMode, 2, 0);
  this.operations[103] = new Operation$$module$core$src$units$CPU(this.RRA, this.zeroPageMode, 5, 0);
  this.operations[119] = new Operation$$module$core$src$units$CPU(this.RRA, this.zeroPageXMode, 6, 0);
  this.operations[111] = new Operation$$module$core$src$units$CPU(this.RRA, this.absoluteMode, 6, 0);
  this.operations[127] = new Operation$$module$core$src$units$CPU(this.RRA, this.absoluteXMode, 7, 0);
  this.operations[123] = new Operation$$module$core$src$units$CPU(this.RRA, this.absoluteYMode, 7, 0);
  this.operations[99] = new Operation$$module$core$src$units$CPU(this.RRA, this.indirectXMode, 8, 0);
  this.operations[115] = new Operation$$module$core$src$units$CPU(this.RRA, this.indirectYMode, 8, 0);
  this.operations[203] = new Operation$$module$core$src$units$CPU(this.AXS, this.immediateMode, 2, 0);
  this.operations[11] = new Operation$$module$core$src$units$CPU(this.ANC, this.immediateMode, 2, 0);
  this.operations[43] = new Operation$$module$core$src$units$CPU(this.ANC, this.immediateMode, 2, 0);
  this.operations[75] = new Operation$$module$core$src$units$CPU(this.ALR, this.immediateMode, 2, 0);
  this.operations[107] = new Operation$$module$core$src$units$CPU(this.ARR, this.immediateMode, 2, 0);
  this.operations[155] = new Operation$$module$core$src$units$CPU(this.TAS, this.absoluteYMode, 5, 0);
};
CPU$$module$core$src$units$CPU.prototype.connectMapper = function(a) {
  this.mapper = a;
};
module$core$src$units$CPU.default = CPU$$module$core$src$units$CPU;
// Input 23
var module$core$src$units$DMA = {}, TOTAL_DMA_CYCLES$$module$core$src$units$DMA = 512, DMA$$module$core$src$units$DMA = function() {
  this.dependencies = ["cpuMemory"];
};
DMA$$module$core$src$units$DMA.prototype.inject = function(a) {
  this.cpuMemory = a;
};
DMA$$module$core$src$units$DMA.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting DMA");
  this.cyclesCount = TOTAL_DMA_CYCLES$$module$core$src$units$DMA;
};
DMA$$module$core$src$units$DMA.prototype.writeAddress = function(a) {
  this.cyclesCount = 0;
  this.baseAddress = a << 8;
};
DMA$$module$core$src$units$DMA.prototype.tick = function() {
  this.isBlockingCPU() && (this.cyclesCount++, this.cyclesCount & 1 && this.transferData());
};
DMA$$module$core$src$units$DMA.prototype.isBlockingCPU = function() {
  return this.cyclesCount < TOTAL_DMA_CYCLES$$module$core$src$units$DMA;
};
DMA$$module$core$src$units$DMA.prototype.transferData = function() {
  var a = this.cpuMemory.read(this.baseAddress + (this.cyclesCount >> 1));
  this.cpuMemory.write(8196, a);
};
module$core$src$units$DMA.default = DMA$$module$core$src$units$DMA;
// Input 24
var module$core$src$palettes$bmf_fin_r2 = {}, $jscompDefaultExport$$module$core$src$palettes$bmf_fin_r2 = "UlJSAACACACKLAB+SgBOUAAGRAAAJggACiAAAC4AADIAACYKABxIAAAAAAAAAAAApKSkADjONBbsXgTcjACwmgBMkBgAcDYATFQADmwAAHQAAGwsAF6EAAAAAAAAAAAA////TJz/fHj/pmT/2lr/8FTA8GpW1oYQuqQAdsAARswaLshmNMK+Ojo6AAAAAAAA////ttr/yMr/2sL/8L7//Lzu+sLA8syi5tqSzOaOuO6iruq+rujisLCwAAAAAAAA";
module$core$src$palettes$bmf_fin_r2.default = $jscompDefaultExport$$module$core$src$palettes$bmf_fin_r2;
// Input 25
var module$core$src$palettes$asq_real_b = {}, $jscompDefaultExport$$module$core$src$palettes$asq_real_b = "bGxsACCUAACoPACYcABwfAA8cAAAaBAARhoAPCwAAFAAADxMADpmAAAAEBAQEBAQurq6KljWPDL/gCDwwADA0BR00hokpjweflIAWGQAAIgAAHRoAHKeEBAQEBAQEBAQ////XqD/jIL/xHD//1z//2i8/3J8/JZK2a0AmMYuTtROOsiaLr7cWFhYEBAQEBAQ////xtj/1Mr/8MT//7z//8Tw/8rU/9i+/+am6uyyxvTGuuzqtub/wsLCEBAQEBAQ";
module$core$src$palettes$asq_real_b.default = $jscompDefaultExport$$module$core$src$palettes$asq_real_b;
// Input 26
var module$core$src$palettes$nestopia_rgb = {}, $jscompDefaultExport$$module$core$src$palettes$nestopia_rgb = "bW1tACSSAADbbUnbkgBttgBttiQAkkkAbUkAJEkAAG0kAJIAAElJAAAAAAAAAAAAtra2AG3bAEn/kgD/tgD//wCS/wAA220Akm0AJJIAAJIAALZtAJKSJCQkAAAAAAAA////bbb/kpL/223//wD//23//5IA/7YA29sAbdsAAP8ASf/bAP//SUlJAAAAAAAA////ttv/27b//7b//5L//7a2/9uS//9J//9ttv9Jkv9tSf/bktv/kpKSAAAAAAAA";
module$core$src$palettes$nestopia_rgb.default = $jscompDefaultExport$$module$core$src$palettes$nestopia_rgb;
// Input 27
var module$core$src$palettes$fceux = {}, $jscompDefaultExport$$module$core$src$palettes$fceux = "dHR0JBiMAACoRACcjAB0qAAQpAAAfAgAQCwAAEQAAFAAADwUGDxcAAAAAAAAAAAAvLy8AHDsIDjsgADwvAC85ABY2CgAyEwMiHAAAJQAAKgAAJA4AICIAAAAAAAAAAAA/Pz8PLz8XJT8zIj89Hj8/HS0/HRg/Jg48Lw8gNAQTNxIWPiYAOjYeHh4AAAAAAAA/Pz8qOT8xNT81Mj8/MT8/MTY/Lyw/Nio/OSg4PygqPC8sPzMnPzwxMTEAAAAAAAA";
module$core$src$palettes$fceux.default = $jscompDefaultExport$$module$core$src$palettes$fceux;
// Input 28
var module$core$src$palettes$nestopia_yuv = {}, $jscompDefaultExport$$module$core$src$palettes$nestopia_yuv = "ZmZmACqIFBKnOwCkXAB+bgBAbAcAVh0AMzUADEgAAFIAAE8IAEBNAAAAAAAAAAAAra2tFV/ZQkD/dSf+oBrMtx57tTEgmU4Aa20AOIcADZMAAI8yAHyNAAAAAAAAAAAA////ZLD/kpD/xnb/8mr//27M/4Fw6p4ivL4AiNgAXOQwReCCSM3eT09PAAAAAAAA////wN//09L/6Mj/+sL//8Tq/8zF99il5OWUz++WvfSrs/PMtevyuLi4AAAAAAAA";
module$core$src$palettes$nestopia_yuv.default = $jscompDefaultExport$$module$core$src$palettes$nestopia_yuv;
// Input 29
var module$core$src$utils$convert = {};
function objectToString$$module$core$src$utils$convert(a) {
  return JSON.stringify(a);
}
function stringToObject$$module$core$src$utils$convert(a) {
  return JSON.parse(a);
}
function dataToString$$module$core$src$utils$convert(a) {
  return String.fromCharCode.apply(null, a);
}
function stringToData$$module$core$src$utils$convert(a, b) {
  null == b && (b = new Uint8Array(a.length));
  for (var c = Math.min(a.length, b.length), d = 0;d < c;d++) {
    b[d] = a.charCodeAt(d);
  }
  return b;
}
function dataToBase64$$module$core$src$utils$convert(a) {
  return encodeBase64$$module$core$src$utils$convert(dataToString$$module$core$src$utils$convert(a));
}
function base64ToData$$module$core$src$utils$convert(a, b) {
  return stringToData$$module$core$src$utils$convert(decodeBase64$$module$core$src$utils$convert(a), b);
}
function encodeBase64$$module$core$src$utils$convert(a) {
  if ("function" === typeof btoa) {
    return btoa(a);
  }
  if ("function" === typeof Buffer) {
    return (new Buffer(a, "binary")).toString("base64");
  }
  throw Error("Unsupported operation: encodeBase64");
}
function decodeBase64$$module$core$src$utils$convert(a) {
  if ("function" === typeof atob) {
    return atob(a);
  }
  if ("function" === typeof Buffer) {
    return (new Buffer(a, "base64")).toString("binary");
  }
  throw Error("Unsupported operation: decodeBase64");
}
module$core$src$utils$convert.objectToString = objectToString$$module$core$src$utils$convert;
module$core$src$utils$convert.stringToObject = stringToObject$$module$core$src$utils$convert;
module$core$src$utils$convert.dataToString = dataToString$$module$core$src$utils$convert;
module$core$src$utils$convert.stringToData = stringToData$$module$core$src$utils$convert;
module$core$src$utils$convert.dataToBase64 = dataToBase64$$module$core$src$utils$convert;
module$core$src$utils$convert.base64ToData = base64ToData$$module$core$src$utils$convert;
module$core$src$utils$convert.encodeBase64 = encodeBase64$$module$core$src$utils$convert;
module$core$src$utils$convert.decodeBase64 = decodeBase64$$module$core$src$utils$convert;
// Input 30
var module$core$src$palettes$fceu_15 = {}, $jscompDefaultExport$$module$core$src$palettes$fceu_15 = "YGBgAABwFACALABuSgBObAAYWgMCURgANCQAADQAADIAADQgACx4AAAAAgICAgICxMTEAFjeMB/8fxTgqACwwAZcwCsOpkAQb2EAMIAAAHwAAHw8AG6EFBQUBAQEBAQE8PDwTKr/b3P1sHD/2lr/8GDA+INt0JAw1MAwZtAAJt0aLshmNMK+VFRUBgYGBgYG////ttr/yMr/2sL/8L7//Lzu/9C0/9qQ7OyS3PaeuP+iruq+nu/vvr6+CAgICAgI";
module$core$src$palettes$fceu_15.default = $jscompDefaultExport$$module$core$src$palettes$fceu_15;
// Input 31
var module$core$src$palettes$asq_real_a = {}, $jscompDefaultExport$$module$core$src$palettes$asq_real_a = "YGBgACF7AACcMQCLWQBvbwAxZAAATxEALxkAJykAAEQAADk3ADlPAAAADAwMDAwMrq6uEFbOGyz/YCDsqQC/yhZUyhoInjoEZ1EAQ2EAAHwAAHFTAHGHDAwMDAwMDAwM////RJ7+XGz/mWb/12D//2KV/2RT9JQwwqwAkMQUUtIoIMaSGLrSTExMDAwMDAwM////o8z/pLT/wbb/4Lf//8DF/7yr/9Cf/OCQ4uqYyvKgoOrioOL6tra2DAwMDAwM";
module$core$src$palettes$asq_real_a.default = $jscompDefaultExport$$module$core$src$palettes$asq_real_a;
// Input 32
var module$core$src$palettes$fceu_13 = {}, $jscompDefaultExport$$module$core$src$palettes$fceu_13 = "YGBgAAB4FACALABuSgBObAAYWgMCURgANCQAADQAADIAADQgACx4AAAAAgICAgICxMTEAFjeMB/8fxTgqACwwAZcwCsOpkAQb2EAMIAAAHwAAHw8AG6EFBQUBAQEBAQE8PDwTKr/b3P1sHD/2lr/8GDA+INt0JAw1MAwZtAAJt0aLshmNMK+VFRUBgYGBgYG////ttr/yMr/2sL/8L7//Lzu/9C0/9qQ7OyS3PaeuP+iruq+nu/vvr6+CAgICAgI";
module$core$src$palettes$fceu_13.default = $jscompDefaultExport$$module$core$src$palettes$fceu_13;
// Input 33
var module$core$src$palettes$bmf_fin_r3 = {}, $jscompDefaultExport$$module$core$src$palettes$bmf_fin_r3 = "aGhoABKZGgiqUQKafgBpjgAcfgMBURgAHzcAAU4AAFoAAFAcAEBhAAAAAAAAAAAAubm5DFzXUDXwiRnguwyzzgxhwCsOlU0BYW8AH4sAAZgMAJNLAIGbAAAAAAAAAAAA////Y7T/m5H/03f/72r/+WjA+X1s7Zstvb0WfNocS+hHNeWRP9ndYGBgAAAAAAAA////rOf/1c3/7br/+LD//rDs/b21+dKO6Ot8u/OCmfeiivXQkvTxvr6+AAAAAAAA";
module$core$src$palettes$bmf_fin_r3.default = $jscompDefaultExport$$module$core$src$palettes$bmf_fin_r3;
// Input 34
var module$core$src$factories$PaletteFactory = {}, FALLBACK$$module$core$src$factories$PaletteFactory = "fceux", palettes$$module$core$src$factories$PaletteFactory = {"asq-real-a":module$core$src$palettes$asq_real_a.default, "asq-real-b":module$core$src$palettes$asq_real_b.default, "bmf-fin-r2":module$core$src$palettes$bmf_fin_r2.default, "bmf-fin-r3":module$core$src$palettes$bmf_fin_r3.default, "fceu-13":module$core$src$palettes$fceu_13.default, "fceu-15":module$core$src$palettes$fceu_15.default,
fceux:module$core$src$palettes$fceux.default, "nestopia-rgb":module$core$src$palettes$nestopia_rgb.default, "nestopia-yuv":module$core$src$palettes$nestopia_yuv.default}, PaletteFactory$$module$core$src$factories$PaletteFactory = function() {
};
PaletteFactory$$module$core$src$factories$PaletteFactory.prototype.createPalette = function(a) {
  var b = palettes$$module$core$src$factories$PaletteFactory[a];
  if (b) {
    return module$core$src$utils$logger.default.info('Creating "' + a + '" palette'), this.readPalette(b);
  }
  module$core$src$utils$logger.default.warn('Unsupported palette "' + a + '", using "' + FALLBACK$$module$core$src$factories$PaletteFactory + '" palette as fallback');
  return this.readPalette(palettes$$module$core$src$factories$PaletteFactory[FALLBACK$$module$core$src$factories$PaletteFactory]);
};
PaletteFactory$$module$core$src$factories$PaletteFactory.prototype.readPalette = function(a) {
  a = module$core$src$utils$convert.base64ToData(a);
  for (var b = new Uint32Array(64), c = 0;c < b.length;c++) {
    b[c] = a[3 * c] | a[3 * c + 1] << 8 | a[3 * c + 2] << 16;
  }
  return b;
};
module$core$src$factories$PaletteFactory.default = PaletteFactory$$module$core$src$factories$PaletteFactory;
// Input 35
for (var module$core$src$units$PPU = {}, F_RENDER$$module$core$src$units$PPU = 2, F_FETCH_NT$$module$core$src$units$PPU = 4, F_FETCH_AT$$module$core$src$units$PPU = 8, F_FETCH_BGL$$module$core$src$units$PPU = 16, F_FETCH_BGH$$module$core$src$units$PPU = 32, F_FETCH_SPL$$module$core$src$units$PPU = 64, F_FETCH_SPH$$module$core$src$units$PPU = 128, F_COPY_BG$$module$core$src$units$PPU = 256, F_SHIFT_BG$$module$core$src$units$PPU = 512, F_EVAL_SP$$module$core$src$units$PPU = 1024, F_CLIP_LEFT$$module$core$src$units$PPU =
2048, F_CLIP_TB$$module$core$src$units$PPU = 4096, F_INC_CX$$module$core$src$units$PPU = 8192, F_INC_FY$$module$core$src$units$PPU = 16384, F_COPY_HS$$module$core$src$units$PPU = 32768, F_COPY_VS$$module$core$src$units$PPU = 65536, F_VB_START$$module$core$src$units$PPU = 131072, F_VB_START2$$module$core$src$units$PPU = 262144, F_VB_END$$module$core$src$units$PPU = 524288, F_SKIP$$module$core$src$units$PPU = 1048576, cycleFlags$$module$core$src$units$PPU = module$core$src$utils$system.newUintArray(341),
i = 0;i < cycleFlags$$module$core$src$units$PPU.length;i++) {
  1 <= i && 256 >= i && (cycleFlags$$module$core$src$units$PPU[i] |= F_RENDER$$module$core$src$units$PPU, cycleFlags$$module$core$src$units$PPU[i] |= F_CLIP_TB$$module$core$src$units$PPU);
  if (1 === (i & 7) || 339 === i) {
    cycleFlags$$module$core$src$units$PPU[i] |= F_FETCH_NT$$module$core$src$units$PPU;
  }
  3 === (i & 7) && 339 !== i && (cycleFlags$$module$core$src$units$PPU[i] |= F_FETCH_AT$$module$core$src$units$PPU);
  5 === (i & 7) && (cycleFlags$$module$core$src$units$PPU[i] |= 256 >= i || 321 <= i ? F_FETCH_BGL$$module$core$src$units$PPU : F_FETCH_SPL$$module$core$src$units$PPU);
  7 === (i & 7) && (cycleFlags$$module$core$src$units$PPU[i] |= 256 >= i || 321 <= i ? F_FETCH_BGH$$module$core$src$units$PPU : F_FETCH_SPH$$module$core$src$units$PPU);
  if (0 === (i & 7) && 8 <= i && 256 >= i || 328 === i || 336 === i) {
    cycleFlags$$module$core$src$units$PPU[i] |= F_INC_CX$$module$core$src$units$PPU;
  }
  if (1 === (i & 7) && 9 <= i && 257 >= i || 329 === i || 337 === i) {
    cycleFlags$$module$core$src$units$PPU[i] |= F_COPY_BG$$module$core$src$units$PPU;
  }
  if (1 <= i && 256 >= i || 321 <= i && 336 >= i) {
    cycleFlags$$module$core$src$units$PPU[i] |= F_SHIFT_BG$$module$core$src$units$PPU;
  }
  280 <= i && 304 >= i && (cycleFlags$$module$core$src$units$PPU[i] |= F_COPY_VS$$module$core$src$units$PPU);
  1 <= i && 8 >= i && (cycleFlags$$module$core$src$units$PPU[i] |= F_CLIP_LEFT$$module$core$src$units$PPU);
  1 <= i && 3 >= i && (cycleFlags$$module$core$src$units$PPU[i] |= F_VB_START2$$module$core$src$units$PPU);
}
cycleFlags$$module$core$src$units$PPU[1] |= F_VB_START$$module$core$src$units$PPU;
cycleFlags$$module$core$src$units$PPU[1] |= F_VB_END$$module$core$src$units$PPU;
cycleFlags$$module$core$src$units$PPU[65] |= F_EVAL_SP$$module$core$src$units$PPU;
cycleFlags$$module$core$src$units$PPU[256] |= F_INC_FY$$module$core$src$units$PPU;
cycleFlags$$module$core$src$units$PPU[257] |= F_COPY_HS$$module$core$src$units$PPU;
cycleFlags$$module$core$src$units$PPU[338] |= F_SKIP$$module$core$src$units$PPU;
for (var scanlineFlags$$module$core$src$units$PPU = module$core$src$utils$system.newUintArray(262), i$16 = 0;i$16 < scanlineFlags$$module$core$src$units$PPU.length;i$16++) {
  239 >= i$16 && (scanlineFlags$$module$core$src$units$PPU[i$16] |= F_RENDER$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_SHIFT_BG$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_CLIP_LEFT$$module$core$src$units$PPU);
  if (239 >= i$16 || 261 === i$16) {
    scanlineFlags$$module$core$src$units$PPU[i$16] |= F_FETCH_NT$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_FETCH_AT$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_FETCH_BGL$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_FETCH_BGH$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_FETCH_SPL$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |=
    F_FETCH_SPH$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_COPY_BG$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_EVAL_SP$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_INC_CX$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_INC_FY$$module$core$src$units$PPU, scanlineFlags$$module$core$src$units$PPU[i$16] |= F_COPY_HS$$module$core$src$units$PPU;
  }
  if (7 >= i$16 || 232 <= i$16 && 239 >= i$16) {
    scanlineFlags$$module$core$src$units$PPU[i$16] |= F_CLIP_TB$$module$core$src$units$PPU;
  }
}
scanlineFlags$$module$core$src$units$PPU[241] |= F_VB_START$$module$core$src$units$PPU;
scanlineFlags$$module$core$src$units$PPU[241] |= F_VB_START2$$module$core$src$units$PPU;
scanlineFlags$$module$core$src$units$PPU[261] |= F_COPY_VS$$module$core$src$units$PPU;
scanlineFlags$$module$core$src$units$PPU[261] |= F_VB_END$$module$core$src$units$PPU;
scanlineFlags$$module$core$src$units$PPU[261] |= F_SKIP$$module$core$src$units$PPU;
var Sprite$$module$core$src$units$PPU = function() {
  this.x = 0;
  this.horizontalFlip = this.zeroSprite = !1;
  this.paletteNumber = 0;
  this.inFront = !1;
  this.patternRow1 = this.patternRow0 = this.patternRowAddress = 0;
}, PPU$$module$core$src$units$PPU = function() {
  this.dependencies = ["cpu", "ppuMemory"];
  this.colorEmphasis = 0;
};
PPU$$module$core$src$units$PPU.prototype.inject = function(a, b) {
  this.cpu = a;
  this.ppuMemory = b;
};
PPU$$module$core$src$units$PPU.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting PPU");
  this.resetOAM();
  this.resetRegisters();
  this.resetVariables();
};
PPU$$module$core$src$units$PPU.prototype.resetOAM = function() {
  this.primaryOAM = module$core$src$utils$system.newByteArray(256);
  this.secondaryOAM = Array(8);
  for (var a = 0;a < this.secondaryOAM.length;a++) {
    this.secondaryOAM[a] = new Sprite$$module$core$src$units$PPU;
  }
};
PPU$$module$core$src$units$PPU.prototype.resetRegisters = function() {
  this.setControl(0);
  this.setMask(0);
  this.setStatus(0);
  this.paletteLatchNext1 = this.paletteLatchNext0 = this.patternBufferNext1 = this.patternBufferNext0 = this.paletteLatch1 = this.paletteLatch0 = this.paletteBuffer1 = this.paletteBuffer0 = this.patternBuffer1 = this.patternBuffer0 = this.fineXScroll = this.writeToogle = this.vramReadBuffer = this.vramAddress = this.tempAddress = this.oamAddress = 0;
};
PPU$$module$core$src$units$PPU.prototype.resetVariables = function() {
  this.scanline = 261;
  this.csFlags = this.cycle = 0;
  this.nmiSuppressed = this.vblankSuppressed = !1;
  this.nmiDelay = 0;
  this.oddFrame = !1;
  this.spriteNumber = this.spriteCount = 0;
  this.spriteCache = Array(261);
  this.spritePixelCache = module$core$src$utils$system.newByteArray(261);
};
PPU$$module$core$src$units$PPU.prototype.setRegionParams = function(a) {
  this.clipTopBottom = a.ppuClipTopBottom;
};
PPU$$module$core$src$units$PPU.prototype.setPalette = function(a) {
  this.createPaletteVariants(a);
  this.updatePalette();
};
PPU$$module$core$src$units$PPU.prototype.createPaletteVariants = function(a) {
  this.paletteVariants = Array(8);
  for (var b = 0;b < this.paletteVariants.length;b++) {
    this.paletteVariants[b] = this.createPaletteVariant(a, b & 6 ? .75 : 1, b & 5 ? .75 : 1, b & 3 ? .75 : 1);
  }
};
PPU$$module$core$src$units$PPU.prototype.createPaletteVariant = function(a, b, c, d) {
  for (var e = module$core$src$utils$system.newUintArray(a.length), f = 0;f < a.length;f++) {
    var g = a[f];
    e[f] = module$core$src$utils$colors.packColor(Math.floor(b * (g & 255)), Math.floor(c * (g >>> 8 & 255)), Math.floor(d * (g >>> 16 & 255)));
  }
  return e;
};
PPU$$module$core$src$units$PPU.prototype.updatePalette = function() {
  this.palette = this.paletteVariants[this.colorEmphasis];
};
PPU$$module$core$src$units$PPU.prototype.writeControl = function(a) {
  var b = this.nmiEnabled;
  this.setControl(a);
  this.tempAddress = this.tempAddress & 62463 | (a & 3) << 10;
  !this.vblankFlag || b || !this.nmiEnabled || this.csFlags & F_VB_END$$module$core$src$units$PPU || (this.nmiDelay = 15);
};
PPU$$module$core$src$units$PPU.prototype.setControl = function(a) {
  this.bigAddressIncrement = a >>> 2 & 1;
  this.spPatternTableAddress = a << 9 & 4096;
  this.bgPatternTableAddress = a << 8 & 4096;
  this.bigSprites = a >>> 5 & 1;
  this.nmiEnabled = a >>> 7;
};
PPU$$module$core$src$units$PPU.prototype.writeMask = function(a) {
  this.setMask(a);
  this.updatePalette();
};
PPU$$module$core$src$units$PPU.prototype.setMask = function(a) {
  this.monochromeMode = a & 1;
  this.backgroundClipping = !(a >>> 1 & 1);
  this.spriteClipping = !(a >>> 2 & 1);
  this.backgroundVisible = a >>> 3 & 1;
  this.spritesVisible = a >>> 4 & 1;
  this.colorEmphasis = a >>> 5 & 7;
};
PPU$$module$core$src$units$PPU.prototype.readStatus = function() {
  var a = this.getStatus();
  this.writeToogle = this.vblankFlag = 0;
  this.csFlags & F_VB_START$$module$core$src$units$PPU && (this.vblankSuppressed = !0);
  this.csFlags & F_VB_START2$$module$core$src$units$PPU && (this.nmiSuppressed = !0);
  return a;
};
PPU$$module$core$src$units$PPU.prototype.getStatus = function() {
  return this.spriteOverflow << 5 | this.spriteZeroHit << 6 | this.vblankFlag << 7;
};
PPU$$module$core$src$units$PPU.prototype.setStatus = function(a) {
  this.spriteOverflow = a >>> 5 & 1;
  this.spriteZeroHit = a >>> 6 & 1;
  this.vblankFlag = a >>> 7;
};
PPU$$module$core$src$units$PPU.prototype.writeOAMAddress = function(a) {
  this.oamAddress = a;
};
PPU$$module$core$src$units$PPU.prototype.readOAMData = function() {
  var a = this.primaryOAM[this.oamAddress];
  2 === (this.oamAddress & 3) && (a &= 227);
  return a;
};
PPU$$module$core$src$units$PPU.prototype.writeOAMData = function(a) {
  this.isRenderingActive() || (this.primaryOAM[this.oamAddress] = a);
  this.oamAddress = this.oamAddress + 1 & 255;
};
PPU$$module$core$src$units$PPU.prototype.writeAddress = function(a) {
  (this.writeToogle = !this.writeToogle) ? this.tempAddress = this.tempAddress & 255 | (a & 63) << 8 : this.vramAddress = this.tempAddress = this.tempAddress & 65280 | a;
};
PPU$$module$core$src$units$PPU.prototype.readData = function() {
  if (16128 === (this.vramAddress & 16128)) {
    var a = this.ppuMemory.read(this.vramAddress);
    this.vramReadBuffer = this.ppuMemory.read(this.vramAddress & 12287);
  } else {
    a = this.vramReadBuffer, this.vramReadBuffer = this.ppuMemory.read(this.vramAddress);
  }
  this.incrementAddress();
  return a;
};
PPU$$module$core$src$units$PPU.prototype.writeData = function(a) {
  this.isRenderingActive() || this.ppuMemory.write(this.vramAddress, a);
  this.incrementAddress();
};
PPU$$module$core$src$units$PPU.prototype.incrementAddress = function() {
  this.vramAddress = this.vramAddress + (this.bigAddressIncrement ? 32 : 1) & 65535;
};
PPU$$module$core$src$units$PPU.prototype.writeScroll = function(a) {
  (this.writeToogle = !this.writeToogle) ? (this.fineXScroll = a & 7, this.tempAddress = this.tempAddress & 65504 | a >>> 3) : this.tempAddress = this.tempAddress & 3103 | (a & 248) << 2 | (a & 7) << 12;
};
PPU$$module$core$src$units$PPU.prototype.updateScrolling = function() {
  this.csFlags & F_INC_CX$$module$core$src$units$PPU && this.incrementCoarseXScroll();
  this.csFlags & F_INC_FY$$module$core$src$units$PPU && this.incrementFineYScroll();
  this.csFlags & F_COPY_HS$$module$core$src$units$PPU && this.copyHorizontalScrollBits();
  this.csFlags & F_COPY_VS$$module$core$src$units$PPU && this.copyVerticalScrollBits();
};
PPU$$module$core$src$units$PPU.prototype.copyHorizontalScrollBits = function() {
  this.vramAddress = this.vramAddress & 31712 | this.tempAddress & 1055;
};
PPU$$module$core$src$units$PPU.prototype.copyVerticalScrollBits = function() {
  this.vramAddress = this.vramAddress & 1055 | this.tempAddress & 31712;
};
PPU$$module$core$src$units$PPU.prototype.incrementCoarseXScroll = function() {
  31 === (this.vramAddress & 31) ? (this.vramAddress &= 65504, this.vramAddress ^= 1024) : this.vramAddress += 1;
};
PPU$$module$core$src$units$PPU.prototype.incrementFineYScroll = function() {
  28672 === (this.vramAddress & 28672) ? (this.vramAddress &= 4095, this.incrementCoarseYScroll()) : this.vramAddress += 4096;
};
PPU$$module$core$src$units$PPU.prototype.incrementCoarseYScroll = function() {
  992 === (this.vramAddress & 992) ? this.vramAddress &= 64543 : 928 === (this.vramAddress & 992) ? (this.vramAddress &= 64543, this.vramAddress ^= 2048) : this.vramAddress += 32;
};
PPU$$module$core$src$units$PPU.prototype.setFrameBuffer = function(a) {
  this.frameBuffer = a;
  this.framePosition = 0;
  this.frameAvailable = !1;
};
PPU$$module$core$src$units$PPU.prototype.isFrameAvailable = function() {
  return this.frameAvailable;
};
PPU$$module$core$src$units$PPU.prototype.isBrightFramePixel = function(a, b) {
  if (b < this.scanline - 5 || b >= this.scanline) {
    return !1;
  }
  var c = $jscomp.makeIterator(module$core$src$utils$colors.unpackColor(this.frameBuffer[b * module$core$src$common$constants.VIDEO_WIDTH + a])), d = c.next().value, e = c.next().value, c = c.next().value;
  return 18 < d || 18 < e || 18 < c;
};
PPU$$module$core$src$units$PPU.prototype.setFramePixel = function(a) {
  this.frameBuffer[this.framePosition++] = this.palette[a & 63];
};
PPU$$module$core$src$units$PPU.prototype.setFramePixelOnPosition = function(a, b, c) {
  this.frameBuffer[b * module$core$src$common$constants.VIDEO_WIDTH + a] = this.palette[c & 63];
};
PPU$$module$core$src$units$PPU.prototype.clearFramePixel = function() {
  this.frameBuffer[this.framePosition++] = module$core$src$utils$colors.BLACK_COLOR;
};
PPU$$module$core$src$units$PPU.prototype.updateVBlank = function() {
  this.nmiDelay && (12 < this.nmiDelay && !this.nmiEnabled ? this.nmiDelay = 0 : --this.nmiDelay || this.nmiSuppressed || this.cpu.activateInterrupt(module$core$src$common$constants.NMI));
  this.csFlags & F_VB_START$$module$core$src$units$PPU ? this.enterVBlank() : this.csFlags & F_VB_END$$module$core$src$units$PPU && this.leaveVBlank();
};
PPU$$module$core$src$units$PPU.prototype.enterVBlank = function() {
  this.vblankActive = !0;
  this.vblankSuppressed || (this.vblankFlag = 1);
  this.nmiDelay = 14;
  this.frameAvailable = !0;
};
PPU$$module$core$src$units$PPU.prototype.leaveVBlank = function() {
  this.vblankActive = !1;
  this.vblankFlag = 0;
  this.nmiSuppressed = this.vblankSuppressed = !1;
  this.spriteZeroHit = 0;
};
PPU$$module$core$src$units$PPU.prototype.incrementCycle = function() {
  this.csFlags & F_SKIP$$module$core$src$units$PPU && this.oddFrame && this.isRenderingEnabled() && this.cycle++;
  this.cycle++;
  340 < this.cycle && this.incrementScanline();
  this.csFlags = cycleFlags$$module$core$src$units$PPU[this.cycle] & scanlineFlags$$module$core$src$units$PPU[this.scanline];
};
PPU$$module$core$src$units$PPU.prototype.incrementScanline = function() {
  this.cycle = 0;
  this.scanline++;
  261 < this.scanline && this.incrementFrame();
  239 >= this.scanline && this.prerenderSprites();
};
PPU$$module$core$src$units$PPU.prototype.incrementFrame = function() {
  this.scanline = 0;
  this.oddFrame = !this.oddFrame;
  this.framePosition = 0;
};
PPU$$module$core$src$units$PPU.prototype.tick = function() {
  this.isRenderingEnabled() ? (this.fetchData(), this.doRendering(), this.updateScrolling()) : (this.skipRendering(), this.addressBus = this.vramAddress);
  this.updateVBlank();
  this.incrementCycle();
  this.mapper.tick();
};
PPU$$module$core$src$units$PPU.prototype.fetchData = function() {
  this.csFlags & F_FETCH_NT$$module$core$src$units$PPU ? this.fetchNametable() : this.csFlags & F_FETCH_AT$$module$core$src$units$PPU ? this.fetchAttribute() : this.csFlags & F_FETCH_BGL$$module$core$src$units$PPU ? this.fetchBackgroundLow() : this.csFlags & F_FETCH_BGH$$module$core$src$units$PPU ? this.fetchBackgroundHigh() : this.csFlags & F_FETCH_SPL$$module$core$src$units$PPU ? this.fetchSpriteLow() : this.csFlags & F_FETCH_SPH$$module$core$src$units$PPU && this.fetchSpriteHigh();
};
PPU$$module$core$src$units$PPU.prototype.doRendering = function() {
  this.csFlags & F_EVAL_SP$$module$core$src$units$PPU && this.evaluateSprites();
  this.csFlags & F_COPY_BG$$module$core$src$units$PPU && this.copyBackground();
  this.csFlags & F_RENDER$$module$core$src$units$PPU && this.updateFramePixel();
  this.csFlags & F_SHIFT_BG$$module$core$src$units$PPU && this.shiftBackground();
};
PPU$$module$core$src$units$PPU.prototype.skipRendering = function() {
  this.csFlags & F_RENDER$$module$core$src$units$PPU && this.clearFramePixel();
};
PPU$$module$core$src$units$PPU.prototype.isRenderingActive = function() {
  return !this.vblankActive && this.isRenderingEnabled();
};
PPU$$module$core$src$units$PPU.prototype.isRenderingEnabled = function() {
  return this.spritesVisible || this.backgroundVisible;
};
PPU$$module$core$src$units$PPU.prototype.updateFramePixel = function() {
  if (this.clipTopBottom && this.csFlags & F_CLIP_TB$$module$core$src$units$PPU) {
    this.clearFramePixel();
  } else {
    var a = this.renderFramePixel(), a = this.ppuMemory.readPalette(a);
    this.setFramePixel(a);
  }
};
PPU$$module$core$src$units$PPU.prototype.renderFramePixel = function() {
  var a = this.renderBackgroundPixel(), b = this.renderSpritePixel();
  if (a & 3) {
    if (b & 3) {
      var c = this.getRenderedSprite();
      this.spriteZeroHit |= c.zeroSprite;
      return c.inFront ? b : a;
    }
    return a;
  }
  return b & 3 ? b : 0;
};
PPU$$module$core$src$units$PPU.prototype.fetchNametable = function() {
  this.addressBus = 8192 | this.vramAddress & 4095;
  var a = this.ppuMemory.readNameAttr(this.addressBus);
  this.patternRowAddress = this.bgPatternTableAddress + (a << 4) + (this.vramAddress >>> 12 & 7);
};
PPU$$module$core$src$units$PPU.prototype.fetchAttribute = function() {
  this.addressBus = (9152 | this.vramAddress & 3072) + (this.vramAddress >>> 4 & 56 | this.vramAddress >>> 2 & 7);
  var a = this.ppuMemory.readNameAttr(this.addressBus) >>> (this.vramAddress >>> 4 & 4 | this.vramAddress & 2) & 3;
  this.paletteLatchNext0 = a & 1;
  this.paletteLatchNext1 = a >>> 1 & 1;
};
PPU$$module$core$src$units$PPU.prototype.fetchBackgroundLow = function() {
  this.addressBus = this.patternRowAddress;
  this.patternBufferNext0 = this.ppuMemory.readPattern(this.addressBus);
};
PPU$$module$core$src$units$PPU.prototype.fetchBackgroundHigh = function() {
  this.addressBus = this.patternRowAddress + 8;
  this.patternBufferNext1 = this.ppuMemory.readPattern(this.addressBus);
};
PPU$$module$core$src$units$PPU.prototype.copyBackground = function() {
  this.patternBuffer0 |= this.patternBufferNext0;
  this.patternBuffer1 |= this.patternBufferNext1;
  this.paletteLatch0 = this.paletteLatchNext0;
  this.paletteLatch1 = this.paletteLatchNext1;
};
PPU$$module$core$src$units$PPU.prototype.shiftBackground = function() {
  this.patternBuffer0 <<= 1;
  this.patternBuffer1 <<= 1;
  this.paletteBuffer0 = this.paletteBuffer0 << 1 | this.paletteLatch0;
  this.paletteBuffer1 = this.paletteBuffer1 << 1 | this.paletteLatch1;
};
PPU$$module$core$src$units$PPU.prototype.renderBackgroundPixel = function() {
  return this.isBackgroundPixelVisible() ? this.paletteBuffer1 << this.fineXScroll >> 4 & 8 | this.paletteBuffer0 << this.fineXScroll >> 5 & 4 | this.patternBuffer1 << this.fineXScroll >> 14 & 2 | this.patternBuffer0 << this.fineXScroll >> 15 & 1 : 0;
};
PPU$$module$core$src$units$PPU.prototype.isBackgroundPixelVisible = function() {
  return this.backgroundVisible && !(this.backgroundClipping && this.csFlags & F_CLIP_LEFT$$module$core$src$units$PPU);
};
PPU$$module$core$src$units$PPU.prototype.evaluateSprites = function() {
  this.spriteOverflow = this.spriteCount = this.spriteNumber = 0;
  for (var a = this.bigSprites ? 16 : 8, b = this.scanline, c = Math.max(0, b - a), d = 0;d < this.primaryOAM.length;d += 4) {
    var e = this.primaryOAM[d];
    if (!(e <= c || e > b)) {
      var f = this.spPatternTableAddress, g = this.primaryOAM[d + 1];
      this.bigSprites && (f = (g & 1) << 12, g &= 254);
      var h = this.primaryOAM[d + 2], e = b - e;
      h & 128 && (e = a - e - 1);
      8 <= e && (e -= 8, g++);
      var k = this.secondaryOAM[this.spriteCount];
      k.x = this.primaryOAM[d + 3];
      k.zeroSprite = 0 === d;
      k.horizontalFlip = h & 64;
      k.paletteNumber = 16 | (h & 3) << 2;
      k.inFront = 0 === (h & 32);
      k.patternRowAddress = f + (g << 4) + e;
      if (8 <= ++this.spriteCount) {
        this.spriteOverflow = 1;
        break;
      }
    }
  }
};
PPU$$module$core$src$units$PPU.prototype.fetchSpriteLow = function() {
  if (this.spriteNumber < this.spriteCount) {
    var a = this.secondaryOAM[this.spriteNumber];
    this.addressBus = a.patternRowAddress;
    a.patternRow0 = this.ppuMemory.readPattern(this.addressBus);
  } else {
    this.addressBus = this.spPatternTableAddress | 4080;
  }
};
PPU$$module$core$src$units$PPU.prototype.fetchSpriteHigh = function() {
  if (this.spriteNumber < this.spriteCount) {
    var a = this.secondaryOAM[this.spriteNumber++];
    this.addressBus = a.patternRowAddress + 8;
    a.patternRow1 = this.ppuMemory.readPattern(this.addressBus);
  } else {
    this.addressBus = this.spPatternTableAddress | 4080;
  }
};
PPU$$module$core$src$units$PPU.prototype.prerenderSprites = function() {
  for (var a = 0;a < this.spriteCache.length;a++) {
    this.spriteCache[a] = null, this.spritePixelCache[a] = 0;
  }
  for (a = 0;a < this.spriteCount;a++) {
    for (var b = this.secondaryOAM[a], c = 0;8 > c;c++) {
      var d = b.x + c + 1;
      if (d > module$core$src$common$constants.VIDEO_WIDTH) {
        break;
      }
      if (!(1 > d || this.spriteCache[d])) {
        var e = b.horizontalFlip ? c : c ^ 7;
        if (e = (b.patternRow1 >>> e & 1) << 1 | b.patternRow0 >>> e & 1) {
          this.spriteCache[d] = b, this.spritePixelCache[d] = b.paletteNumber | e;
        }
      }
    }
  }
};
PPU$$module$core$src$units$PPU.prototype.renderSpritePixel = function() {
  return this.isSpritePixelVisible() ? this.spritePixelCache[this.cycle] : 0;
};
PPU$$module$core$src$units$PPU.prototype.isSpritePixelVisible = function() {
  return this.spritesVisible && !(this.spriteClipping && this.csFlags & F_CLIP_LEFT$$module$core$src$units$PPU);
};
PPU$$module$core$src$units$PPU.prototype.getRenderedSprite = function() {
  return this.spriteCache[this.cycle];
};
PPU$$module$core$src$units$PPU.prototype.renderDebugFrame = function() {
  this.renderPatterns();
  this.renderPalettes();
};
PPU$$module$core$src$units$PPU.prototype.renderPatterns = function() {
  for (var a = 0;16 > a;a++) {
    for (var b = a << 3, c = 0;32 > c;c++) {
      this.renderPatternTile(c << 3, b, ((c & 16) << 4 | a << 4 | c & 15) << 4);
    }
  }
};
PPU$$module$core$src$units$PPU.prototype.renderPatternTile = function(a, b, c) {
  for (var d = 0;8 > d;d++) {
    for (var e = b + d, f = this.ppuMemory.readPattern(c + d), g = this.ppuMemory.readPattern(c + d + 8), h = 0;8 > h;h++) {
      var k = a + h, l = h ^ 7, l = this.ppuMemory.readPalette((g >> l & 1) << 1 | f >> l & 1);
      this.setFramePixelOnPosition(k, e, l);
    }
  }
};
PPU$$module$core$src$units$PPU.prototype.renderPalettes = function() {
  for (var a = 0;4 > a;a++) {
    for (var b = 128 + 28 * a, c = 0;8 > c;c++) {
      var d = c << 5, e = this.ppuMemory.readPalette(a << 3 | c);
      this.renderPaletteTile(d, b, e);
    }
  }
};
PPU$$module$core$src$units$PPU.prototype.renderPaletteTile = function(a, b, c) {
  for (var d = b;d < b + 28;d++) {
    for (var e = a;e < a + 32;e++) {
      this.setFramePixelOnPosition(e, d, c);
    }
  }
};
PPU$$module$core$src$units$PPU.prototype.connectMapper = function(a) {
  this.mapper = a;
};
module$core$src$units$PPU.default = PPU$$module$core$src$units$PPU;
// Input 36
var module$core$src$units$CPUMemory = {}, CPUMemory$$module$core$src$units$CPUMemory = function() {
  this.dependencies = ["ppu", "apu", "dma"];
  this.initRAM();
  this.initIO();
  this.initPRGRAM();
  this.initPRGROM();
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.inject = function(a, b, c) {
  this.ppu = a;
  this.apu = b;
  this.dma = c;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting CPU memory");
  this.resetRAM();
  this.resetIO();
  this.resetPRGRAM();
  this.resetPRGROM();
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.read = function(a) {
  return 32768 <= a ? this.readPRGROM(a) : 8192 > a ? this.readRAM(a) : 16416 > a ? this.readIO(a) : 24576 <= a ? this.readPRGRAM(a) : this.readEXROM(a);
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.write = function(a, b) {
  32768 <= a ? this.writePRGROM(a, b) : 8192 > a ? this.writeRAM(a, b) : 16416 > a ? this.writeIO(a, b) : 24576 <= a ? this.writePRGRAM(a, b) : this.writeEXROM(a, b);
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.initRAM = function() {
  this.ram = module$core$src$utils$system.newByteArray(2048);
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.resetRAM = function() {
  module$core$src$utils$arrays.zeroArray(this.ram);
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.readRAM = function(a) {
  return this.ram[this.mapRAMAddress(a)];
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.writeRAM = function(a, b) {
  this.ram[this.mapRAMAddress(a)] = b;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.mapRAMAddress = function(a) {
  return a & 2047;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.initIO = function() {
  this.inputDevices = {1:null, 2:null};
  this.inputStrobe = 0;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.resetIO = function() {
  this.inputStrobe = 0;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.readIO = function(a) {
  switch(this.mapIOAddress(a)) {
    case 8194:
      return this.ppu.readStatus();
    case 8196:
      return this.ppu.readOAMData();
    case 8199:
      return this.ppu.readData();
    case 16405:
      return this.apu.readStatus();
    case 16406:
      return this.readInputDevice(1);
    case 16407:
      return this.readInputDevice(2);
    default:
      return 0;
  }
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.writeIO = function(a, b) {
  switch(this.mapIOAddress(a)) {
    case 8192:
      this.ppu.writeControl(b);
      break;
    case 8193:
      this.ppu.writeMask(b);
      break;
    case 8195:
      this.ppu.writeOAMAddress(b);
      break;
    case 8196:
      this.ppu.writeOAMData(b);
      break;
    case 8197:
      this.ppu.writeScroll(b);
      break;
    case 8198:
      this.ppu.writeAddress(b);
      break;
    case 8199:
      this.ppu.writeData(b);
      break;
    case 16404:
      this.dma.writeAddress(b);
      break;
    case 16406:
      this.writeInputDevice(b);
      break;
    case 16384:
      this.apu.writePulseDutyEnvelope(1, b);
      break;
    case 16385:
      this.apu.writePulseSweep(1, b);
      break;
    case 16386:
      this.apu.writePulseTimer(1, b);
      break;
    case 16387:
      this.apu.writePulseLengthCounter(1, b);
      break;
    case 16388:
      this.apu.writePulseDutyEnvelope(2, b);
      break;
    case 16389:
      this.apu.writePulseSweep(2, b);
      break;
    case 16390:
      this.apu.writePulseTimer(2, b);
      break;
    case 16391:
      this.apu.writePulseLengthCounter(2, b);
      break;
    case 16392:
      this.apu.writeTriangleLinearCounter(b);
      break;
    case 16394:
      this.apu.writeTriangleTimer(b);
      break;
    case 16395:
      this.apu.writeTriangleLengthCounter(b);
      break;
    case 16396:
      this.apu.writeNoiseEnvelope(b);
      break;
    case 16398:
      this.apu.writeNoiseTimer(b);
      break;
    case 16399:
      this.apu.writeNoiseLengthCounter(b);
      break;
    case 16400:
      this.apu.writeDMCFlagsTimer(b);
      break;
    case 16401:
      this.apu.writeDMCOutputLevel(b);
      break;
    case 16402:
      this.apu.writeDMCSampleAddress(b);
      break;
    case 16403:
      this.apu.writeDMCSampleLength(b);
      break;
    case 16405:
      this.apu.writeStatus(b);
      break;
    case 16407:
      this.apu.writeFrameCounter(b), this.writeInputDevice(b);
  }
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.mapIOAddress = function(a) {
  return 16384 > a ? a & 8199 : a;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.setInputDevice = function(a, b) {
  this.inputDevices[a] = b;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.getInputDevice = function(a) {
  return this.inputDevices[a];
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.readInputDevice = function(a) {
  return (a = this.inputDevices[a]) ? a.read() : 0;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.strobeInputDevice = function(a) {
  (a = this.inputDevices[a]) && a.strobe();
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.writeInputDevice = function(a) {
  (a &= 1) && !this.inputStrobe && (this.strobeInputDevice(1), this.strobeInputDevice(2));
  this.inputStrobe = a;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.readEXROM = function(a) {
  return 0;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.writeEXROM = function(a, b) {
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.initPRGRAM = function() {
  this.prgRAMMapping = 0;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.remapPRGRAM = function(a) {
  this.prgRAM = a.prgRAM;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.resetPRGRAM = function() {
  this.prgRAMMapping = 0;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.readPRGRAM = function(a) {
  return this.prgRAM && this.mapper.canReadPRGRAM ? this.prgRAM[this.mapPRGRAMAddress(a)] : 0;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.writePRGRAM = function(a, b) {
  this.prgRAM && this.mapper.canWritePRGRAM && (this.prgRAM[this.mapPRGRAMAddress(a)] = b, this.mapper.hasPRGRAMRegisters && this.mapper.write(a, b));
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.mapPRGRAMAddress = function(a) {
  return this.prgRAMMapping | a & 8191;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.mapPRGRAMBank = function(a, b) {
  this.prgRAMMapping = 8192 * b;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.initPRGROM = function() {
  this.prgROMMapping = module$core$src$utils$system.newUintArray(4);
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.remapPRGROM = function(a) {
  this.prgROM = a.prgROM;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.resetPRGROM = function() {
  module$core$src$utils$arrays.zeroArray(this.prgROMMapping);
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.readPRGROM = function(a) {
  return this.prgROM[this.mapPRGROMAddress(a)];
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.writePRGROM = function(a, b) {
  this.mapper.write(a, b);
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.mapPRGROMAddress = function(a) {
  return this.prgROMMapping[(a & 24576) >>> 13] | a & 8191;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.mapPRGROMBank = function(a, b) {
  this.prgROMMapping[a] = 8192 * b;
};
CPUMemory$$module$core$src$units$CPUMemory.prototype.connectMapper = function(a) {
  this.mapper = a;
  this.remapPRGRAM(a);
  this.remapPRGROM(a);
};
module$core$src$units$CPUMemory.default = CPUMemory$$module$core$src$units$CPUMemory;
// Input 37
var module$core$src$mappers$AbstractMapper = {}, AbstractMapper$$module$core$src$mappers$AbstractMapper = function(a) {
  this.dependencies = ["cpuMemory", "ppuMemory", "hash"];
  this.init(a);
  this.initPRGRAM();
  this.initCHRRAM();
  this.printPRGRAMInfo();
  this.printCHRRAMInfo();
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.init = function(a) {
  this.submapper = a.submapper;
  this.mirroring = a.mirroring;
  this.hasPRGRAM = a.hasPRGRAM;
  this.hasPRGRAMBattery = a.hasPRGRAMBattery;
  this.hasPRGRAMRegisters = !1;
  this.hasCHRROM = a.hasCHRROM;
  this.hasCHRRAM = a.hasCHRRAM;
  this.hasCHRRAMBattery = a.hasCHRRAMBattery;
  this.prgROMSize = a.prgROMSize;
  this.prgRAMSize = a.prgRAMSize;
  this.prgRAMSizeBattery = a.prgRAMSizeBattery;
  this.chrROMSize = a.chrROMSize;
  this.chrRAMSize = a.chrRAMSize;
  this.chrRAMSizeBattery = a.chrRAMSizeBattery;
  this.prgROM = a.prgROM;
  this.chrROM = a.chrROM;
  this.canWritePRGRAM = this.canReadPRGRAM = !0;
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.inject = function(a, b, c) {
  this.cpuMemory = a;
  this.ppuMemory = b;
  this.hash = c;
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Resetting mapper");
  this.resetPRGRAM();
  this.resetCHRRAM();
  this.reset();
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.reset = function() {
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.write = function(a, b) {
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.tick = function() {
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapPRGROMBank32K = function(a, b) {
  this.mapPRGROMBank8K(4 * a, 4 * b, 4);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapPRGROMBank16K = function(a, b) {
  this.mapPRGROMBank8K(2 * a, 2 * b, 2);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapPRGROMBank8K = function(a, b, c) {
  c = void 0 === c ? 1 : c;
  for (var d = this.prgROMSize - 1 >> 13, e = 0;e < c;e++) {
    this.cpuMemory.mapPRGROMBank(a + e, b + e & d);
  }
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.getPRGROMId = function() {
  var a = this;
  return new Promise(function(b) {
    null == a.prgROMId && (a.prgROMId = a.hash(a.prgROM));
    b(a.prgROMId);
  });
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.initPRGRAM = function() {
  this.hasPRGRAM && (this.prgRAM = module$core$src$utils$system.newByteArray(this.prgRAMSize), this.hasPRGRAMBattery && null == this.prgRAMSizeBattery && (this.prgRAMSizeBattery = this.prgRAMSize));
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.resetPRGRAM = function() {
  this.hasPRGRAM && module$core$src$utils$arrays.zeroArray(this.prgRAM, this.prgRAMSizeBattery || 0);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.loadPRGRAM = function(a) {
  if (this.hasPRGRAM && this.hasPRGRAMBattery) {
    if (this.hash) {
      var b = this;
      return this.getPRGROMId().then(function(c) {
        return a.readRAM(c, "prg", b.prgRAM);
      });
    }
    module$core$src$utils$logger.default.warn("Unable to load PRGRAM: hash function is not available.");
  }
  return Promise.resolve();
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.savePRGRAM = function(a) {
  if (this.hasPRGRAM && this.hasPRGRAMBattery) {
    if (this.hash) {
      var b = this;
      return this.getPRGROMId().then(function(c) {
        return a.writeRAM(c, "prg", b.prgRAM.subarray(0, b.prgRAMSizeBattery));
      });
    }
    module$core$src$utils$logger.default.warn("Unable to save PRGRAM: hash function is not available.");
  }
  return Promise.resolve();
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapPRGRAMBank8K = function(a, b) {
  this.cpuMemory.mapPRGRAMBank(a, b & this.prgRAMSize - 1 >> 13);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.printPRGRAMInfo = function() {
  module$core$src$utils$logger.default.info("==========[Mapper PRG RAM Info - Start]==========");
  module$core$src$utils$logger.default.info("has PRG RAM           : " + module$core$src$utils$format.formatOptional(this.hasPRGRAM));
  module$core$src$utils$logger.default.info("has PRG RAM battery   : " + module$core$src$utils$format.formatOptional(this.hasPRGRAMBattery));
  module$core$src$utils$logger.default.info("PRG RAM size          : " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(this.prgRAMSize)));
  module$core$src$utils$logger.default.info("PRG RAM size (battery): " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(this.prgRAMSizeBattery)));
  module$core$src$utils$logger.default.info("==========[Mapper PRG RAM Info - End]==========");
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRROMBank8K = function(a, b) {
  this.mapCHRROMBank1K(8 * a, 8 * b, 8);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRROMBank4K = function(a, b) {
  this.mapCHRROMBank1K(4 * a, 4 * b, 4);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRROMBank2K = function(a, b) {
  this.mapCHRROMBank1K(2 * a, 2 * b, 2);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRROMBank1K = function(a, b, c) {
  c = void 0 === c ? 1 : c;
  for (var d = this.chrROMSize - 1 >> 10, e = 0;e < c;e++) {
    this.ppuMemory.mapPatternsBank(a + e, b + e & d);
  }
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.initCHRRAM = function() {
  this.hasCHRRAM && (this.chrRAM = module$core$src$utils$system.newByteArray(this.chrRAMSize), this.hasCHRRAMBattery && null == this.chrRAMSizeBattery && (this.chrRAMSizeBattery = this.chrRAMSize));
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.resetCHRRAM = function() {
  this.hasCHRRAM && module$core$src$utils$arrays.zeroArray(this.chrRAM, this.chrRAMSizeBattery || 0);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.loadCHRRAM = function(a) {
  if (this.hasCHRRAM && this.hasCHRRAMBattery) {
    if (this.hash) {
      var b = this;
      return this.getPRGROMId().then(function(c) {
        return a.readRAM(c, "chr", b.chrRAM);
      });
    }
    module$core$src$utils$logger.default.warn("Unable to load CHRRAM: hash function is not available.");
  }
  return Promise.resolve();
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.saveCHRRAM = function(a) {
  if (this.hasCHRRAM && this.hasCHRRAMBattery) {
    if (this.hash) {
      var b = this;
      return this.getPRGROMId().then(function(c) {
        return a.writeRAM(c, "chr", b.chrRAM.subarray(0, b.chrRAMSizeBattery));
      });
    }
    module$core$src$utils$logger.default.warn("Unable to save CHRRAM: hash function is not available.");
  }
  return Promise.resolve();
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRRAMBank8K = function(a, b) {
  this.mapCHRRAMBank1K(8 * a, 8 * b, 8);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRRAMBank4K = function(a, b) {
  this.mapCHRRAMBank1K(4 * a, 4 * b, 4);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRRAMBank2K = function(a, b) {
  this.mapCHRRAMBank1K(2 * a, 2 * b, 2);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.mapCHRRAMBank1K = function(a, b, c) {
  c = void 0 === c ? 1 : c;
  for (var d = this.chrRAMSize - 1 >> 10, e = 0;e < c;e++) {
    this.ppuMemory.mapPatternsBank(a + e, b + e & d);
  }
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.printCHRRAMInfo = function() {
  module$core$src$utils$logger.default.info("==========[Mapper CHR RAM Info - Start]==========");
  module$core$src$utils$logger.default.info("has CHR RAM           : " + module$core$src$utils$format.formatOptional(this.hasCHRRAM));
  module$core$src$utils$logger.default.info("has CHR RAM battery   : " + module$core$src$utils$format.formatOptional(this.hasCHRRAMBattery));
  module$core$src$utils$logger.default.info("CHR RAM size          : " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(this.chrRAMSize)));
  module$core$src$utils$logger.default.info("CHR RAM size (battery): " + module$core$src$utils$format.formatOptional(module$core$src$utils$format.formatSize(this.chrRAMSizeBattery)));
  module$core$src$utils$logger.default.info("==========[Mapper CHR RAM Info - End]==========");
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.setSingleScreenMirroring = function(a) {
  this.ppuMemory.setNamesAttrsMirroring(module$core$src$common$Mirroring.default.getSingleScreen(void 0 === a ? 0 : a));
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.setVerticalMirroring = function() {
  this.ppuMemory.setNamesAttrsMirroring(module$core$src$common$Mirroring.default.VERTICAL);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.setHorizontalMirroring = function() {
  this.ppuMemory.setNamesAttrsMirroring(module$core$src$common$Mirroring.default.HORIZONTAL);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.setFourScreenMirroring = function() {
  this.ppuMemory.setNamesAttrsMirroring(module$core$src$common$Mirroring.default.FOUR_SCREEN);
};
AbstractMapper$$module$core$src$mappers$AbstractMapper.prototype.setMirroring = function(a, b, c, d) {
  this.ppuMemory.mapNamesAttrsAreas([a, b, c, d]);
};
module$core$src$mappers$AbstractMapper.default = AbstractMapper$$module$core$src$mappers$AbstractMapper;
// Input 38
var module$core$src$mappers$ColorDreamsMapper = {}, ColorDreamsMapper$$module$core$src$mappers$ColorDreamsMapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(ColorDreamsMapper$$module$core$src$mappers$ColorDreamsMapper, module$core$src$mappers$AbstractMapper.default);
ColorDreamsMapper$$module$core$src$mappers$ColorDreamsMapper.prototype.reset = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRROMBank8K(0, 0);
};
ColorDreamsMapper$$module$core$src$mappers$ColorDreamsMapper.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
  this.mapCHRROMBank8K(0, b >>> 4);
};
module$core$src$mappers$ColorDreamsMapper.default = ColorDreamsMapper$$module$core$src$mappers$ColorDreamsMapper;
// Input 39
var module$core$src$mappers$NINA001Mapper = {}, NINA001Mapper$$module$core$src$mappers$NINA001Mapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(NINA001Mapper$$module$core$src$mappers$NINA001Mapper, module$core$src$mappers$AbstractMapper.default);
NINA001Mapper$$module$core$src$mappers$NINA001Mapper.prototype.init = function(a) {
  module$core$src$mappers$AbstractMapper.default.prototype.init.call(this, a);
  this.hasPRGRAMRegisters = this.hasPRGRAM = !0;
  this.prgRAMSize = 8192;
};
NINA001Mapper$$module$core$src$mappers$NINA001Mapper.prototype.reset = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapPRGRAMBank8K(0, 0);
  this.mapCHRROMBank8K(0, 0);
};
NINA001Mapper$$module$core$src$mappers$NINA001Mapper.prototype.write = function(a, b) {
  switch(a) {
    case 32765:
      this.mapPRGROMBank32K(0, b);
      break;
    case 32766:
      this.mapCHRROMBank4K(0, b);
      break;
    case 32767:
      this.mapCHRROMBank4K(1, b);
  }
};
module$core$src$mappers$NINA001Mapper.default = NINA001Mapper$$module$core$src$mappers$NINA001Mapper;
// Input 40
var module$core$src$mappers$CNROMMapper = {}, CNROMMapper$$module$core$src$mappers$CNROMMapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(CNROMMapper$$module$core$src$mappers$CNROMMapper, module$core$src$mappers$AbstractMapper.default);
CNROMMapper$$module$core$src$mappers$CNROMMapper.prototype.reset = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRROMBank8K(0, 0);
};
CNROMMapper$$module$core$src$mappers$CNROMMapper.prototype.write = function(a, b) {
  this.mapCHRROMBank8K(0, b);
};
module$core$src$mappers$CNROMMapper.default = CNROMMapper$$module$core$src$mappers$CNROMMapper;
// Input 41
var module$core$src$mappers$AOROMMapper = {}, AOROMMapper$$module$core$src$mappers$AOROMMapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(AOROMMapper$$module$core$src$mappers$AOROMMapper, module$core$src$mappers$AbstractMapper.default);
AOROMMapper$$module$core$src$mappers$AOROMMapper.prototype.reset = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRRAMBank8K(0, 0);
};
AOROMMapper$$module$core$src$mappers$AOROMMapper.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
  this.setSingleScreenMirroring((b & 16) >>> 4);
};
module$core$src$mappers$AOROMMapper.default = AOROMMapper$$module$core$src$mappers$AOROMMapper;
// Input 42
var module$core$src$mappers$UNROMMapper = {}, UNROMMapper$$module$core$src$mappers$UNROMMapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(UNROMMapper$$module$core$src$mappers$UNROMMapper, module$core$src$mappers$AbstractMapper.default);
UNROMMapper$$module$core$src$mappers$UNROMMapper.prototype.reset = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRRAMBank8K(0, 0);
};
UNROMMapper$$module$core$src$mappers$UNROMMapper.prototype.write = function(a, b) {
  this.mapPRGROMBank16K(0, b);
};
module$core$src$mappers$UNROMMapper.default = UNROMMapper$$module$core$src$mappers$UNROMMapper;
// Input 43
var module$core$src$mappers$BNROMMapper = {}, BNROMMapper$$module$core$src$mappers$BNROMMapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(BNROMMapper$$module$core$src$mappers$BNROMMapper, module$core$src$mappers$AbstractMapper.default);
BNROMMapper$$module$core$src$mappers$BNROMMapper.prototype.reset = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRRAMBank8K(0, 0);
};
BNROMMapper$$module$core$src$mappers$BNROMMapper.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
};
module$core$src$mappers$BNROMMapper.default = BNROMMapper$$module$core$src$mappers$BNROMMapper;
// Input 44
var module$core$src$mappers$MMC3Mapper = {}, MMC3Mapper$$module$core$src$mappers$MMC3Mapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.call(this, a);
  this.dependencies = ["cpu", "ppu", "cpuMemory", "ppuMemory", "hash"];
};
$jscomp.inherits(MMC3Mapper$$module$core$src$mappers$MMC3Mapper, module$core$src$mappers$AbstractMapper.default);
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.init = function(a) {
  module$core$src$mappers$AbstractMapper.default.prototype.init.call(this, a);
  this.hasPRGRAM = !0;
  this.prgRAMSize = 8192;
  this.alternateMode = !1;
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.inject = function(a, b, c, d, e) {
  module$core$src$mappers$AbstractMapper.default.prototype.inject.call(this, c, d, e);
  this.cpu = a;
  this.ppu = b;
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.reset = function() {
  this.resetMapping();
  this.resetRegisters();
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.resetMapping = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapPRGRAMBank8K(0, 0);
  this.mapCHRROMBank8K(0, 0);
  this.hasCHRRAM && this.mapCHRRAMBank8K(0, 0);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.resetRegisters = function() {
  this.irqDelay = this.irqEnabled = this.irqReload = this.irqLatch = this.irqCounter = this.bankSelect = 0;
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.write = function(a, b) {
  switch(a & 57345) {
    case 32768:
      this.bankSelect = b;
      break;
    case 32769:
      this.writeBankData(b);
      break;
    case 40960:
      this.writeMirroring(b);
      break;
    case 40961:
      this.writePRGRAMEnable(b);
      break;
    case 49152:
      this.irqLatch = b;
      break;
    case 49153:
      this.writeIRQReload();
      break;
    case 57344:
      this.writeIRQEnable(!1);
      break;
    case 57345:
      this.writeIRQEnable(!0);
  }
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.writeBankData = function(a) {
  switch(this.bankSelect & 7) {
    case 0:
    ;
    case 1:
      this.switchDoubleCHRROMBanks(a);
      break;
    case 2:
    ;
    case 3:
    ;
    case 4:
    ;
    case 5:
      this.switchSingleCHRROMBanks(a);
      break;
    case 6:
      this.switchPRGROMBanks0And2(a);
      break;
    case 7:
      this.switchPRGROMBank1(a);
  }
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.writeMirroring = function(a) {
  this.mirroring !== module$core$src$common$Mirroring.default.FOUR_SCREEN && this.switchMirroring(a);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.writePRGRAMEnable = function(a) {
  this.canReadPRGRAM = 128 === (a & 128);
  this.canWritePRGRAM = 128 === (a & 192);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.writeIRQReload = function() {
  this.alternateMode && (this.irqReload = !0);
  this.irqCounter = 0;
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.writeIRQEnable = function(a) {
  (this.irqEnabled = a) || this.cpu.clearInterrupt(module$core$src$common$constants.IRQ_EXT);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.switchDoubleCHRROMBanks = function(a) {
  this.mapCHRROMBank2K((this.bankSelect & 128) >>> 6 | this.bankSelect & 1, a >>> 1);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.switchSingleCHRROMBanks = function(a) {
  this.mapCHRROMBank1K((~this.bankSelect & 128) >>> 5 | this.bankSelect - 2 & 3, a);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.switchPRGROMBanks0And2 = function(a) {
  var b = (~this.bankSelect & 64) >>> 5;
  this.mapPRGROMBank8K((this.bankSelect & 64) >>> 5, a);
  this.mapPRGROMBank8K(b, -2);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.switchPRGROMBank1 = function(a) {
  this.mapPRGROMBank8K(1, a);
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.switchMirroring = function(a) {
  a & 1 ? this.setHorizontalMirroring() : this.setVerticalMirroring();
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.tick = function() {
  this.ppu.addressBus & 4096 ? (this.irqDelay || this.updateIRQCounter(), this.irqDelay = 7) : this.irqDelay && this.irqDelay--;
};
MMC3Mapper$$module$core$src$mappers$MMC3Mapper.prototype.updateIRQCounter = function() {
  var a = this.irqCounter;
  !this.irqCounter || this.irqReload ? this.irqCounter = this.irqLatch : this.irqCounter--;
  !this.irqEnabled || this.irqCounter || this.alternateMode && a && !this.irqReload || this.cpu.activateInterrupt(module$core$src$common$constants.IRQ_EXT);
  this.irqReload = !1;
};
module$core$src$mappers$MMC3Mapper.default = MMC3Mapper$$module$core$src$mappers$MMC3Mapper;
// Input 45
var module$core$src$mappers$MMC1Mapper = {}, MMC1Mapper$$module$core$src$mappers$MMC1Mapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(MMC1Mapper$$module$core$src$mappers$MMC1Mapper, module$core$src$mappers$AbstractMapper.default);
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.init = function(a) {
  module$core$src$mappers$AbstractMapper.default.prototype.init.call(this, a);
  this.hasPRGRAM = !0;
  this.prgRAMSize = this.prgRAMSize || 8192;
  this.snrom = (131072 === this.prgROMSize || 262144 === this.prgROMSize) && 8192 === this.prgRAMSize && (8192 === this.chrROMSize || 8192 === this.chrRAMSize);
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.reset = function() {
  this.resetShiftRegister();
  this.resetBankRegisters();
  this.synchronizeMapping();
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.resetShiftRegister = function() {
  this.writesCount = this.shiftRegister = 0;
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.resetBankRegisters = function() {
  this.controllRegister = 12;
  this.chrBankRegister2 = this.chrBankRegister1 = this.prgBankRegister = 0;
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.write = function(a, b) {
  b & 128 ? (this.resetShiftRegister(), this.controllRegister |= 12) : (this.shiftRegister |= (b & 1) << this.writesCount, 5 <= ++this.writesCount && (this.copyShiftRegister(a), this.resetShiftRegister(), this.synchronizeMapping()));
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.copyShiftRegister = function(a) {
  switch(a & 57344) {
    case 32768:
      this.controllRegister = this.shiftRegister;
      break;
    case 40960:
      this.chrBankRegister1 = this.shiftRegister;
      break;
    case 49152:
      this.chrBankRegister2 = this.shiftRegister;
      break;
    case 57344:
      this.prgBankRegister = this.shiftRegister;
  }
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.synchronizeMapping = function() {
  this.switchMirroring();
  this.switchPRGROMBanks();
  this.switchPRGRAMBank();
  this.hasCHRRAM ? this.switchCHRRAMBanks() : this.switchCHRROMBanks();
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.switchMirroring = function() {
  switch(this.controllRegister & 3) {
    case 0:
      this.setSingleScreenMirroring(0);
      break;
    case 1:
      this.setSingleScreenMirroring(1);
      break;
    case 2:
      this.setVerticalMirroring();
      break;
    case 3:
      this.setHorizontalMirroring();
  }
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.switchPRGROMBanks = function() {
  var a = this.hasCHRRAM ? this.chrBankRegister1 & 16 : 0, b = this.prgBankRegister & 15;
  switch(this.controllRegister & 12) {
    case 12:
      this.mapPRGROMBank16K(0, a | b);
      this.mapPRGROMBank16K(1, a | 15);
      break;
    case 8:
      this.mapPRGROMBank16K(0, a);
      this.mapPRGROMBank16K(1, a | b);
      break;
    default:
      this.mapPRGROMBank32K(0, (a | b) >>> 1);
  }
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.switchPRGRAMBank = function() {
  this.mapPRGRAMBank8K(0, this.hasCHRRAM ? this.chrBankRegister1 >>> 2 : 0);
  var a = 0 === (this.chrBankRegister1 & 16);
  this.canReadPRGRAM = this.canWritePRGRAM = 0 === (this.prgBankRegister & 16) && (!this.snrom || a);
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.switchCHRROMBanks = function() {
  this.controllRegister & 16 ? (this.mapCHRROMBank4K(0, this.chrBankRegister1), this.mapCHRROMBank4K(1, this.chrBankRegister2)) : this.mapCHRROMBank8K(0, this.chrBankRegister1 >>> 1);
};
MMC1Mapper$$module$core$src$mappers$MMC1Mapper.prototype.switchCHRRAMBanks = function() {
  this.controllRegister & 16 ? (this.mapCHRRAMBank4K(0, this.chrBankRegister1), this.mapCHRRAMBank4K(1, this.chrBankRegister2)) : this.mapCHRRAMBank8K(0, 0);
};
module$core$src$mappers$MMC1Mapper.default = MMC1Mapper$$module$core$src$mappers$MMC1Mapper;
// Input 46
var module$core$src$mappers$NROMMapper = {}, NROMMapper$$module$core$src$mappers$NROMMapper = function(a) {
  module$core$src$mappers$AbstractMapper.default.apply(this, arguments);
};
$jscomp.inherits(NROMMapper$$module$core$src$mappers$NROMMapper, module$core$src$mappers$AbstractMapper.default);
NROMMapper$$module$core$src$mappers$NROMMapper.prototype.reset = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRROMBank8K(0, 0);
};
module$core$src$mappers$NROMMapper.default = NROMMapper$$module$core$src$mappers$NROMMapper;
// Input 47
var module$core$src$factories$MapperFactory = {}, mappers$$module$core$src$factories$MapperFactory = {NROM:module$core$src$mappers$NROMMapper.default, MMC1:module$core$src$mappers$MMC1Mapper.default, UNROM:module$core$src$mappers$UNROMMapper.default, CNROM:module$core$src$mappers$CNROMMapper.default, MMC3:module$core$src$mappers$MMC3Mapper.default, AOROM:module$core$src$mappers$AOROMMapper.default, BNROM:module$core$src$mappers$BNROMMapper.default, ColorDreams:module$core$src$mappers$ColorDreamsMapper.default,
"NINA-001":module$core$src$mappers$NINA001Mapper.default}, MapperFactory$$module$core$src$factories$MapperFactory = function(a) {
  this.injector = a;
};
MapperFactory$$module$core$src$factories$MapperFactory.prototype.createMapper = function(a) {
  var b = a.mapper, c = mappers$$module$core$src$factories$MapperFactory[b];
  if (c) {
    return module$core$src$utils$logger.default.info('Creating "' + b + '" mapper'), a = new c(a), this.injector.inject(a);
  }
  throw Error('Unsupported mapper "' + b + '"');
};
module$core$src$factories$MapperFactory.default = MapperFactory$$module$core$src$factories$MapperFactory;
// Input 48
var module$core$src$units$PPUMemory = {}, POWER_UP_PALETTES$$module$core$src$units$PPUMemory = [9, 1, 0, 1, 0, 2, 2, 13, 8, 16, 8, 36, 0, 0, 4, 44, 9, 1, 52, 3, 0, 4, 0, 20, 8, 58, 0, 2, 0, 32, 44, 8], PPUMemory$$module$core$src$units$PPUMemory = function() {
  this.initPatterns();
  this.initNamesAttrs();
  this.initPalettes();
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.powerUp = function() {
  module$core$src$utils$logger.default.info("Reseting PPU memory");
  this.resetPatterns();
  this.resetNamesAttrs();
  this.resetPaletts();
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.read = function(a) {
  return 8192 > a ? this.readPattern(a) : 16128 > a ? this.readNameAttr(a) : this.readPalette(a);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.write = function(a, b) {
  a = this.mapAddress(a);
  8192 > a ? this.writePattern(a, b) : 16128 > a ? this.writeNameAttr(a, b) : this.writePalette(a, b);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.mapAddress = function(a) {
  return a & 16383;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.initPatterns = function() {
  this.patternsMapping = module$core$src$utils$system.newUintArray(8);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.remapPatterns = function(a) {
  a.hasCHRRAM ? (this.patterns = a.chrRAM, this.canWritePattern = !0) : (this.patterns = a.chrROM, this.canWritePattern = !1);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.resetPatterns = function() {
  module$core$src$utils$arrays.zeroArray(this.patternsMapping);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.readPattern = function(a) {
  return this.patterns[this.mapPatternAddress(a)];
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.writePattern = function(a, b) {
  this.canWritePattern && (this.patterns[this.mapPatternAddress(a)] = b);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.mapPatternAddress = function(a) {
  return this.patternsMapping[(a & 7168) >>> 10] | a & 1023;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.mapPatternsBank = function(a, b) {
  this.patternsMapping[a] = 1024 * b;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.initNamesAttrs = function() {
  this.namesAttrs = module$core$src$utils$system.newByteArray(4096);
  this.namesAttrsMapping = module$core$src$utils$system.newUintArray(4);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.remapNamesAttrs = function(a) {
  this.defaultMirroring = a.mirroring;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.resetNamesAttrs = function() {
  module$core$src$utils$arrays.zeroArray(this.namesAttrs);
  this.setNamesAttrsMirroring(this.defaultMirroring);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.readNameAttr = function(a) {
  return this.namesAttrs[this.mapNameAttrAddres(a)];
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.writeNameAttr = function(a, b) {
  this.namesAttrs[this.mapNameAttrAddres(a)] = b;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.mapNameAttrAddres = function(a) {
  return this.namesAttrsMapping[(a & 3072) >>> 10] | a & 1023;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.mapNamesAttrsAreas = function(a) {
  for (var b = 0;4 > b;b++) {
    this.namesAttrsMapping[b] = 1024 * a[b];
  }
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.setNamesAttrsMirroring = function(a) {
  this.mapNamesAttrsAreas(module$core$src$common$Mirroring.default.getParams(a).areas);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.initPalettes = function() {
  this.paletts = module$core$src$utils$system.newByteArray(32);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.resetPaletts = function() {
  module$core$src$utils$arrays.copyArray(POWER_UP_PALETTES$$module$core$src$units$PPUMemory, this.paletts);
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.readPalette = function(a) {
  return this.paletts[this.mapPaletteAddress(a)];
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.writePalette = function(a, b) {
  this.paletts[this.mapPaletteAddress(a)] = b;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.mapPaletteAddress = function(a) {
  return a & 3 ? a & 31 : a & 15;
};
PPUMemory$$module$core$src$units$PPUMemory.prototype.connectMapper = function(a) {
  this.remapPatterns(a);
  this.remapNamesAttrs(a);
};
module$core$src$units$PPUMemory.default = PPUMemory$$module$core$src$units$PPUMemory;
// Input 49
var module$core$src$devices$Zapper = {}, Zapper$$module$core$src$devices$Zapper = function() {
  this.dependencies = ["ppu"];
  this.triggerPressed = !1;
  this.beamY = this.beamX = 0;
};
Zapper$$module$core$src$devices$Zapper.prototype.inject = function(a) {
  this.ppu = a;
};
Zapper$$module$core$src$devices$Zapper.prototype.strobe = function() {
};
Zapper$$module$core$src$devices$Zapper.prototype.read = function() {
  return this.triggerPressed << 4 | !this.isLightDetected() << 3;
};
Zapper$$module$core$src$devices$Zapper.prototype.isLightDetected = function() {
  return this.beamX && this.beamY && this.ppu.isBrightFramePixel(this.beamX, this.beamY);
};
Zapper$$module$core$src$devices$Zapper.prototype.setTriggerPressed = function(a) {
  this.triggerPressed = a;
};
Zapper$$module$core$src$devices$Zapper.prototype.setBeamPosition = function(a, b) {
  this.beamX = a;
  this.beamY = b;
};
module$core$src$devices$Zapper.default = Zapper$$module$core$src$devices$Zapper;
// Input 50
var module$core$src$devices$Joypad = {}, Joypad$$module$core$src$devices$Joypad = function() {
  this.buttonStates = module$core$src$utils$system.newByteArray(24);
  this.buttonStates[19] = 1;
  this.readPosition = 0;
};
Joypad$$module$core$src$devices$Joypad.prototype.strobe = function() {
  this.readPosition = 0;
};
Joypad$$module$core$src$devices$Joypad.prototype.read = function() {
  var a = this.buttonStates[this.readPosition];
  this.readPosition = (this.readPosition + 1) % this.buttonStates.length;
  return a;
};
Joypad$$module$core$src$devices$Joypad.prototype.setButtonPressed = function(a, b) {
  return this.buttonStates[a] = b ? 1 : 0;
};
var Button$$module$core$src$devices$Joypad = {A:0, B:1, SELECT:2, START:3, UP:4, DOWN:5, LEFT:6, RIGHT:7};
module$core$src$devices$Joypad.default = Joypad$$module$core$src$devices$Joypad;
module$core$src$devices$Joypad.Button = Button$$module$core$src$devices$Joypad;
// Input 51
var module$core$src$factories$DeviceFactory = {}, devices$$module$core$src$factories$DeviceFactory = {joypad:module$core$src$devices$Joypad.default, zapper:module$core$src$devices$Zapper.default}, DeviceFactory$$module$core$src$factories$DeviceFactory = function(a) {
  this.injector = a;
};
DeviceFactory$$module$core$src$factories$DeviceFactory.prototype.createDevice = function(a) {
  var b = devices$$module$core$src$factories$DeviceFactory[a];
  if (b) {
    return module$core$src$utils$logger.default.info('Creating "' + a + '" device'), this.injector.inject(new b);
  }
  throw Error('Unsupported device "' + a + '"');
};
module$core$src$factories$DeviceFactory.default = DeviceFactory$$module$core$src$factories$DeviceFactory;
// Input 52
var module$core$src$config = {}, $jscompDefaultExport$$module$core$src$config = {nes:{class:module$core$src$NES.default}, cpu:{class:module$core$src$units$CPU.default}, ppu:{class:module$core$src$units$PPU.default}, apu:{class:module$core$src$units$APU.default}, dma:{class:module$core$src$units$DMA.default}, cpuMemory:{class:module$core$src$units$CPUMemory.default}, ppuMemory:{class:module$core$src$units$PPUMemory.default}, cartridgeFactory:{class:module$core$src$factories$CartridgeFactory.default},
deviceFactory:{class:module$core$src$factories$DeviceFactory.default}, mapperFactory:{class:module$core$src$factories$MapperFactory.default}, paletteFactory:{class:module$core$src$factories$PaletteFactory.default}, hash:{value:null}, jszip:{value:null}};
module$core$src$config.default = $jscompDefaultExport$$module$core$src$config;
// Input 53
var module$core$src$storages$ExternalStorage = {}, ExternalStorage$$module$core$src$storages$ExternalStorage = function(a) {
  this.implementer = a;
};
ExternalStorage$$module$core$src$storages$ExternalStorage.prototype.readConfiguration = function() {
  return this.call("readConfiguration");
};
ExternalStorage$$module$core$src$storages$ExternalStorage.prototype.writeConfiguration = function(a) {
  return this.call("writeConfiguration", a);
};
ExternalStorage$$module$core$src$storages$ExternalStorage.prototype.deleteConfiguration = function() {
  return this.call("deleteConfiguration");
};
ExternalStorage$$module$core$src$storages$ExternalStorage.prototype.readRAM = function(a, b, c) {
  return this.call("readRAM", a, b, c);
};
ExternalStorage$$module$core$src$storages$ExternalStorage.prototype.writeRAM = function(a, b, c) {
  return this.call("writeRAM", a, b, c);
};
ExternalStorage$$module$core$src$storages$ExternalStorage.prototype.deleteRAM = function(a) {
  return this.call("deleteRAM", a);
};
ExternalStorage$$module$core$src$storages$ExternalStorage.prototype.call = function(a, b) {
  for (var c = [], d = 1;d < arguments.length;++d) {
    c[d - 1] = arguments[d];
  }
  return this.implementer[a] ? this.implementer[a].apply(null, [].concat($jscomp.arrayFromIterable(c))) : Promise.resolve(null);
};
module$core$src$storages$ExternalStorage.default = ExternalStorage$$module$core$src$storages$ExternalStorage;
// Input 54
var module$core$src$storages$MemoryStorage = {}, MemoryStorage$$module$core$src$storages$MemoryStorage = function() {
  this.config = null;
  this.rams = {};
};
MemoryStorage$$module$core$src$storages$MemoryStorage.prototype.readConfiguration = function() {
  var a = this;
  return new Promise(function(b) {
    b(module$core$src$utils$objects.copyObject(a.config));
  });
};
MemoryStorage$$module$core$src$storages$MemoryStorage.prototype.writeConfiguration = function(a) {
  var b = this;
  return new Promise(function(c) {
    b.config = module$core$src$utils$objects.copyObject(a);
    c();
  });
};
MemoryStorage$$module$core$src$storages$MemoryStorage.prototype.deleteConfiguration = function() {
  var a = this;
  return new Promise(function(b) {
    a.config = null;
    b();
  });
};
MemoryStorage$$module$core$src$storages$MemoryStorage.prototype.readRAM = function(a, b, c) {
  var d = this;
  return new Promise(function(e) {
    var f = module$core$src$utils$objects.getProperty(d.rams, a, b);
    e(f ? module$core$src$utils$arrays.copyArray(f, c) : null);
  });
};
MemoryStorage$$module$core$src$storages$MemoryStorage.prototype.writeRAM = function(a, b, c) {
  var d = this;
  return new Promise(function(e) {
    module$core$src$utils$objects.setProperty(d.rams, a, b, c);
    e();
  });
};
MemoryStorage$$module$core$src$storages$MemoryStorage.prototype.deleteRAM = function(a) {
  var b = this;
  return new Promise(function(c) {
    null != a ? module$core$src$utils$objects.setProperty(b.rams, a, void 0) : b.rams = {};
    c();
  });
};
module$core$src$storages$MemoryStorage.default = MemoryStorage$$module$core$src$storages$MemoryStorage;
// Input 55
var module$core$src$utils$Injector = {}, Injector$$module$core$src$utils$Injector = function(a) {
  module$core$src$utils$logger.default.info("Creating injector");
  this.dependencies = {};
  for (var b in a) {
    this.put(b, a[b]);
  }
};
Injector$$module$core$src$utils$Injector.prototype.put = function(a, b) {
  this.dependencies[a] = module$core$src$utils$objects.mergeProperties(b, {resolved:!1});
};
Injector$$module$core$src$utils$Injector.prototype.get = function(a) {
  var b = this.dependencies[a];
  if (!b) {
    throw Error('Dependency "' + a + '" is not defined.');
  }
  b.resolved || (module$core$src$utils$logger.default.info('Resolving dependency "' + a + '"'), b.value = this.resolve(a, b), b.resolved = !0, "object" === typeof b.value && null != b.value && this.inject(b.value));
  return b.value;
};
Injector$$module$core$src$utils$Injector.prototype.resolve = function(a, b) {
  if ("undefined" !== typeof b.class) {
    if ("function" === typeof b.class) {
      return new b.class(this);
    }
    throw Error('Class of "' + a + '" dependency is not a function');
  }
  if ("undefined" !== typeof b.factory) {
    if ("function" === typeof b.factory) {
      return b.factory(this);
    }
    throw Error('Factory of "' + a + '" dependency is not a function');
  }
  if ("undefined" !== typeof b.value) {
    return b.value;
  }
  throw Error('Dependency "' + a + '" has no class, factory or value specified');
};
Injector$$module$core$src$utils$Injector.prototype.inject = function(a) {
  var b = a.dependencies, c = a.inject;
  if (b && c) {
    var d = this;
    module$core$src$utils$logger.default.info("Injecting dependencies: " + b.join(", "));
    c.apply(a, b.map(function(a) {
      return d.get(a);
    }));
  }
  return a;
};
module$core$src$utils$Injector.default = Injector$$module$core$src$utils$Injector;
// Input 56
var module$core$src$utils$math = {};
function roundUpToPowerOf2$$module$core$src$utils$math(a) {
  for (var b = 1;b < a;) {
    b *= 2;
  }
  return b;
}
module$core$src$utils$math.roundUpToPowerOf2 = roundUpToPowerOf2$$module$core$src$utils$math;
// Input 57
var module$lib$src$devices$adapters$JoypadAdapter = {}, buttonAliases$$module$lib$src$devices$adapters$JoypadAdapter = {a:module$core$src$devices$Joypad.Button.A, b:module$core$src$devices$Joypad.Button.B, select:module$core$src$devices$Joypad.Button.SELECT, start:module$core$src$devices$Joypad.Button.START, up:module$core$src$devices$Joypad.Button.UP, down:module$core$src$devices$Joypad.Button.DOWN, left:module$core$src$devices$Joypad.Button.LEFT, right:module$core$src$devices$Joypad.Button.RIGHT},
JoypadAdapter$$module$lib$src$devices$adapters$JoypadAdapter = function(a) {
  this.joypad = a;
};
JoypadAdapter$$module$lib$src$devices$adapters$JoypadAdapter.prototype.getDevice = function() {
  return this.joypad;
};
JoypadAdapter$$module$lib$src$devices$adapters$JoypadAdapter.prototype.inputChanged = function(a, b) {
  var c = buttonAliases$$module$lib$src$devices$adapters$JoypadAdapter[a];
  null != c && this.joypad.setButtonPressed(c, b);
};
module$lib$src$devices$adapters$JoypadAdapter.default = JoypadAdapter$$module$lib$src$devices$adapters$JoypadAdapter;
// Input 58
var module$lib$src$devices$adapters$ZapperAdapter = {}, ZapperAdapter$$module$lib$src$devices$adapters$ZapperAdapter = function(a) {
  this.dependencies = ["videoManager"];
  this.zapper = a;
};
ZapperAdapter$$module$lib$src$devices$adapters$ZapperAdapter.prototype.inject = function(a) {
  this.videoManager = a;
};
ZapperAdapter$$module$lib$src$devices$adapters$ZapperAdapter.prototype.getDevice = function() {
  return this.zapper;
};
ZapperAdapter$$module$lib$src$devices$adapters$ZapperAdapter.prototype.inputChanged = function(a, b) {
  "trigger" === a && this.zapper.setTriggerPressed(b);
};
ZapperAdapter$$module$lib$src$devices$adapters$ZapperAdapter.prototype.stateChanged = function(a) {
  var b = this.videoManager.getOutputRect();
  this.zapper.setBeamPosition(~~(((a.cursorX || 0) - b.left) / ((b.right - b.left) / module$core$src$common$constants.VIDEO_WIDTH)), ~~(((a.cursorY || 0) - b.top) / ((b.bottom - b.top) / module$core$src$common$constants.VIDEO_HEIGHT)));
};
module$lib$src$devices$adapters$ZapperAdapter.default = ZapperAdapter$$module$lib$src$devices$adapters$ZapperAdapter;
// Input 59
var module$lib$src$renderers$WebGLRenderer = {}, VERTEX_SHADER_SOURCE$$module$lib$src$renderers$WebGLRenderer = "\n  uniform   vec2 uScreenSize;\n  attribute vec2 aVertexPosition;\n  attribute vec2 aTextureCoord;\n  varying   vec2 vTextureCoord;\n\n  void main(void) {\n    float x = aVertexPosition.x / (0.5 * uScreenSize.x) - 1.0; // [-1, 1] -> [0, width]\n    float y = 1.0 - aVertexPosition.y / (0.5 * uScreenSize.y); // [-1, 1] -> [height, 0]\n    gl_Position = vec4(x, y, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n  }\n",
FRAGMENT_SHADER_SOURCE$$module$lib$src$renderers$WebGLRenderer = "\n  precision mediump float;\n\n  uniform sampler2D uSampler;\n  varying vec2      vTextureCoord;\n\n  void main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n  }\n", WebGLRenderer$$module$lib$src$renderers$WebGLRenderer = function(a) {
  this.canvas = a;
  this.initWebGL();
  this.initParameters();
  this.initShaders();
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.isSupported = function() {
  return window && null != window.WebGLRenderingContext;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.initWebGL = function() {
  if (!WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.isSupported()) {
    throw Error("WebGL is not supported");
  }
  for (var a = $jscomp.makeIterator(["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"]), b = a.next();!b.done && !(this.gl = this.getContext(b.value));b = a.next()) {
  }
  if (!this.gl) {
    throw Error("Unable to get WebGL context");
  }
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.getContext = function(a) {
  try {
    return module$core$src$utils$logger.default.info('Trying to get WebGL context "' + a + '"'), this.canvas.getContext(a);
  } catch (b) {
    return module$core$src$utils$logger.default.warn('Error when getting WebGL context "' + a + '": ' + b), null;
  }
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.initShaders = function() {
  var a = this.compileAndLinkShaders();
  this.screenSizeUniform = this.gl.getUniformLocation(a, "uScreenSize");
  this.samplerUniform = this.gl.getUniformLocation(a, "uSampler");
  this.vertexPositionAttribute = this.gl.getAttribLocation(a, "aVertexPosition");
  this.textureCoordAttribute = this.gl.getAttribLocation(a, "aTextureCoord");
  this.gl.enableVertexAttribArray(this.vertexPositionAttribute);
  this.gl.enableVertexAttribArray(this.textureCoordAttribute);
  this.gl.useProgram(a);
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.compileAndLinkShaders = function() {
  var a = this.gl.createProgram();
  this.gl.attachShader(a, this.compileShadder(this.gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE$$module$lib$src$renderers$WebGLRenderer));
  this.gl.attachShader(a, this.compileShadder(this.gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE$$module$lib$src$renderers$WebGLRenderer));
  this.gl.linkProgram(a);
  if (!this.gl.getProgramParameter(a, this.gl.LINK_STATUS)) {
    throw Error("Shader linking error");
  }
  return a;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.compileShadder = function(a, b) {
  var c = this.gl.createShader(a);
  this.gl.shaderSource(c, b);
  this.gl.compileShader(c);
  if (!this.gl.getShaderParameter(c, this.gl.COMPILE_STATUS)) {
    throw Error("Shader compilation error: " + this.gl.getShaderInfoLog(c));
  }
  return c;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.createFrame = function(a, b, c, d) {
  c = module$core$src$utils$math.roundUpToPowerOf2(c);
  d = module$core$src$utils$math.roundUpToPowerOf2(d);
  var e = this.createFrameData(c, d);
  a = this.createFrameVerticies(a, b, c, d);
  b = this.createFrameCoords();
  var f = this.gl.createTexture();
  return {width:c, height:d, data:e, verticies:a, coords:b, texture:f};
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.createFrameData = function(a, b) {
  var c = new ArrayBuffer(a * b * 4), c = new Uint32Array(c);
  module$core$src$utils$arrays.fillArray(c, module$core$src$utils$colors.BLACK_COLOR);
  return c;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.createFrameVerticies = function(a, b, c, d) {
  a = new Float32Array([a, b, a + c, b, a + c, b + d, a, b + d]);
  b = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
  return b;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.createFrameCoords = function() {
  var a = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), b = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
  return b;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.drawFrame = function(a) {
  this.updateFrameTexture(a);
  this.updateShaderParameters(a);
  this.drawFrameVerticies(a);
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.updateFrameTexture = function(a) {
  var b = this.smoothing ? this.gl.LINEAR : this.gl.NEAREST, c = new Uint8Array(a.data.buffer);
  this.gl.activeTexture(this.gl.TEXTURE0);
  this.gl.bindTexture(this.gl.TEXTURE_2D, a.texture);
  this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, b);
  this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, b);
  this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, a.width, a.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, c);
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.updateShaderParameters = function(a) {
  this.gl.uniform1i(this.samplerUniform, 0);
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.verticies);
  this.gl.vertexAttribPointer(this.vertexPositionAttribute, 2, this.gl.FLOAT, !1, 0, 0);
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.coords);
  this.gl.vertexAttribPointer(this.textureCoordAttribute, 2, this.gl.FLOAT, !1, 0, 0);
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.drawFrameVerticies = function(a) {
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, a.verticies);
  this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, 4);
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.begin = function() {
  this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  this.gl.clearColor(0, 0, 0, 1);
  this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  this.gl.uniform2f(this.screenSizeUniform, this.canvas.width / this.scale, this.canvas.height / this.scale);
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.end = function() {
  this.gl.flush();
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.initParameters = function() {
  this.smoothing = !1;
  this.scale = 1;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.setScale = function(a) {
  this.scale = a;
};
WebGLRenderer$$module$lib$src$renderers$WebGLRenderer.prototype.setSmoothing = function(a) {
  this.smoothing = a;
};
module$lib$src$renderers$WebGLRenderer.default = WebGLRenderer$$module$lib$src$renderers$WebGLRenderer;
// Input 60
var module$lib$src$renderers$CanvasRenderer = {}, CanvasRenderer$$module$lib$src$renderers$CanvasRenderer = function(a) {
  this.canvas = a;
  this.context = this.canvas.getContext("2d");
  this.smoothing = !1;
  this.scale = 1;
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.isSupported = function() {
  return !0;
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.createFrame = function(a, b, c, d) {
  c = this.context.createImageData(c, d);
  d = new Uint32Array(c.data.buffer);
  module$core$src$utils$arrays.fillArray(d, module$core$src$utils$colors.BLACK_COLOR);
  return {x:a, y:b, data:d, imageData:c};
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.drawFrame = function(a) {
  this.context.putImageData(a.imageData, a.x, a.y);
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.begin = function() {
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.end = function() {
  1 < this.scale && (this.applySmoothing(), this.appyScaling());
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.setSmoothing = function(a) {
  this.smoothing = a;
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.applySmoothing = function() {
  this.context.imageSmoothingEnabled = this.smoothing;
  this.context.mozImageSmoothingEnabled = this.smoothing;
  this.context.oImageSmoothingEnabled = this.smoothing;
  this.context.msImageSmoothingEnabled = this.smoothing;
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.setScale = function(a) {
  this.scale = a;
};
CanvasRenderer$$module$lib$src$renderers$CanvasRenderer.prototype.appyScaling = function() {
  this.context.drawImage(this.canvas, 0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale, 0, 0, this.canvas.width, this.canvas.height);
};
module$lib$src$renderers$CanvasRenderer.default = CanvasRenderer$$module$lib$src$renderers$CanvasRenderer;
// Input 61
var module$lib$src$factories$RendererFactory = {}, FALLBACK$$module$lib$src$factories$RendererFactory = "canvas", renderers$$module$lib$src$factories$RendererFactory = {canvas:module$lib$src$renderers$CanvasRenderer.default, webgl:module$lib$src$renderers$WebGLRenderer.default}, RendererFactory$$module$lib$src$factories$RendererFactory = function() {
};
RendererFactory$$module$lib$src$factories$RendererFactory.prototype.isRendererSupported = function(a) {
  return (a = renderers$$module$lib$src$factories$RendererFactory[a]) && a.isSupported();
};
RendererFactory$$module$lib$src$factories$RendererFactory.prototype.createRenderer = function(a, b) {
  var c = renderers$$module$lib$src$factories$RendererFactory[a];
  if (c) {
    try {
      return new c(b);
    } catch (d) {
      module$core$src$utils$logger.default.error('Error during creation of renderer "' + a + '"', d);
    }
  } else {
    module$core$src$utils$logger.default.warn('Unsupported renderer "' + a + '"');
  }
  module$core$src$utils$logger.default.info('Creating "' + FALLBACK$$module$lib$src$factories$RendererFactory + '" renderer as fallback');
  return new renderers$$module$lib$src$factories$RendererFactory[FALLBACK$$module$lib$src$factories$RendererFactory](b);
};
module$lib$src$factories$RendererFactory.default = RendererFactory$$module$lib$src$factories$RendererFactory;
// Input 62
var module$lib$src$storages$BrowserStorage = {}, CONFIG_KEY$$module$lib$src$storages$BrowserStorage = "CFxNES.config", BrowserStorage$$module$lib$src$storages$BrowserStorage = function() {
};
BrowserStorage$$module$lib$src$storages$BrowserStorage.prototype.readConfiguration = function() {
  return new Promise(function(a) {
    var b = localStorage.getItem(CONFIG_KEY$$module$lib$src$storages$BrowserStorage);
    a(b ? module$core$src$utils$convert.stringToObject(b) : null);
  });
};
BrowserStorage$$module$lib$src$storages$BrowserStorage.prototype.writeConfiguration = function(a) {
  return new Promise(function(b) {
    localStorage.setItem(CONFIG_KEY$$module$lib$src$storages$BrowserStorage, module$core$src$utils$convert.objectToString(a));
    b();
  });
};
BrowserStorage$$module$lib$src$storages$BrowserStorage.prototype.deleteConfiguration = function() {
  return new Promise(function(a) {
    localStorage.removeItem(CONFIG_KEY$$module$lib$src$storages$BrowserStorage);
    a();
  });
};
BrowserStorage$$module$lib$src$storages$BrowserStorage.prototype.readRAM = function(a, b, c) {
  return this.getDB().then(function(d) {
    return new Promise(function(e, f) {
      var g = d.transaction("ram", "readonly").objectStore("ram").get(a);
      g.onsuccess = function() {
        var a = g.result && g.result[b];
        e(a ? module$core$src$utils$arrays.copyArray(a, c) : null);
      };
      g.onerror = function() {
        return f(g.error);
      };
    });
  });
};
BrowserStorage$$module$lib$src$storages$BrowserStorage.prototype.writeRAM = function(a, b, c) {
  return this.getDB().then(function(d) {
    return new Promise(function(e, f) {
      var g = d.transaction("ram", "readwrite").objectStore("ram"), h = g.get(a);
      h.onsuccess = function() {
        var d = h.result;
        d || (d = {id:a});
        d[b] = indexedDB.fake ? module$core$src$utils$arrays.copyArray(c) : c;
        var l = g.put(d);
        l.onsuccess = function() {
          return e();
        };
        l.onerror = function() {
          return f(l.error);
        };
      };
      h.onerror = function() {
        return f(h.error);
      };
    });
  });
};
BrowserStorage$$module$lib$src$storages$BrowserStorage.prototype.deleteRAM = function(a) {
  return this.getDB().then(function(b) {
    return new Promise(function(c, d) {
      var e = b.transaction("ram", "readwrite").objectStore("ram"), f = null != a ? e.delete(a) : e.clear();
      f.onsuccess = function() {
        return c();
      };
      f.onerror = function() {
        return d(f.error);
      };
    });
  });
};
BrowserStorage$$module$lib$src$storages$BrowserStorage.prototype.getDB = function() {
  this.dbPromise || (this.dbPromise = new Promise(function(a, b) {
    module$core$src$utils$logger.default.info("Opening IndexedDB database");
    var c = indexedDB.open("CFxNES", 1);
    c.onsuccess = function() {
      return a(c.result);
    };
    c.onerror = function() {
      return b(c.error);
    };
    c.onblocked = function() {
      return b(Error("IndexedDB database is blocked and cannot be upgraded."));
    };
    c.onupgradeneeded = function(a) {
      module$core$src$utils$logger.default.info("Upgrading IndexedDB database from version " + a.oldVersion + " to " + a.newVersion);
      c.result.createObjectStore("ram", {keyPath:"id"});
    };
  }));
  return this.dbPromise;
};
module$lib$src$storages$BrowserStorage.default = BrowserStorage$$module$lib$src$storages$BrowserStorage;
// Input 63
var module$lib$src$factories$StorageFactory = {}, FALLBACK$$module$lib$src$factories$StorageFactory = "memory", storages$$module$lib$src$factories$StorageFactory = {browser:module$lib$src$storages$BrowserStorage.default, memory:module$core$src$storages$MemoryStorage.default, external:module$core$src$storages$ExternalStorage.default}, StorageFactory$$module$lib$src$factories$StorageFactory = function() {
};
StorageFactory$$module$lib$src$factories$StorageFactory.prototype.getStorageId = function(a) {
  return "string" === typeof a ? a : "external";
};
StorageFactory$$module$lib$src$factories$StorageFactory.prototype.createStorage = function(a, b) {
  var c = storages$$module$lib$src$factories$StorageFactory[a];
  if (c) {
    return module$core$src$utils$logger.default.info('Creating "' + a + '" storage'), new c(b);
  }
  module$core$src$utils$logger.default.warn('Unsupported storage "' + a + '", using "' + FALLBACK$$module$lib$src$factories$StorageFactory + '" storage as fallback');
  return new storages$$module$lib$src$factories$StorageFactory[FALLBACK$$module$lib$src$factories$StorageFactory];
};
module$lib$src$factories$StorageFactory.default = StorageFactory$$module$lib$src$factories$StorageFactory;
// Input 64
var module$lib$src$devices$Mouse = {}, buttonAliases$$module$lib$src$devices$Mouse = {1:"left", 2:"right", 3:"middle", 4:"middle"}, Mouse$$module$lib$src$devices$Mouse = function(a) {
  this.dependencies = ["inputManager", "videoManager"];
  this.id = a;
};
Mouse$$module$lib$src$devices$Mouse.prototype.inject = function(a, b) {
  var c = this;
  this.inputManager = a;
  this.videoManager = b;
  window.addEventListener("mousemove", function(a) {
    return c.onMouseMove(a);
  });
  window.addEventListener("mousedown", function(a) {
    return c.onMouseDown(a);
  });
  window.addEventListener("mouseup", function(a) {
    return c.onMouseUp(a);
  });
};
Mouse$$module$lib$src$devices$Mouse.prototype.onMouseMove = function(a) {
  a = a || window.event;
  this.x = a.clientX;
  this.y = a.clientY;
};
Mouse$$module$lib$src$devices$Mouse.prototype.onMouseDown = function(a) {
  this.canProcessEvent() && this.processEvent(a, !0);
};
Mouse$$module$lib$src$devices$Mouse.prototype.onMouseUp = function(a) {
  this.canProcessEvent() && this.processEvent(a, !1);
};
Mouse$$module$lib$src$devices$Mouse.prototype.processEvent = function(a, b) {
  a = a || window.event;
  var c = buttonAliases$$module$lib$src$devices$Mouse[a.button || a.which];
  c && this.inputManager.processInput(this.id, c, b) && a.preventDefault();
};
Mouse$$module$lib$src$devices$Mouse.prototype.canProcessEvent = function() {
  return this.inputManager.isRecording() || this.isMouseInCanvasRect();
};
Mouse$$module$lib$src$devices$Mouse.prototype.isMouseInCanvasRect = function() {
  var a = this.videoManager.getOutputRect();
  return this.x >= a.left && this.x <= a.right && this.y >= a.top && this.y <= a.bottom;
};
Mouse$$module$lib$src$devices$Mouse.prototype.readState = function(a) {
  a.cursorX = this.x;
  a.cursorY = this.y;
};
Mouse$$module$lib$src$devices$Mouse.prototype.getInputName = function(a) {
  return module$core$src$utils$format.capitalize(a) + " mouse button";
};
module$lib$src$devices$Mouse.default = Mouse$$module$lib$src$devices$Mouse;
// Input 65
var module$lib$src$devices$Gamepad = {}, axisAliases$$module$lib$src$devices$Gamepad = ["left-stick-x", "left-stick-y", "right-stick-x", "right-stick-y"], buttonAliases$$module$lib$src$devices$Gamepad = "a b x y left-bumper right-bumper left-trigger right-trigger back start left-stick rigt-stick dpad-up dpad-down dpad-left dpad-right guide".split(" "), Gamepad$$module$lib$src$devices$Gamepad = function(a) {
  this.dependencies = ["inputManager"];
  this.id = a;
  this.gamepads = {};
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.inject = function(a) {
  this.inputManager = a;
  this.scheduleNextUpdate();
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.scheduleNextUpdate = function() {
  if (navigator.getGamepads) {
    var a = this;
    requestAnimationFrame(function() {
      return a.updateGamepads();
    });
  }
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.updateGamepads = function() {
  var a = this.readGamepads();
  null != this.gamepads && this.detectChanges(this.gamepads, a);
  this.gamepads = a;
  this.scheduleNextUpdate();
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.readGamepads = function() {
  for (var a = {}, b = navigator.getGamepads(), c = 0;c < b.length;c++) {
    var d = b[c];
    a[c] = d && {index:d.index, mapping:d.mapping, axes:d.axes.map(function(a) {
      return .5 < a ? 1 : -.5 > a ? -1 : 0;
    }), buttons:d.buttons.map(function(a) {
      return a.pressed;
    })};
  }
  return a;
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.detectChanges = function(a, b) {
  for (var c in a) {
    var d = a[c], e = b[c];
    if (d && e) {
      for (var f = d.axes, g = e.axes, h = 0;h < Math.min(f.length, g.length);h++) {
        if (f[h] !== g[h]) {
          this.onAxisChange(d, h, f[h], g[h]);
        }
      }
      f = d.buttons;
      e = e.buttons;
      for (h = 0;h < Math.min(f.length, e.length);h++) {
        if (f[h] !== e[h]) {
          this.onButtonChange(d, h, e[h]);
        }
      }
    }
  }
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.onAxisChange = function(a, b, c, d) {
  c && (c = this.createAxisInput(a, b, c), this.processInput(a, c, !1));
  d && (c = this.createAxisInput(a, b, d), this.processInput(a, c, !0));
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.onButtonChange = function(a, b, c) {
  b = this.createButtonInput(a, b);
  this.processInput(a, b, c);
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.createAxisInput = function(a, b, c) {
  var d;
  "standard" === a.mapping && (d = axisAliases$$module$lib$src$devices$Gamepad[b]);
  d || (d = "axis-" + b);
  return this.createInput(a, d + (0 < c ? "+" : "-"));
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.createButtonInput = function(a, b) {
  var c;
  "standard" === a.mapping && (c = buttonAliases$$module$lib$src$devices$Gamepad[b]);
  c || (c = "button-" + b);
  return this.createInput(a, c);
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.createInput = function(a, b) {
  return a.index + "/" + b;
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.processInput = function(a, b, c) {
  this.inputManager.processInput(this.id, b, c);
};
Gamepad$$module$lib$src$devices$Gamepad.prototype.getInputName = function(a) {
  var b = $jscomp.makeIterator(a.split("/"));
  a = b.next().value;
  b = b.next().value;
  return "GP" + a + " / " + module$core$src$utils$format.capitalize(b.replace("-", " ")).replace("Dpad", "D-pad").replace("X ", "X-").replace("Y ", "Y-");
};
module$lib$src$devices$Gamepad.default = Gamepad$$module$lib$src$devices$Gamepad;
// Input 66
var module$lib$src$devices$Keyboard = {}, keyCodeAliases$$module$lib$src$devices$Keyboard = {48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z", 186:";", 187:"=", 188:",", 189:"-", 190:".", 191:"/", 192:"`", 219:"[", 220:"\\", 221:"]", 222:"'", 112:"f1", 113:"f2",
114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 121:"f10", 122:"f11", 123:"f12", 13:"enter", 16:"shift", 17:"ctrl", 18:"alt", 8:"backspace", 9:"tab", 27:"escape", 32:"space", 37:"left", 38:"up", 39:"right", 40:"down", 46:"delete", 45:"insert", 36:"home", 35:"end", 33:"page-up", 34:"page-down", 19:"pause", 20:"caps-lock", 144:"num-lock", 145:"scroll-lock", 96:"numpad-0", 97:"numpad-1", 98:"numpad-2", 99:"numpad-3", 100:"numpad-4", 101:"numpad-5", 102:"numpad-6", 103:"numpad-7",
104:"numpad-8", 105:"numpad-9", 106:"multiply", 107:"add", 109:"subtract", 110:"decimal-point", 111:"divide"}, Keyboard$$module$lib$src$devices$Keyboard = function(a) {
  this.dependencies = ["inputManager", "videoManager"];
  this.id = a;
};
Keyboard$$module$lib$src$devices$Keyboard.prototype.inject = function(a, b) {
  var c = this;
  this.inputManager = a;
  this.videoManager = b;
  window.addEventListener("keydown", function(a) {
    return c.onKeyDown(a);
  });
  window.addEventListener("keyup", function(a) {
    return c.onKeyUp(a);
  });
};
Keyboard$$module$lib$src$devices$Keyboard.prototype.onKeyDown = function(a) {
  this.canProcessEvent() && this.processEvent(a, !0);
};
Keyboard$$module$lib$src$devices$Keyboard.prototype.onKeyUp = function(a) {
  this.canProcessEvent() && this.processEvent(a, !1);
};
Keyboard$$module$lib$src$devices$Keyboard.prototype.processEvent = function(a, b) {
  a = a || window.event;
  var c = keyCodeAliases$$module$lib$src$devices$Keyboard[a.keyCode || a.which];
  c && this.inputManager.processInput(this.id, c, b) && a.preventDefault();
};
Keyboard$$module$lib$src$devices$Keyboard.prototype.canProcessEvent = function() {
  return this.inputManager.isRecording() || !this.isInputElementActive();
};
Keyboard$$module$lib$src$devices$Keyboard.prototype.isInputElementActive = function() {
  var a = document.activeElement;
  if (!a) {
    return !1;
  }
  var b = a.tagName, a = a.type && a.type.toLowerCase();
  return "INPUT" === b && ("text" === a || "search" === a);
};
Keyboard$$module$lib$src$devices$Keyboard.prototype.getInputName = function(a) {
  return module$core$src$utils$format.capitalize(a.replace("-", " "));
};
module$lib$src$devices$Keyboard.default = Keyboard$$module$lib$src$devices$Keyboard;
// Input 67
var module$lib$src$factories$DeviceFactory = {}, sourceDevices$$module$lib$src$factories$DeviceFactory = {gamepad:module$lib$src$devices$Gamepad.default, keyboard:module$lib$src$devices$Keyboard.default, mouse:module$lib$src$devices$Mouse.default}, targetDevices$$module$lib$src$factories$DeviceFactory = {joypad:module$lib$src$devices$adapters$JoypadAdapter.default, zapper:module$lib$src$devices$adapters$ZapperAdapter.default}, DeviceFactory$$module$lib$src$factories$DeviceFactory = function(a) {
  module$core$src$factories$DeviceFactory.default.call(this, a);
};
$jscomp.inherits(DeviceFactory$$module$lib$src$factories$DeviceFactory, module$core$src$factories$DeviceFactory.default);
DeviceFactory$$module$lib$src$factories$DeviceFactory.prototype.createSourceDevice = function(a) {
  var b = sourceDevices$$module$lib$src$factories$DeviceFactory[a];
  if (b) {
    return module$core$src$utils$logger.default.info('Creating "' + a + '" device'), this.injector.inject(new b(a));
  }
  throw Error('Unsupported source device "' + a + '"');
};
DeviceFactory$$module$lib$src$factories$DeviceFactory.prototype.createTargetDevice = function(a) {
  var b = this.createDevice(a), c = targetDevices$$module$lib$src$factories$DeviceFactory[a];
  if (c) {
    return module$core$src$utils$logger.default.info('Creating adapter of "' + a + '" device'), this.injector.inject(new c(b));
  }
  throw Error('Unsupported target device "' + a + '" adapter');
};
module$lib$src$factories$DeviceFactory.default = DeviceFactory$$module$lib$src$factories$DeviceFactory;
// Input 68
var module$lib$src$managers$ExecutionManager = {}, regionAliases$$module$lib$src$managers$ExecutionManager = {ntsc:module$core$src$common$Region.default.NTSC, pal:module$core$src$common$Region.default.PAL}, ExecutionManager$$module$lib$src$managers$ExecutionManager = function() {
  this.dependencies = ["nes", "videoManager", "audioManager", "inputManager"];
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.inject = function(a, b, c, d) {
  this.nes = a;
  this.videoManager = b;
  this.audioManager = c;
  this.inputManager = d;
  this.initFPS();
  this.initCallbacks();
  this.initListeners();
  this.setDefaults();
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.initCallbacks = function() {
  var a = this;
  this.stepCallback = function() {
    return a.step();
  };
  this.drawCallback = function() {
    return a.videoManager.drawFrame();
  };
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.initListeners = function() {
  var a = this;
  document.addEventListener("visibilitychange", function() {
    return a.onVisibilityChange();
  });
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.setDefaults = function() {
  module$core$src$utils$logger.default.info("Using default execution configuration");
  this.setRegion();
  this.setSpeed();
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.start = function() {
  if (!this.isRunning()) {
    module$core$src$utils$logger.default.info("Starting execution");
    var a = 1E3 / (this.speed * this.getTargetFPS());
    this.executionId = setInterval(this.stepCallback, a);
    this.audioManager.setPlaying(!0);
  }
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.stop = function() {
  this.isRunning() && (module$core$src$utils$logger.default.info("Stopping execution"), clearInterval(this.executionId), this.executionId = null, this.audioManager.setPlaying(!1));
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.restart = function() {
  this.stop();
  this.start();
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.isRunning = function() {
  return null != this.executionId;
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.step = function() {
  this.inputManager.updateState();
  this.videoManager.renderFrame();
  this.updateFPS();
  cancelAnimationFrame(this.drawId);
  this.drawId = requestAnimationFrame(this.drawCallback);
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.onVisibilityChange = function() {
  document.hidden ? (module$core$src$utils$logger.default.info("Lost visibility"), this.autoPaused = this.isRunning(), this.stop()) : (module$core$src$utils$logger.default.info("Gained visibility"), this.autoPaused && this.start());
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.hardReset = function() {
  module$core$src$utils$logger.default.info("Hard reset");
  this.nes.pressPower();
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.softReset = function() {
  module$core$src$utils$logger.default.info("Soft reset");
  this.nes.pressReset();
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.setRegion = function(a) {
  a = void 0 === a ? null : a;
  this.region !== a && (module$core$src$utils$logger.default.info('Setting region to "' + (a || "autodetection mode") + '"'), this.region = a, this.nes.setRegion(regionAliases$$module$lib$src$managers$ExecutionManager[a]), this.isRunning() && this.restart());
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.getRegion = function() {
  return this.region;
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.setSpeed = function(a) {
  a = void 0 === a ? 1 : a;
  this.speed !== a && (module$core$src$utils$logger.default.info("Setting emulation speed to " + a + "x"), this.speed = a, this.audioManager.setSpeed(a), this.isRunning() && this.restart());
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.getSpeed = function() {
  return this.speed;
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.initFPS = function() {
  this.fpsIndex = this.fpsTime = 0;
  this.fpsBuffer = Array(10);
  module$core$src$utils$arrays.zeroArray(this.fpsBuffer);
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.updateFPS = function() {
  var a = Date.now();
  this.fpsBuffer[this.fpsIndex] = 1E3 / (a - this.fpsTime);
  this.fpsIndex = (this.fpsIndex + 1) % this.fpsBuffer.length;
  this.fpsTime = a;
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.getFPS = function() {
  return this.fpsBuffer.reduce(function(a, b) {
    return a + b;
  }) / this.fpsBuffer.length;
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.getTargetFPS = function() {
  return module$core$src$common$Region.default.getParams(this.nes.getRegion()).framesPerSecond;
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.readConfiguration = function(a) {
  a.region = this.getRegion();
  a.speed = this.getSpeed();
};
ExecutionManager$$module$lib$src$managers$ExecutionManager.prototype.writeConfiguration = function(a) {
  void 0 !== a.region && this.setRegion(a.region);
  void 0 !== a.speed && this.setSpeed(a.speed);
};
module$lib$src$managers$ExecutionManager.default = ExecutionManager$$module$lib$src$managers$ExecutionManager;
// Input 69
var module$lib$src$managers$CartridgeManager = {}, FILE_SIZE_LIMIT$$module$lib$src$managers$CartridgeManager = 10485760, CartridgeManager$$module$lib$src$managers$CartridgeManager = function() {
  this.dependencies = ["nes", "cartridgeFactory", "executionManager", "persistenceManager"];
};
CartridgeManager$$module$lib$src$managers$CartridgeManager.prototype.inject = function(a, b, c, d) {
  this.nes = a;
  this.cartridgeFactory = b;
  this.executionManager = c;
  this.persistenceManager = d;
};
CartridgeManager$$module$lib$src$managers$CartridgeManager.prototype.loadCartridge = function(a) {
  var b = this;
  module$core$src$utils$logger.default.info("Loding cartridge from file");
  return new Promise(function(c, d) {
    if (a.size > FILE_SIZE_LIMIT$$module$lib$src$managers$CartridgeManager) {
      d(Error("Input file is too large (" + module$core$src$utils$format.formatSize(a.size) + ")."));
    } else {
      var e = new FileReader;
      e.onload = function(a) {
        b.insertCartridge(a.target.result).then(c, d);
      };
      e.onerror = function(a) {
        d(Error(a.target.error || "Unknown error"));
      };
      e.readAsArrayBuffer(a);
    }
  });
};
CartridgeManager$$module$lib$src$managers$CartridgeManager.prototype.downloadCartridge = function(a) {
  var b = this;
  module$core$src$utils$logger.default.info('Downloading cartridge from "' + a + '"');
  return new Promise(function(c, d) {
    var e = new XMLHttpRequest;
    e.open("GET", a, !0);
    e.responseType = "arraybuffer";
    e.onload = function() {
      200 === e.status ? b.insertCartridge(e.response).then(c, d) : 0 === e.status ? d(Error("Unable to connect to server.")) : d(Error("Unable to download file (server response: " + e.status + " " + e.statusText + ")."));
    };
    e.onerror = function() {
      d(Error("Unable to connect to server."));
    };
    e.send();
  });
};
CartridgeManager$$module$lib$src$managers$CartridgeManager.prototype.insertCartridge = function(a) {
  var b = this;
  return new Promise(function(c, d) {
    var e = b.cartridgeFactory.fromArrayBuffer(a);
    b.removeCartridge().then(function() {
      module$core$src$utils$logger.default.info("Inserting cartridge");
      b.nes.insertCartridge(e);
      return b.persistenceManager.loadCartridgeData().catch(function(a) {
        module$core$src$utils$logger.default.error("Error during load of cartridge data", a);
      });
    }).then(function() {
      b.executionManager.isRunning() && b.executionManager.restart();
      c();
    }).catch(d);
  });
};
CartridgeManager$$module$lib$src$managers$CartridgeManager.prototype.removeCartridge = function() {
  if (this.isCartridgeInserted()) {
    var a = this;
    return new Promise(function(b, c) {
      a.persistenceManager.saveCartridgeData().then(function() {
        module$core$src$utils$logger.default.info("Removing cartridge");
        a.nes.removeCartridge();
        b();
      }, function(a) {
        module$core$src$utils$logger.default.error("Error during save of cartridge data", a);
      }).catch(c);
    });
  }
  return Promise.resolve();
};
CartridgeManager$$module$lib$src$managers$CartridgeManager.prototype.isCartridgeInserted = function() {
  return this.nes.isCartridgeInserted();
};
module$lib$src$managers$CartridgeManager.default = CartridgeManager$$module$lib$src$managers$CartridgeManager;
// Input 70
var module$lib$src$managers$AudioManager = {}, channelAliases$$module$lib$src$managers$AudioManager = {pulse1:0, pulse2:1, triangle:2, noise:3, dmc:4}, channels$$module$lib$src$managers$AudioManager = Object.keys(channelAliases$$module$lib$src$managers$AudioManager), AudioManager$$module$lib$src$managers$AudioManager = function() {
  this.dependencies = ["nes"];
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.inject = function(a) {
  module$core$src$utils$logger.default.info("Initializing audio manager");
  this.nes = a;
  this.isSupported() && this.createAudio();
  this.setDefaults();
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.setDefaults = function() {
  module$core$src$utils$logger.default.info("Using default audio configuration");
  this.setEnabled();
  this.setVolume();
  for (var a = $jscomp.makeIterator(channels$$module$lib$src$managers$AudioManager), b = a.next();!b.done;b = a.next()) {
    this.setChannelEnabled(b.value);
  }
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.isSupported = function() {
  return "undefined" !== typeof AudioContext && null !== AudioContext;
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.createAudio = function() {
  var a = this;
  module$core$src$utils$logger.default.info("Creating audio context");
  this.context = new AudioContext;
  this.processor = this.context.createScriptProcessor(4096, 0, 1);
  this.processor.onaudioprocess = function(b) {
    return a.updateAudio(b);
  };
  this.gain = this.context.createGain();
  this.gain.connect(this.context.destination);
  this.nes.initAudioRecording(this.processor.bufferSize, this.context.sampleRate);
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.updateAudio = function(a) {
  a = a.outputBuffer;
  var b = this.nes.readAudioBuffer();
  a.copyToChannel ? a.copyToChannel(b, 0) : module$core$src$utils$arrays.copyArray(b, a.getChannelData(0));
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.setEnabled = function(a) {
  a = void 0 === a ? !0 : a;
  this.enabled !== a && (module$core$src$utils$logger.default.info("Audio " + (a ? "on" : "off")), this.enabled = a, this.updateState());
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.isEnabled = function() {
  return this.enabled;
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.setPlaying = function(a) {
  this.playing !== a && (module$core$src$utils$logger.default.info("Audio " + (a ? "resumed" : "paused")), this.playing = a, this.updateState());
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.setSpeed = function(a) {
  this.speed !== a && (module$core$src$utils$logger.default.info("Setting audio recording speed to " + a + "x"), this.speed = a, this.updateState());
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.updateState = function() {
  this.isSupported() && (this.enabled && this.playing ? (this.nes.startAudioRecording(this.context.sampleRate / this.speed), this.processor.connect(this.gain)) : (this.nes.stopAudioRecording(), this.processor.disconnect()));
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.setChannelEnabled = function(a, b) {
  b = void 0 === b ? !0 : b;
  var c = channelAliases$$module$lib$src$managers$AudioManager[a];
  null != c && this.isChannelEnabled(a) !== b && (module$core$src$utils$logger.default.info('Audio channel "' + a + '" ' + (b ? "on" : "off")), this.nes.setChannelEnabled(c, b));
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.isChannelEnabled = function(a) {
  return this.nes.isChannelEnabled(channelAliases$$module$lib$src$managers$AudioManager[a]);
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.setVolume = function(a) {
  a = Math.max(0, Math.min(void 0 === a ? .5 : a, 1));
  this.getVolume() != a && (module$core$src$utils$logger.default.info("Setting audio volume to " + ~~(100 * a) + "%"), this.isSupported() && (this.gain.gain.value = a), this.volume = a);
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.getVolume = function() {
  return this.volume;
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.readConfiguration = function(a) {
  a.audioEnabled = this.isEnabled();
  a.audioVolume = this.getVolume();
  a.audioChannels = module$core$src$utils$arrays.arrayToProperties(channels$$module$lib$src$managers$AudioManager, this.isChannelEnabled, this);
};
AudioManager$$module$lib$src$managers$AudioManager.prototype.writeConfiguration = function(a) {
  void 0 !== a.audioEnabled && this.setEnabled(a.audioEnabled);
  void 0 !== a.audioVolume && this.setVolume(a.audioVolume);
  void 0 !== a.audioChannels && module$core$src$utils$objects.forEachProperty(a.audioChannels, this.setChannelEnabled, this);
};
module$lib$src$managers$AudioManager.channels = channels$$module$lib$src$managers$AudioManager;
module$lib$src$managers$AudioManager.default = AudioManager$$module$lib$src$managers$AudioManager;
// Input 71
var module$lib$src$managers$InputManager = {}, ports$$module$lib$src$managers$InputManager = [1, 2], sourceIds$$module$lib$src$managers$InputManager = ["keyboard", "mouse", "gamepad"], targetIds$$module$lib$src$managers$InputManager = ["joypad", "zapper"], InputManager$$module$lib$src$managers$InputManager = function() {
  this.dependencies = ["nes", "deviceFactory"];
};
InputManager$$module$lib$src$managers$InputManager.prototype.inject = function(a, b) {
  module$core$src$utils$logger.default.info("Initializing input manager");
  this.nes = a;
  this.deviceFactory = b;
  this.initSources();
  this.initTargets();
  this.setDefaults();
};
InputManager$$module$lib$src$managers$InputManager.prototype.setDefaults = function() {
  module$core$src$utils$logger.default.info("Using default input configuration");
  this.clearMapping();
  this.connectTarget(1, "joypad");
  this.connectTarget(2, "zapper");
  this.mapInput(1, "joypad", "a", "keyboard", "c");
  this.mapInput(1, "joypad", "b", "keyboard", "x");
  this.mapInput(1, "joypad", "start", "keyboard", "enter");
  this.mapInput(1, "joypad", "select", "keyboard", "shift");
  this.mapInput(1, "joypad", "up", "keyboard", "up");
  this.mapInput(1, "joypad", "down", "keyboard", "down");
  this.mapInput(1, "joypad", "left", "keyboard", "left");
  this.mapInput(1, "joypad", "right", "keyboard", "right");
  this.mapInput(2, "zapper", "trigger", "mouse", "left");
};
InputManager$$module$lib$src$managers$InputManager.prototype.initSources = function() {
  this.sources = {};
  for (var a = $jscomp.makeIterator(sourceIds$$module$lib$src$managers$InputManager), b = a.next();!b.done;b = a.next()) {
    b = b.value, module$core$src$utils$logger.default.info('Registering source input device "' + b + '"'), this.sources[b] = this.deviceFactory.createSourceDevice(b);
  }
};
InputManager$$module$lib$src$managers$InputManager.prototype.readSourcesState = function() {
  var a = {}, b;
  for (b in this.sources) {
    var c = this.sources[b];
    c.readState && c.readState(a);
  }
  return a;
};
InputManager$$module$lib$src$managers$InputManager.prototype.initTargets = function() {
  this.targets = {};
  for (var a = $jscomp.makeIterator(ports$$module$lib$src$managers$InputManager), b = a.next();!b.done;b = a.next()) {
    b = b.value;
    this.targets[b] = {};
    for (var c = $jscomp.makeIterator(targetIds$$module$lib$src$managers$InputManager), d = c.next();!d.done;d = c.next()) {
      d = d.value, module$core$src$utils$logger.default.info('Registering target input device "' + d + '" on port ' + b), this.targets[b][d] = this.deviceFactory.createTargetDevice(d);
    }
  }
};
InputManager$$module$lib$src$managers$InputManager.prototype.connectTarget = function(a, b) {
  if (this.getConnectedTarget(a) !== b) {
    module$core$src$utils$logger.default.info("Setting target input device on port " + a + ' to "' + (b || "none") + '"');
    var c = null != b ? this.targets[a][b].getDevice() : null;
    this.nes.connectInputDevice(a, c);
  }
};
InputManager$$module$lib$src$managers$InputManager.prototype.getConnectedTarget = function(a) {
  var b = this.targets[a], c;
  for (c in b) {
    var d = b[c];
    if (this.nes.getConnectedInputDevice(a) === d.getDevice()) {
      return c;
    }
  }
};
InputManager$$module$lib$src$managers$InputManager.prototype.updateTargetsState = function(a) {
  for (var b in this.targets) {
    var c = this.targets[b], d;
    for (d in c) {
      var e = c[d];
      e.stateChanged && e.stateChanged(a);
    }
  }
};
InputManager$$module$lib$src$managers$InputManager.prototype.processInput = function(a, b, c) {
  return this.isRecording() ? (c || this.finishRecording(a, b), !0) : this.forwardInput(a, b, c);
};
InputManager$$module$lib$src$managers$InputManager.prototype.forwardInput = function(a, b, c) {
  if (a = module$core$src$utils$objects.getProperty(this.targetsMapping, a, b)) {
    var d = $jscomp.makeIterator(a);
    a = d.next().value;
    b = d.next().value;
    d = d.next().value;
    this.targets[a][b].inputChanged(d, c);
    return !0;
  }
  return !1;
};
InputManager$$module$lib$src$managers$InputManager.prototype.updateState = function() {
  this.updateTargetsState(this.readSourcesState());
};
InputManager$$module$lib$src$managers$InputManager.prototype.recordInput = function(a) {
  module$core$src$utils$logger.default.info("Recording input");
  this.recordCallback = a;
};
InputManager$$module$lib$src$managers$InputManager.prototype.isRecording = function() {
  return null != this.recordCallback;
};
InputManager$$module$lib$src$managers$InputManager.prototype.finishRecording = function(a, b) {
  module$core$src$utils$logger.default.info('Caught input "' + b + '" from "' + a + '"');
  this.recordCallback(a, b);
  this.recordCallback = null;
};
InputManager$$module$lib$src$managers$InputManager.prototype.clearMapping = function() {
  this.sourcesMapping = {};
  this.targetsMapping = {};
};
InputManager$$module$lib$src$managers$InputManager.prototype.mapInput = function(a, b, c, d, e) {
  module$core$src$utils$logger.default.info('Mapping "' + e + '" of "' + d + '" to "' + c + '" of "' + b + '" on port ' + a);
  this.unmapInput(a, b, c, d, e);
  module$core$src$utils$objects.setProperty(this.sourcesMapping, a, b, c, [d, e]);
  module$core$src$utils$objects.setProperty(this.targetsMapping, d, e, [a, b, c]);
};
InputManager$$module$lib$src$managers$InputManager.prototype.unmapInput = function(a, b, c, d, e) {
  var f = module$core$src$utils$objects.getProperty(this.sourcesMapping, a, b, c), g = module$core$src$utils$objects.getProperty(this.targetsMapping, d, e);
  module$core$src$utils$objects.setProperty(this.sourcesMapping, a, b, c, null);
  module$core$src$utils$objects.setProperty(this.targetsMapping, d, e, null);
  g && module$core$src$utils$objects.setProperty(this.sourcesMapping, g[0], g[1], g[2], null);
  f && module$core$src$utils$objects.setProperty(this.targetsMapping, f[0], f[1], null);
};
InputManager$$module$lib$src$managers$InputManager.prototype.getMappedInputName = function(a, b, c) {
  if (a = module$core$src$utils$objects.getProperty(this.sourcesMapping, a, b, c)) {
    return b = $jscomp.makeIterator(a), a = b.next().value, b = b.next().value, this.sources[a].getInputName(b);
  }
};
InputManager$$module$lib$src$managers$InputManager.prototype.readConfiguration = function(a) {
  a.inputDevices = module$core$src$utils$arrays.arrayToProperties(ports$$module$lib$src$managers$InputManager, this.getConnectedTarget, this);
  a.inputMapping = this.targetsMapping;
};
InputManager$$module$lib$src$managers$InputManager.prototype.writeConfiguration = function(a) {
  void 0 !== a.inputDevices && module$core$src$utils$objects.forEachProperty(a.inputDevices, this.connectTarget, this);
  if (void 0 !== a.inputMapping) {
    var b = this;
    this.clearMapping();
    module$core$src$utils$objects.forEachProperty(a.inputMapping, function(a, d) {
      module$core$src$utils$objects.forEachProperty(d, function(d, f) {
        if (f) {
          var g = $jscomp.makeIterator(f), h = g.next().value, k = g.next().value, g = g.next().value;
          b.mapInput(h, k, g, a, d);
        }
      }, b);
    }, this);
  }
};
module$lib$src$managers$InputManager.ports = ports$$module$lib$src$managers$InputManager;
module$lib$src$managers$InputManager.sourceIds = sourceIds$$module$lib$src$managers$InputManager;
module$lib$src$managers$InputManager.targetIds = targetIds$$module$lib$src$managers$InputManager;
module$lib$src$managers$InputManager.default = InputManager$$module$lib$src$managers$InputManager;
// Input 72
var module$lib$src$managers$VideoManager = {}, fullscreenStyle$$module$lib$src$managers$VideoManager = {position:"fixed", top:"0", right:"0", bottom:"0", left:"0", margin:"auto", width:"auto", height:"auto"}, VideoManager$$module$lib$src$managers$VideoManager = function() {
  this.dependencies = ["nes", "rendererFactory", "paletteFactory", "screenfull"];
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.inject = function(a, b, c, d) {
  module$core$src$utils$logger.default.info("Initializing video manager");
  this.nes = a;
  this.rendererFactory = b;
  this.paletteFactory = c;
  this.screenfull = d;
  this.initListeners();
  this.setDefaults();
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.initListeners = function() {
  var a = this;
  if (this.screenfull) {
    var b = this;
    document.addEventListener(this.screenfull.raw.fullscreenchange, function() {
      return b.onFullscreenChange();
    });
  }
  window.addEventListener("deviceorientation", function() {
    return a.onResolutionChange();
  });
  window.addEventListener("resize", function() {
    return a.onResolutionChange();
  });
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setDefaults = function() {
  module$core$src$utils$logger.default.info("Using default video configuration");
  this.setDebugging();
  this.setSmoothing();
  this.setScale();
  this.setPalette();
  this.setRenderer();
  this.setFullscreenMode();
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setCanvas = function(a) {
  module$core$src$utils$logger.default.info("Setting video output to " + a);
  if (this.canvas = a) {
    this.createRenderer(), this.updateRendererParams(), this.updateCanvasSize(), this.updateCanvasStyle(), this.drawFrame();
  }
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.updateCanvasSize = function() {
  this.canvas.width = this.getTargetScale() * module$core$src$common$constants.VIDEO_WIDTH * this.getWidthMultiplier();
  this.canvas.height = this.getTargetScale() * module$core$src$common$constants.VIDEO_HEIGHT;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.updateCanvasStyle = function() {
  var a = this.canvas.style;
  if (this.isFullscreen()) {
    module$core$src$utils$objects.copyProperties(fullscreenStyle$$module$lib$src$managers$VideoManager, a);
    var b = this.fullscreenMode.split("|");
    0 <= b.indexOf("fill-screen") && (a.width = "100%", a.height = "100%", 0 <= b.indexOf("keep-aspect-ratio") && (this.canvas.width / this.canvas.height * screen.height > screen.width ? a.height = "auto" : a.width = "auto"));
  } else {
    for (var b = $jscomp.makeIterator(Object.keys(fullscreenStyle$$module$lib$src$managers$VideoManager)), c = b.next();!c.done;c = b.next()) {
      a.removeProperty(c.value);
    }
  }
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getOutputRect = function() {
  if (this.canvas) {
    var a = this.getCanvasRect();
    this.debugging && (a.right -= (a.right - a.left) / 2);
    return a;
  }
  return this.getEmptyRect();
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getCanvasRect = function() {
  var a = this.canvas.getBoundingClientRect();
  return {top:a.top, right:a.right, bottom:a.bottom, left:a.left};
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getEmptyRect = function() {
  return {top:-1, right:-1, bottom:-1, left:-1};
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.onResolutionChange = function() {
  this.canvas && (this.updateRendererParams(), this.updateCanvasSize(), this.updateCanvasStyle(), this.drawFrame());
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.isRendererSupported = function(a) {
  return this.rendererFactory.isRendererSupported(a);
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setRenderer = function(a) {
  a = void 0 === a ? "webgl" : a;
  this.rendererId !== a && (module$core$src$utils$logger.default.info('Using "' + a + '" video renderer'), this.rendererId = a, this.canvas && (this.createRenderer(), this.updateRendererParams()));
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getRenderer = function() {
  return this.rendererId;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.createRenderer = function() {
  this.renderer = this.rendererFactory.createRenderer(this.rendererId, this.canvas);
  this.frame = this.renderer.createFrame(0, 0, module$core$src$common$constants.VIDEO_WIDTH, module$core$src$common$constants.VIDEO_HEIGHT);
  this.debugFrame = this.renderer.createFrame(module$core$src$common$constants.VIDEO_WIDTH, 0, module$core$src$common$constants.VIDEO_WIDTH, module$core$src$common$constants.VIDEO_HEIGHT);
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.updateRendererParams = function() {
  this.renderer.setSmoothing(this.smoothing);
  this.renderer.setScale(this.getTargetScale());
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.renderFrame = function() {
  this.nes.renderFrame(this.frame.data);
  this.debugging && this.nes.renderDebugFrame(this.debugFrame.data);
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.drawFrame = function() {
  this.renderer.begin();
  this.renderer.drawFrame(this.frame);
  this.debugging && this.renderer.drawFrame(this.debugFrame);
  this.renderer.end();
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setPalette = function(a) {
  a = void 0 === a ? "fceux" : a;
  this.paletteId !== a && (module$core$src$utils$logger.default.info('Setting video palette to "' + a + '"'), this.paletteId = a, this.nes.setPalette(this.paletteFactory.createPalette(a)), this.canvas && (this.renderFrame(), this.drawFrame()));
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getPalette = function() {
  return this.paletteId;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setDebugging = function(a) {
  a = void 0 === a ? !1 : a;
  this.debugging !== a && (module$core$src$utils$logger.default.info("Setting video debugging to " + (a ? "on" : "off")), this.debugging = a, this.canvas && (this.updateRendererParams(), this.updateCanvasSize(), this.updateCanvasStyle(), this.renderFrame(), this.drawFrame()));
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.isDebugging = function() {
  return this.debugging;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getWidthMultiplier = function() {
  return this.debugging ? 2 : 1;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setSmoothing = function(a) {
  a = void 0 === a ? !1 : a;
  this.smoothing !== a && (module$core$src$utils$logger.default.info("Setting video smoothing to " + (a ? "on" : "off")), this.smoothing = a, this.canvas && (this.updateRendererParams(), this.drawFrame()));
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.isSmoothing = function() {
  return this.smoothing;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setScale = function(a) {
  a = void 0 === a ? 1 : a;
  this.scale !== a && 1 <= a && (a <= this.getMaxScale() || this.scale && a < this.scale) && (module$core$src$utils$logger.default.info("Setting video scale to " + a), this.scale = a, this.canvas && (this.updateRendererParams(), this.updateCanvasSize(), this.updateCanvasStyle(), this.drawFrame()));
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getScale = function() {
  return this.scale;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getTargetScale = function() {
  return this.isFullscreen() ? this.getMaxScale() : this.scale;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getMaxScale = function() {
  var a = screen.width / (module$core$src$common$constants.VIDEO_WIDTH * this.getWidthMultiplier());
  return Math.max(1, ~~Math.min(a, screen.height / module$core$src$common$constants.VIDEO_HEIGHT));
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setFullscreen = function(a) {
  a ? this.enterFullscreen() : this.leaveFullscreen();
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.enterFullscreen = function() {
  this.checkScreenfullAvailable();
  this.screenfull.enabled && !this.isFullscreen() && (module$core$src$utils$logger.default.info("Entering fullscreen"), this.screenfull.request(this.canvas.parentElement));
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.leaveFullscreen = function() {
  this.checkScreenfullAvailable();
  this.screenfull.enabled && this.isFullscreen() && (module$core$src$utils$logger.default.info("Leaving fullscreen"), this.screenfull.exit());
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.onFullscreenChange = function() {
  module$core$src$utils$logger.default.info("Fullscreen " + (this.isFullscreen() ? "enabled" : "disabled"));
  this.updateRendererParams();
  this.updateCanvasSize();
  this.updateCanvasStyle();
  this.drawFrame();
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.isFullscreen = function() {
  return this.screenfull && this.screenfull.isFullscreen;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.setFullscreenMode = function(a) {
  a = void 0 === a ? "fill-screen|keep-aspect-ratio" : a;
  this.fullscreenMode !== a && (module$core$src$utils$logger.default.info('Setting fullsreen mode to "' + a + '"'), this.fullscreenMode = a, this.canvas && this.updateCanvasStyle());
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.getFullscreenMode = function() {
  return this.fullscreenMode;
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.checkScreenfullAvailable = function() {
  if (null == this.screenfull) {
    throw Error("Unable to switch fullscreen: screenfull library is not available.");
  }
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.readConfiguration = function(a) {
  a.videoDebugging = this.isDebugging();
  a.videoSmoothing = this.isSmoothing();
  a.videoScale = this.getScale();
  a.videoPalette = this.getPalette();
  a.videoRenderer = this.getRenderer();
  a.fullscreenMode = this.getFullscreenMode();
};
VideoManager$$module$lib$src$managers$VideoManager.prototype.writeConfiguration = function(a) {
  void 0 !== a.videoDebugging && this.setDebugging(a.videoDebugging);
  void 0 !== a.videoSmoothing && this.setSmoothing(a.videoSmoothing);
  void 0 !== a.videoScale && this.setScale(a.videoScale);
  void 0 !== a.videoPalette && this.setPalette(a.videoPalette);
  void 0 !== a.videoRenderer && this.setRenderer(a.videoRenderer);
  void 0 !== a.fullscreenMode && this.setFullscreenMode(a.fullscreenMode);
};
module$lib$src$managers$VideoManager.default = VideoManager$$module$lib$src$managers$VideoManager;
// Input 73
var module$lib$src$managers$PersistenceManager = {}, PersistenceManager$$module$lib$src$managers$PersistenceManager = function() {
  var a = this;
  this.dependencies = "nes storageFactory executionManager videoManager audioManager inputManager".split(" ");
  this.saveOnClose = !1;
  this.saveAll = function() {
    Promise.all([a.saveCartridgeData(), a.saveConfiguration()]).catch(function(a) {
      module$core$src$utils$logger.default.error("Error during save", a);
    });
  };
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.inject = function(a, b, c, d, e, f) {
  this.nes = a;
  this.storageFactory = b;
  this.executionManager = c;
  this.videoManager = d;
  this.audioManager = e;
  this.inputManager = f;
  this.setStorage();
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.setStorage = function(a) {
  a = void 0 === a ? "memory" : a;
  var b = this.storageFactory.getStorageId(a);
  module$core$src$utils$logger.default.info('Using "' + b + '" storage');
  this.storage = this.storageFactory.createStorage(b, a);
  this.storageImplementer = a;
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.getStorage = function() {
  return this.storageImplementer;
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.setSaveOnClose = function(a) {
  this.saveOnClose !== a && ((this.saveOnClose = a) ? (module$core$src$utils$logger.default.info("Enabling save on close"), window.addEventListener("beforeunload", this.saveAll)) : (module$core$src$utils$logger.default.info("Disabling save on close"), window.removeEventListener("beforeunload", this.saveAll)));
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.isSaveOnClose = function() {
  return this.saveOnClose;
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.setSavePeriod = function(a) {
  this.savePeriod !== a && (this.savePeriod = a, this.saveId && (module$core$src$utils$logger.default.info("Disabling periodic save"), clearInterval(this.saveId), this.saveId = null), a && (module$core$src$utils$logger.default.info("Enabling periodic save with period " + a + " s"), this.saveId = setInterval(this.saveAll, 1E3 * a)));
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.getSavePeriod = function() {
  return this.savePeriod;
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.loadCartridgeData = function() {
  return this.nes.isCartridgeInserted() ? (module$core$src$utils$logger.default.info("Loading cartridge data"), this.nes.loadCartridgeData(this.storage)) : Promise.resolve();
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.saveCartridgeData = function() {
  return this.nes.isCartridgeInserted() ? (module$core$src$utils$logger.default.info("Saving cartridge data"), this.nes.saveCartridgeData(this.storage)) : Promise.resolve();
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.deleteAllCartridgeData = function() {
  module$core$src$utils$logger.default.info("Deleting all cartridge data");
  return this.storage.deleteRAM();
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.loadConfiguration = function() {
  var a = this;
  module$core$src$utils$logger.default.info("Loading configuration");
  return this.storage.readConfiguration().then(function(b) {
    return new Promise(function(c, d) {
      b && a.writeConfiguration(b);
      c();
    });
  });
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.saveConfiguration = function() {
  var a = this;
  module$core$src$utils$logger.default.info("Saving configuration");
  return new Promise(function(b, c) {
    a.storage.writeConfiguration(a.readConfiguration()).then(b, c);
  });
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.deleteConfiguration = function() {
  module$core$src$utils$logger.default.info("Deleting configuration");
  return this.storage.deleteConfiguration();
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.readConfiguration = function() {
  var a = {};
  this.executionManager.readConfiguration(a);
  this.videoManager.readConfiguration(a);
  this.audioManager.readConfiguration(a);
  this.inputManager.readConfiguration(a);
  return a;
};
PersistenceManager$$module$lib$src$managers$PersistenceManager.prototype.writeConfiguration = function(a) {
  this.executionManager.writeConfiguration(a);
  this.videoManager.writeConfiguration(a);
  this.audioManager.writeConfiguration(a);
  this.inputManager.writeConfiguration(a);
};
module$lib$src$managers$PersistenceManager.default = PersistenceManager$$module$lib$src$managers$PersistenceManager;
// Input 74
var module$lib$src$config = {}, $jscompDefaultExport$$module$lib$src$config = module$core$src$utils$objects.mergeProperties(module$core$src$config.default, {deviceFactory:{class:module$lib$src$factories$DeviceFactory.default}, rendererFactory:{class:module$lib$src$factories$RendererFactory.default}, storageFactory:{class:module$lib$src$factories$StorageFactory.default}, audioManager:{class:module$lib$src$managers$AudioManager.default}, cartridgeManager:{class:module$lib$src$managers$CartridgeManager.default},
executionManager:{class:module$lib$src$managers$ExecutionManager.default}, inputManager:{class:module$lib$src$managers$InputManager.default}, persistenceManager:{class:module$lib$src$managers$PersistenceManager.default}, videoManager:{class:module$lib$src$managers$VideoManager.default}, screenfull:{value:null}});
module$lib$src$config.default = $jscompDefaultExport$$module$lib$src$config;
// Input 75
var module$lib$src$CFxNES = {}, logLevelAliases$$module$lib$src$CFxNES = {off:module$core$src$utils$logger.LogLevel.OFF, error:module$core$src$utils$logger.LogLevel.ERROR, warn:module$core$src$utils$logger.LogLevel.WARN, info:module$core$src$utils$logger.LogLevel.INFO, all:module$core$src$utils$logger.LogLevel.ALL}, CFxNES$$module$lib$src$CFxNES = function(a) {
  a = void 0 === a ? {} : a;
  this.dependencies = "executionManager cartridgeManager videoManager audioManager inputManager persistenceManager".split(" ");
  this.bootstrap(a);
  this.init(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.bootstrap = function(a) {
  for (var b = module$core$src$utils$objects.copyProperties(module$lib$src$config.default), c = $jscomp.makeIterator(["hash", "jszip", "screenfull"]), d = c.next();!d.done;d = c.next()) {
    d = d.value, b[d].value = a[d] || null;
  }
  (new module$core$src$utils$Injector.default(b)).inject(this);
};
CFxNES$$module$lib$src$CFxNES.prototype.inject = function(a, b, c, d, e, f) {
  this.audioChannels = module$lib$src$managers$AudioManager.channels;
  this.inputPorts = module$lib$src$managers$InputManager.ports;
  this.executionManager = a;
  this.cartridgeManager = b;
  this.videoManager = c;
  this.audioManager = d;
  this.inputManager = e;
  this.persistenceManager = f;
};
CFxNES$$module$lib$src$CFxNES.prototype.init = function(a) {
  var b = this;
  this.writeConfiguration(a);
  a.storage && this.setStorage(a.storage);
  a.videoOutput && this.setVideoOutput(a.videoOutput);
  this.load(a).then(function() {
    a.saveOnClose && b.setSaveOnClose(!0);
    a.savePeriod && b.setSavePeriod(a.savePeriod);
  }).catch(function(a) {
    module$core$src$utils$logger.default.error("Error during initialization", a);
  });
};
CFxNES$$module$lib$src$CFxNES.prototype.load = function(a) {
  return a.loadOnStart ? this.loadConfiguration() : Promise.resolve();
};
CFxNES$$module$lib$src$CFxNES.prototype.setDefaults = function() {
  this.executionManager.setDefaults();
  this.videoManager.setDefaults();
  this.audioManager.setDefaults();
  this.inputManager.setDefaults();
};
CFxNES$$module$lib$src$CFxNES.prototype.setExecutionDefaults = function() {
  this.executionManager.setDefaults();
};
CFxNES$$module$lib$src$CFxNES.prototype.step = function() {
  this.executionManager.step();
};
CFxNES$$module$lib$src$CFxNES.prototype.start = function() {
  this.executionManager.start();
};
CFxNES$$module$lib$src$CFxNES.prototype.stop = function() {
  this.executionManager.stop();
};
CFxNES$$module$lib$src$CFxNES.prototype.restart = function() {
  this.executionManager.restart();
};
CFxNES$$module$lib$src$CFxNES.prototype.isRunning = function() {
  return this.executionManager.isRunning();
};
CFxNES$$module$lib$src$CFxNES.prototype.hardReset = function() {
  this.executionManager.hardReset();
};
CFxNES$$module$lib$src$CFxNES.prototype.softReset = function() {
  this.executionManager.softReset();
};
CFxNES$$module$lib$src$CFxNES.prototype.getFPS = function() {
  return this.executionManager.getFPS();
};
CFxNES$$module$lib$src$CFxNES.prototype.setRegion = function(a) {
  this.executionManager.setRegion(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getRegion = function() {
  return this.executionManager.getRegion();
};
CFxNES$$module$lib$src$CFxNES.prototype.setSpeed = function(a) {
  this.executionManager.setSpeed(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getSpeed = function() {
  return this.executionManager.getSpeed();
};
CFxNES$$module$lib$src$CFxNES.prototype.loadCartridge = function(a) {
  return this.cartridgeManager.loadCartridge(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.downloadCartridge = function(a) {
  return this.cartridgeManager.downloadCartridge(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.insertCartridge = function(a) {
  return this.cartridgeManager.insertCartridge(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.removeCartridge = function() {
  return this.cartridgeManager.removeCartridge();
};
CFxNES$$module$lib$src$CFxNES.prototype.isCartridgeInserted = function() {
  return this.cartridgeManager.isCartridgeInserted();
};
CFxNES$$module$lib$src$CFxNES.prototype.setVideoDefaults = function() {
  this.videoManager.setDefaults();
};
CFxNES$$module$lib$src$CFxNES.prototype.setVideoOutput = function(a) {
  this.videoManager.setCanvas(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.setVideoRenderer = function(a) {
  this.videoManager.setRenderer(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getVideoRenderer = function() {
  return this.videoManager.getRenderer();
};
CFxNES$$module$lib$src$CFxNES.prototype.isVideoRendererSupported = function(a) {
  return this.videoManager.isRendererSupported(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.setVideoPalette = function(a) {
  this.videoManager.setPalette(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getVideoPalette = function() {
  return this.videoManager.getPalette();
};
CFxNES$$module$lib$src$CFxNES.prototype.setVideoScale = function(a) {
  this.videoManager.setScale(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getVideoScale = function(a) {
  return this.videoManager.getScale();
};
CFxNES$$module$lib$src$CFxNES.prototype.getMaxVideoScale = function() {
  return this.videoManager.getMaxScale();
};
CFxNES$$module$lib$src$CFxNES.prototype.setVideoSmoothing = function(a) {
  this.videoManager.setSmoothing(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.isVideoSmoothing = function() {
  return this.videoManager.isSmoothing();
};
CFxNES$$module$lib$src$CFxNES.prototype.setVideoDebugging = function(a) {
  this.videoManager.setDebugging(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.isVideoDebugging = function() {
  return this.videoManager.isDebugging();
};
CFxNES$$module$lib$src$CFxNES.prototype.enterFullscreen = function() {
  this.videoManager.enterFullscreen();
};
CFxNES$$module$lib$src$CFxNES.prototype.setFullscreenMode = function(a) {
  this.videoManager.setFullscreenMode(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getFullscreenMode = function() {
  return this.videoManager.getFullscreenMode();
};
CFxNES$$module$lib$src$CFxNES.prototype.setAudioDefaults = function() {
  this.audioManager.setDefaults();
};
CFxNES$$module$lib$src$CFxNES.prototype.isAudioSupported = function() {
  return this.audioManager.isSupported();
};
CFxNES$$module$lib$src$CFxNES.prototype.setAudioEnabled = function(a) {
  this.audioManager.setEnabled(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.isAudioEnabled = function() {
  return this.audioManager.isEnabled();
};
CFxNES$$module$lib$src$CFxNES.prototype.setAudioVolume = function(a) {
  this.audioManager.setVolume(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getAudioVolume = function() {
  return this.audioManager.getVolume();
};
CFxNES$$module$lib$src$CFxNES.prototype.setAudioChannelEnabled = function(a, b) {
  this.audioManager.setChannelEnabled(a, b);
};
CFxNES$$module$lib$src$CFxNES.prototype.isAudioChannelEnabled = function(a) {
  return this.audioManager.isChannelEnabled(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.setInputDefaults = function() {
  this.inputManager.setDefaults();
};
CFxNES$$module$lib$src$CFxNES.prototype.setInputDevice = function(a, b) {
  this.inputManager.connectTarget(a, b);
};
CFxNES$$module$lib$src$CFxNES.prototype.getInputDevice = function(a) {
  return this.inputManager.getConnectedTarget(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.mapInput = function(a, b, c, d, e) {
  this.inputManager.mapInput(a, b, c, d, e);
};
CFxNES$$module$lib$src$CFxNES.prototype.unmapInput = function(a, b, c, d, e) {
  this.inputManager.unmapInput(a, b, c, d, e);
};
CFxNES$$module$lib$src$CFxNES.prototype.getMappedInputName = function(a, b, c) {
  return this.inputManager.getMappedInputName(a, b, c);
};
CFxNES$$module$lib$src$CFxNES.prototype.recordInput = function(a) {
  this.inputManager.recordInput(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.setStorage = function(a) {
  this.persistenceManager.setStorage(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getStorage = function() {
  this.persistenceManager.getStorage();
};
CFxNES$$module$lib$src$CFxNES.prototype.setSaveOnClose = function(a) {
  this.persistenceManager.setSaveOnClose(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.isSaveOnClose = function() {
  return this.persistenceManager.isSaveOnClose();
};
CFxNES$$module$lib$src$CFxNES.prototype.setSavePeriod = function(a) {
  this.persistenceManager.setSavePeriod(a);
};
CFxNES$$module$lib$src$CFxNES.prototype.getSavePeriod = function() {
  return this.persistenceManager.getSavePeriod();
};
CFxNES$$module$lib$src$CFxNES.prototype.loadCartridgeData = function() {
  return this.persistenceManager.loadCartridgeData();
};
CFxNES$$module$lib$src$CFxNES.prototype.saveCartridgeData = function() {
  return this.persistenceManager.saveCartridgeData();
};
CFxNES$$module$lib$src$CFxNES.prototype.deleteAllCartridgeData = function() {
  return this.persistenceManager.deleteAllCartridgeData();
};
CFxNES$$module$lib$src$CFxNES.prototype.loadConfiguration = function() {
  return this.persistenceManager.loadConfiguration();
};
CFxNES$$module$lib$src$CFxNES.prototype.saveConfiguration = function() {
  return this.persistenceManager.saveConfiguration();
};
CFxNES$$module$lib$src$CFxNES.prototype.resetConfiguration = function() {
  var a = this;
  return new Promise(function(b) {
    a.persistenceManager.deleteConfiguration().then(function() {
      a.setDefaults();
      b();
    });
  });
};
CFxNES$$module$lib$src$CFxNES.prototype.readConfiguration = function() {
  return this.persistenceManager.readConfiguration();
};
CFxNES$$module$lib$src$CFxNES.prototype.writeConfiguration = function(a) {
  this.persistenceManager.writeConfiguration(a);
};
CFxNES$$module$lib$src$CFxNES.version = "unknown";
CFxNES$$module$lib$src$CFxNES.setLogLevel = function(a) {
  module$core$src$utils$logger.default.setLevel(logLevelAliases$$module$lib$src$CFxNES[a] || module$core$src$utils$logger.LogLevel.WARN);
};
"function" === typeof define && define.amd ? define("CFxNES", function() {
  return CFxNES$$module$lib$src$CFxNES;
}) : "undefined" !== typeof module && module.exports ? module.exports = CFxNES$$module$lib$src$CFxNES : this.CFxNES = CFxNES$$module$lib$src$CFxNES;
module$lib$src$CFxNES.default = CFxNES$$module$lib$src$CFxNES;
this.CFxNES.version="0.4.0";}.call(this));
