`import Ember from 'ember'`

route = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			groupedPercent: @store.findAll('multivalue.groupedpercent')
			groupedMoney: @store.findAll('multivalue.groupedmoney')
			ungroupedPercent: @store.findAll('multivalue.ungroupedpercent')
			ungroupedMoney: @store.findAll('multivalue.ungroupedmoney')			
			groupedZero: @store.findAll('multivalue.groupedzero')
			groupedZeros: @store.findAll('multivalue.groupedzeros')
			ungroupedZero: @store.findAll('multivalue.ungroupedzero')
			ungroupedZeros: @store.findAll('multivalue.ungroupedzeros')

`export default route`	