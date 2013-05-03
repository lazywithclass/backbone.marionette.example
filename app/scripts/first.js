app.module('first', {

  startWithParent: false,

  define: function(This, App, Backbone, Marionette, $, _) {

    This.View = Marionette.ItemView.extend({
      template: '#firstTemplate'
    });

    This.on('start', function() {
        App.mainRegion.show(new This.View());
    });

  }

});