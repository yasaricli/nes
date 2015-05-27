Migrations.add('roms-slugify', function() {
  Roms.find({}).forEach(function(rom) {
    Roms.update(rom._id, {
      $set: {
        slug: slugify(rom.name)
      }
    });
  });
});
