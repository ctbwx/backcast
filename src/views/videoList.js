var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    let models = this.collection.models;
    let vlevs = [];

    models.forEach(vid => vlevs.push(new VideoListEntryView({model: vid})));

    for (let i = 0; i < vlevs.length; i++) {
      this.$el.prepend(vlevs[i]);
    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
