`import Ember from 'ember'`

timeSeriesRoute = Ember.Route.extend

	model: ->
		Ember.RSVP.hash 
			dailyCurrValue: @store.findAll('timeseries.dailycurrvalue')
			dailyDiffValue: @store.findAll('timeseries.dailydiffvalue')
			dailyTwoSeries: @store.findAll('timeseries.dailytwoseries')
			dailyThreeSeries: @store.findAll('timeseries.dailythreeseries')
			dailyFourSeries: @store.findAll('timeseries.dailyfourseries')
			dailyFiveSeries: @store.findAll('timeseries.dailyfiveseries')
			dailySixSeries: @store.findAll('timeseries.dailysixseries')
			monthlyReturnSingleSeries: @store.findAll('timeseries.monthlyreturnsingleseries')
			monthlyReturnDoubleSeries: @store.findAll('timeseries.monthlyreturndoubleseries')
			monthlyReturnTripleSeries: @store.findAll('timeseries.monthlyreturntripleseries')
			monthlyReturnSinglePeriod: @store.findAll('timeseries.monthlyreturnsingleperiod')
			monthlyReturnDoublePeriod: @store.findAll('timeseries.monthlyreturndoubleperiod')
			monthlyReturnNegativePeriod: @store.findAll('timeseries.monthlyreturnnegativeperiod')			
			sameValueGrouped: @store.findAll('timeseries.samevaluegrouped')
			sameValueUngrouped: @store.findAll('timeseries.samevalueungrouped')
			valuep1dp1y: @store.findAll('timeseries.valuep1dp1y')
			valuep1mp1y: @store.findAll('timeseries.valuep1mp1y')
			valuep1mp2y: @store.findAll('timeseries.valuep1mp2y')
			valuep1mp5y: @store.findAll('timeseries.valuep1mp5y')
			valuep1wp1y: @store.findAll('timeseries.valuep1wp1y')
			zeroesGrouped: @store.findAll('timeseries.zeroesgrouped')
			zeroesungrouped: @store.findAll('timeseries.zeroesungrouped')

`export default timeSeriesRoute`		