`import Ember from 'ember'`

timeSeriesRoute = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			dailyCurrValue: @store.find('timeSeries.dailyCurrValue')


	setupController: (controller, model) ->
		controller.set('model', model)

`export default timeSeriesRoute`	