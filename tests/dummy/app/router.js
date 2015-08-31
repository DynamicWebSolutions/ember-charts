import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('license');

	this.route('emberCharts', {path: '/ember-charts'}, function() {
		this.route('overview');
		this.route('documentation');
		this.route('pie');
		this.route('horizontal_bar');
		this.route('vertical_bar');
		this.route('time_series');
		this.route('scatter');
	});
});

export default Router;
