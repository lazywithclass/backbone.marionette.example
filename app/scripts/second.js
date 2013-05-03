app.module('second', {

  startWithParent: false,

  define: function(This, App, Backbone, Marionette, $, _) {

    This.View = Marionette.ItemView.extend({
      template: '#secondTemplate'
    });

    This.on('start', function() {
      App.mainRegion.show(new This.View());
    });

  }

});