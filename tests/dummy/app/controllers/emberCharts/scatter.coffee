`import Ember from 'ember'`
`import SlideController from './slide'`

ScatterController = SlideController.extend(

  # ---------
  # Action Hash
  # ---------

  actions: 
    dotRadius: (value) ->
      @set 'dotRadius', value

  # ---------
  # Data Selection
  # ---------

  availableDataSets: Ember.computed(->
    _.keys @get 'rawDataHash' 
  ).property('rawDataHash')

  data: Ember.computed ->
    data = @get('rawDataHash.'+[@get 'selectedData']+'.content')
    Ember.A(data.toArray().map (datum) ->
      {
        group: datum._data.group
        xValue: datum._data.xValue
        yValue: datum._data.yValue
      })    
  .property 'selectedData', 'rawDataHash'

  isShowingTotal: no

  xValueDisplayName: 'Risk'
  yValueDisplayName: 'Return'

  # A simple default portfolio total calculation by adding both factors. Often
  # the portfolio total is a separate data source provided as a reference.
  totalPointData: Ember.computed ->
    data = @get('data')
    group: 'Portfolio Total'
    xValue: data.reduce( ((prev, d) -> prev + d.xValue), 0 )
    yValue: data.reduce( ((prev, d) -> prev + d.yValue), 0 )
  .property 'data'

  # Select which raw data we will pull from
  selectedData: 'groupedPercent'

  rawDataHash: Ember.computed ->
    groupedPercent: @get 'content.groupedPercent'
    groupedMoney: @get 'content.groupedMoney'
    ungroupedPercent: @get 'content.ungroupedPercent'
    ungroupedMoney: @get 'content.ungroupedMoney'
    '----': Ember.create(content: Ember.A())
    empty: Ember.create(content: Ember.A())
    groupedZero: @get 'content.groupedZero'
    groupedZeros: @get 'content.groupedZeros'
    ungroupedZero: @get 'content.ungroupedZero'
    ungroupedZeros: @get 'content.ungroupedZeros'

  dotRadius: 7
)

`export default ScatterController`