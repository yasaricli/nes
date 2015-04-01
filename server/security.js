// ROMS COLLECTION
Roms.permit(['insert', 'remove']).ifHasRole('admin').apply();
Roms.permit('update').ifLoggedIn().onlyProps(['stars']).apply();

// FILES COLLECTION
Files.files.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();

// IMAGES COLLECTION
Images.files.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();
