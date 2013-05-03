Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
  return Handlebars.compile(rawTemplate);
};

app = window.app = new Backbone.Marionette.Application;

app.startSubApp = function(appName, args) {
  var currentApp = app.module(appName);
  if (app.currentApp === currentApp) return;
  if (app.currentApp) app.currentApp.stop();
  app.currentApp = currentApp;
  currentApp.start(args);
};

app.addRegions({
  mainRegion: '#mainRegion'
});

app.addInitializer(function() {
  app.startSubApp('router');
});

app.start()