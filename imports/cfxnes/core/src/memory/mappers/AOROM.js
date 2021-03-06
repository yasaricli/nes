import Mapper from './Mapper';

export default class AOROM extends Mapper {

  resetState() {
    this.mapPRGROMBank32K(0, 0); // Map first 32K PRG ROM bank to $8000
    this.mapCHRBank8K(0, 0);     // Map 8K CHR RAM to $0000
  }

  write(address, value) {
    this.mapPRGROMBank32K(0, value);                     // Select 32K PRG ROM bank at $8000
    this.setSingleScreenMirroring((value & 0x10) >>> 4); // Select single screen mirroring
  }

}
