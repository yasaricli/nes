Template.user.events({
  'click .logout': function(event, template) {
    event.preventDefault();

    // logout
    AccountsTemplates.logout();
  }
});
