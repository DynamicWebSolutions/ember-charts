`import Ember from 'ember'`

timeSeriesRoute = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			dailyCurrValue: @store.findAll('timeseries.dailycurrvalue')


	# setupController: (controller, model) ->
	# 	controller.set('model', model)

`export default timeSeriesRoute`		