/*
 *
 * Call Security.defineMethod to define a method that may be used in the rule
 * chain to restrict the currect rule.
 * Pass a definition argument, which must contain a deny property
 * set to a deny function for that rule.
 * */
Security.defineMethod("ifUpdateRom", {
    deny: function(type, arg, userId, doc, fields, filter) {
        var allowKeys = ['stars'];
        return contains(_.keys(_.omit(doc, allowKeys)), fields);
    }
});

// ROMS COLLECTION
Roms.permit(['insert', 'remove']).ifHasRole('admin').apply();
Roms.permit('update').ifUpdateRom().apply();

// FILES COLLECTION
Files.files.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();

// IMAGES COLLECTION
Images.files.permit(['insert', 'remove', 'update']).ifHasRole('admin').apply();
