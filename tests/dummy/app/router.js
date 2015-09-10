import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('license');

	this.route('embercharts', {path: '/ember-charts'}, function() {
		this.route('overview');
		this.route('documentation');
		this.route('pie');
		this.route('horizontalbar');
		this.route('verticalbar');
		this.route('timeseries');
		this.route('scatter');
	});
});

export default Router;
