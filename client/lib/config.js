var pwd = AccountsTemplates.removeField('password');

Admin.configure({
  title: 'Nes Admin'
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

  // Page View Tracking
  trackPageView: true
});


// avatar config
Avatar.setOptions({});

AccountsTemplates.configure({
  enablePasswordChange: true,
  homeRoutePath: '/',
  showLabels: false
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('changePwd');

AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);
