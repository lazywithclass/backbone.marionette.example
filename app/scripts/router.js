app.module('router', {

  startWithParent: false,

  define: function(This, App, Backbone, Marionette, $, _) {

    var Router = Backbone.Router.extend({

      routes: {
        '': 'first',
        'second': 'second'
      },

      first: function() {
        console.log('first');
        app.startSubApp('first');
      },

      second: function() {
        console.log('second');
        app.startSubApp('second');
      }

    });

    This.addInitializer(function(){
      console.log('router');
      new Router();
      Backbone.history.start();
    });

  }
});