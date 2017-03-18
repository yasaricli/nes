// ROMS COLLECTION
Roms.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();

// FILES COLLECTION
Files.files.permit(['remove', 'update']).ifHasRole('admin').apply();

// IMAGES COLLECTION
Images.files.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();
