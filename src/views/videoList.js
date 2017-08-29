var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    let models = this.collection.models;
    let vlev = new VideoListEntryView();

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
