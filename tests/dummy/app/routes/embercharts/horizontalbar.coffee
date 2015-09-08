`import Ember from 'ember'`

assetvalues = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			assetValues: @store.findAll('singlegroup.assetvalue')


`export default assetvalues`	