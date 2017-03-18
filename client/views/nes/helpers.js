Template.adminRomImageTmpl.helpers({
  image() {
    return Images.findOne({ _id: this.value });
  }
});
