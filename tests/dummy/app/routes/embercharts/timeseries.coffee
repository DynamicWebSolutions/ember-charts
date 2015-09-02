`import Ember from 'ember'`

timeSeriesRoute = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			dailyCurrValue: @store.findAll('timeseries.dailycurrvalue')

`export default timeSeriesRoute`		