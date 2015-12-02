Template.user.events({
  'click .logout'(event, template) {
    event.preventDefault();

    // logout
    AccountsTemplates.logout();
  }
});
