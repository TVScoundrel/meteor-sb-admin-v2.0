// Iron Router config, layout...
Router.configure({
  notFoundTemplate: 'NotFound',
  layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/blank', function () {
  this.render('Blank');
});

Router.route('/buttons', function () {
  this.render('Buttons');
});

Router.route('/flot', function () {
  this.render('Flot');
});

Router.route('/forms', function () {
  this.render('Forms');
});

Router.route('/grid', function () {
  this.render('Grid');
});

Router.route('/icons', function () {
  this.render('Icons');
});

Router.route('/login', function () {
  this.render('Login');
});

Router.route('/morris', function () {
  this.render('Morris');
});

Router.route('/notifications', function () {
  this.render('Notifications');
});

Router.route('/panels-wells', function () {
  this.render('PanelsWells');
});

Router.route('/tables', function () {
  this.render('Tables');
});

Router.route('/typography', function () {
  this.render('Typography');
});

//Router.plugin('dataNotFound', {
//  notFoundTemplate: 'NotFound'
//});
