`import Ember from 'ember'`
`import SlideController from './slide'`

TimesSeriesController = SlideController.extend
  # ---------
  # Action Hash
  # ---------

  actions: 
    barPadding: (value) ->
      @set 'barPadding', value
    barGroupPadding: (value) ->
      @set 'barGroupPadding', value
    barLeftOffset: (value) ->
      @set 'barLeftOffset', value


	# ---------
  # Default Settings
  # ---------

  barPadding: 0
  barGroupPadding: 0.25
  barLeftOffset: 0.0
  yAxisFromZero: no

  # ---------
  # Data Selection
  # ---------

  availableLineDataSets: Ember.computed ->
    lineData = _.keys @get('lineDataHash')
    Ember.A(lineData)
  .property 'lineDataHash'

  availableBarDataSets: Ember.computed ->
    barData = _.keys @get('barDataHash')
    Ember.A(barData)
  .property 'barDataHash'

  # display line data in the chart guide
  data: Ember.computed.alias 'lineData'

  lineData: Ember.computed ->
    data = @get('lineDataHash.'+[@get 'selectedLineData']+'.content')
    Ember.A(data.toArray().map (datum) ->
      {
        label: datum._data.label
        time: datum._data.time
        value: datum._data.value
      })
  .property 'selectedLineData', 'lineDataHash'

  barData: Ember.computed ->
    data = @get('barDataHash.'+[@get 'selectedBarData']+'.content')
    Ember.A(data.toArray().map (datum) ->
      {
        label: datum._data.label
        time: datum._data.time
        value: datum._data.value
      })    
  .property 'selectedBarData', 'barDataHash'

  lineDataHash: Ember.computed ->
    monthly_return_single_series: @get 'content.monthlyReturnSingleSeries' 
    monthly_return_double_series: @get 'content.monthlyReturnDoubleSeries' 
    monthly_return_triple_series: @get 'content.monthlyReturnTripleSeries' 
    monthly_return_single_period: @get 'content.monthlyReturnSinglePeriod' 
    monthly_return_double_period: @get 'content.monthlyReturnDoublePeriod' 
    monthly_return_negative_period: @get 'content.monthlyReturnNegativePeriod' 
    daily_curr_value: @get 'content.dailyCurrValue'    
    daily_diff_value: @get 'content.dailyDiffValue'
    daily_two_series: @get 'content.dailyTwoSeries' 
    daily_three_series: @get 'content.dailyThreeSeries'
    daily_four_series: @get 'content.dailyFourSeries'
    daily_five_series: @get 'content.dailyFiveSeries'
    daily_six_series: @get 'content.dailySixSeries'
    '----': Object.create(content: Ember.A())
    value_p1d_p1y: @get 'content.valuep1dp1y'
    value_p1w_p1y: @get 'content.valuep1wp1y'
    value_p1m_p1y: @get 'content.valuep1mp1y'
    value_p1m_p2y: @get 'content.valuep1mp2y'
    value_p1m_p5y: @get 'content.valuep1mp5y'
    zeroes_grouped: @get 'content.zeroesGrouped'
    zeroes_ungrouped: @get 'content.zeroesUngrouped'
    same_value_grouped: @get 'content.sameValueGrouped'
    same_value_ungrouped: @get 'content.sameValueGrouped'
    empty: Object.create(content: Ember.A())

  barDataHash: Ember.computed.alias 'lineDataHash'
  selectedLineData: 'daily_curr_value'
  selectedBarData: 'daily_curr_value'

  dataIntervals: Ember.computed ->
    intervals = [
      'day',
      'week',
      'month',
      'year'
    ]
    Ember.A(intervals)

  tickIntervals: Ember.computed ->
    ticks = [
      'weeks',
      'months',
      'quarters',
      'years'
    ]
    Ember.A(ticks)

  selectedInterval: 'months'

`export default TimesSeriesController`