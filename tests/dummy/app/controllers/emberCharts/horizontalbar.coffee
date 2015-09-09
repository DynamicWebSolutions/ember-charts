`import Ember from 'ember'`
`import SlideController from './slide'`

HorizontalBarController = SlideController.extend


  # ---------
  # Default Settings
  # ---------

  maxBarThickness: 60
  minBarThickness: 20

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
      })
  .property 'selectedData', 'rawDataHash'

  rawDataHash: Ember.computed ->
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

  selectedData: 'asset_values'

`export default HorizontalBarController`   