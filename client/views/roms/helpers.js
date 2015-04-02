Template.roms.helpers({
    roms: function(prop) {
        return Roms.find({ }, { sort: { createdAt: -1 } });
    }
});
