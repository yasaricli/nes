AdminConfig = {
  adminEmails: ['admin@admin.com'],
  collections: {
    Roms: {
      tableColumns: [
        { label: 'Name', name: 'name' }
      ],

      routes: {
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
