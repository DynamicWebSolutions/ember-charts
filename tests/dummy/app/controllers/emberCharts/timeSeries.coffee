`import Ember from 'ember'`
`import SlideController from './slide'`

TimesSeriesController = SlideController.extend
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
        time: datum._data.time
        value: datum._data.value
      })
  .property 'selectedLineData', 'lineDataHash'

  barData: Ember.computed ->
    @get('barDataHash')[@get 'selectedBarData']
  .property 'selectedBarData', 'barDataHash'

  lineDataHash: Ember.computed ->
    monthly_return_single_series: null
    monthly_return_double_series: null
    monthly_return_triple_series: null
    monthly_return_single_period: null
    monthly_return_double_period: null
    monthly_return_negative_period: null
    daily_curr_value: @get 'content.dailyCurrValue'    
    daily_diff_value: null
    daily_two_series: null
    daily_three_series: null
    daily_four_series: null
    daily_five_series: null
    daily_six_series: null
    '----': null
    value_p1d_p1y: null
    value_p1w_p1y: null
    value_p1m_p1y: null
    value_p1m_p2y: null
    value_p1m_p5y: null
    zeroes_grouped: null
    zeroes_ungrouped: null
    same_value_grouped: null
    same_value_ungrouped: null
    empty: null

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