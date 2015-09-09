`import Ember from 'ember'`
`import SlideController from './slide'`

VerticalBarController = SlideController.extend
  # ---------
  # Action Hash
  # ---------

  actions: 
    maxLabelHeight: (value) ->
      @set 'maxLabelHeight', value
    betweenGroupPadding: (value) ->
      @set 'betweenGroupPadding', value
    withinGroupPadding: (value) ->
      @set 'withinGroupPadding', value

      
  # ---------
  # Default Settings
  # ---------

  betweenGroupPadding: 0
  withinGroupPadding: 0
  maxLabelHeight: 40
  stackBars: no

  # ---------
  # Data Selection
  # ---------

  availableDataSets: Ember.computed ->
    _.keys @get('rawDataHash')
  .property 'rawDataHash'

  data: Ember.computed ->
    data = @get('rawDataHash.'+[@get 'selectedData']+'.content')
    Ember.A(data.toArray().map (datum) ->
      {
        label: datum._data.label
        value: datum._data.value
        group: datum._data.group
      })
  .property 'selectedData', 'rawDataHash'

  rawDataHash: Ember.computed ->
    two_ranges: @get 'content.twoRanges'
    three_ranges: @get 'content.threeRanges'
    five_ranges: @get 'content.fiveRanges'
    '----': Ember.A([])
    asset_values: @get 'content.assetValues'
    many_values: @get 'content.manyValues'
    monthly_return_single_period: @get 'content.monthlyReturnSinglePeriod'
    high_net_worth_duration: @get 'content.highNetWorthDuration'
    '----': Ember.A([])
    empty: Ember.A([])
    one_value: @get 'content.oneValue'
    two_values: @get 'content.twoValues'
    zero: @get 'content.zero'
    zeroes: @get 'content.zeroes'
    sum_to_zero: @get 'content.sumToZero'
    bad_range: @get 'content.badRange'

  selectedData: 'three_ranges'

`export default VerticalBarController`