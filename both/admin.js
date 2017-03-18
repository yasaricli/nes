AdminConfig = {
  adminEmails: ['admin@admin.com'],
  collections: {
    Roms: {
      tableColumns: [
        { label: 'Image', name: 'imageId', template: 'adminRomImageTmpl' },
        { label: 'Name', name: 'name' }
      ],

      routes: {
        view: {
          waitOn: function () {
            return Meteor.subscribe('images');
          }
        },

        edit: {
          waitOn: function () {
            const { _id } = Router.current().params;
            return Meteor.subscribe('rom._id', _id);
          }
        }
      }
    }
  }
};
