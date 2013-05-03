app.module('router', {

  startWithParent: false,

  define: function(This, App, Backbone, Marionette, $, _) {

    var Router = Backbone.Router.extend({

      routes: {
        '': 'first',
        'second': 'second'
      },

      first: function() {
        app.startSubApp('first');
      },

      second: function() {
        app.startSubApp('second');
      }

    });

    This.addInitializer(function(){
      new Router();
      Backbone.history.start();
    });

  }
});