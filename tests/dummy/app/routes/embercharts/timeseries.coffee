`import Ember from 'ember'`

timeSeriesRoute = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			dailyCurrValue: @store.findAll('timeseries.dailycurrvalue')
			dailyDiffValue: @store.findAll('timeseries.dailydiffvalue')
			dailyFiveSeries: @store.findAll('timeseries.dailyfiveseries')

`export default timeSeriesRoute`		