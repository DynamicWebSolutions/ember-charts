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
    # many_values: App.data.many_values
    # monthly_return_single_period: App.data.monthly_return_single_period
    # high_net_worth_duration: App.data.high_net_worth_duration
    # '----': App.data.null
    # empty: App.data.empty
    # one_value: App.data.one_value
    # two_values: App.data.two_values
    # zero: App.data.zero
    # zeroes: App.data.zeroes
    # sum_to_zero: App.data.sum_to_zero
    # bad_range: App.data.bad_range

  selectedData: 'asset_values'

`export default HorizontalBarController`   