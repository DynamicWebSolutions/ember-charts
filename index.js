/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-charts',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/d3/d3.min.js');
  }  
};
