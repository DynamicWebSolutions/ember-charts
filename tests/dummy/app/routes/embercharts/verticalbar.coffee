`import Ember from 'ember'`

route = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			twoRanges: @store.findAll('multigroup.tworange')
			threeRanges: @store.findAll('multigroup.threerange')
			fiveRanges: @store.findAll('multigroup.fiverange')
			assetValues: @store.findAll('singlegroup.assetvalue')
			manyValues: @store.findAll('singlegroup.manyvalue')
			monthlyReturnSinglePeriod: @store.findAll('timeseries.monthlyreturnsingleperiod')
			highNetWorthDuration: @store.findAll('singlegroup.highnetworthduration')
			oneValue: @store.findAll('singlegroup.onevalue')
			twoValues: @store.findAll('singlegroup.twovalue')
			zero: @store.findAll('singlegroup.zero')
			zeroes: @store.findAll('singlegroup.manyzero')
			sumToZero: @store.findAll('singlegroup.sumtozero')
			badRange: @store.findAll('singlegroup.badrange')



`export default route`	