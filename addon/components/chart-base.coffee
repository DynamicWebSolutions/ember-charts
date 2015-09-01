`import Ember from 'ember'`
`import Colorable from '../mixins/charts-colorable'`
`import ResizeHandler from '../mixins/charts-resize'`
`import layout from '../templates/components/chart-base'`

ChartBaseComponent = Ember.Component.extend(
  Colorable,
  ResizeHandler,
  layout: layout
  classNames: ['chart-frame', 'scroll-y']
  isInteractive: yes

  # ----------------------------------------------------------------------------
  # Layout
  # ----------------------------------------------------------------------------

  # Margin between viewport and svg boundary
  horizontalMargin: 30
  verticalMargin: 30

  marginRight: Ember.computed.alias 'horizontalMargin'
  marginLeft: Ember.computed.alias 'horizontalMargin'
  marginTop: Ember.computed.alias 'verticalMargin'
  marginBottom: Ember.computed.alias 'verticalMargin'

  # TODO: Rename outer to SVG?
  defaultOuterHeight: 500
  defaultOuterWidth: 700
  outerHeight: Ember.computed.alias 'defaultOuterHeight'
  outerWidth: Ember.computed.alias 'defaultOuterWidth'

  width: Ember.computed ->
    @get('outerWidth') - @get('marginLeft') - @get('marginRight')
  .property 'outerWidth', 'marginLeft', 'marginRight'

  height: Ember.computed ->
    Math.max 1, @get('outerHeight') - @get('marginBottom') - @get('marginTop')
  .property 'outerHeight', 'marginBottom', 'marginTop'

  # Hierarchy of chart view is:
  # 1 Outside most element is div.chart-frame
  # 2 Next element is svg
  # 3 Finally, g.chart-viewport
  $viewport: Ember.computed ->
    @$('.chart-viewport')[0]

  viewport: Ember.computed ->
    d3.select @get('$viewport')

  # Transform the view commonly displaced by the margin
  transformViewport: Ember.computed ->
    "translate(#{@get 'marginLeft'},#{@get 'marginTop'})"
  .property 'marginLeft', 'marginTop'

  # ----------------------------------------------------------------------------
  # Labels
  # ----------------------------------------------------------------------------
  # Padding between label and zeroline, or label and graphic
  labelPadding: 10

  # Padding allocated for axes on left of graph
  labelWidth: 30
  labelHeight: 15

  labelWidthOffset: Ember.computed ->
    @get('labelWidth') + @get('labelPadding')
  .property 'labelWidth', 'labelPadding'

  labelHeightOffset: Ember.computed ->
    @get('labelHeight') + @get('labelPadding')
  .property 'labelHeight', 'labelPadding'

  # ----------------------------------------------------------------------------
  # Graphic/NonGraphic Layout
  # I.e., some charts will care about the dimensions of the actual chart graphic
  # space vs. other drawing space, e.g., axes, labels, legends.
  # TODO(tony): Consider this being a mixin for axes/legends and it just happens
  # to be a redundant mixin. This is a problem though because we would not want
  # to override things like graphicTop, we instead would want the changes to be
  # cumulative.
  # ----------------------------------------------------------------------------
  graphicTop: 0
  graphicLeft: 0
  graphicWidth: Ember.computed.alias 'width'
  graphicHeight: Ember.computed.alias 'height'
  graphicBottom: Ember.computed ->
    @get('graphicTop') + @get('graphicHeight')
  .property 'graphicTop', 'graphicHeight'
  graphicRight: Ember.computed ->
    @get('graphicLeft') + @get('graphicWidth')
  .property 'graphicLeft', 'graphicWidth'

  # ----------------------------------------------------------------------------
  # Data
  # ----------------------------------------------------------------------------

  hasNoData: Ember.computed ->
    Ember.isEmpty @get('finishedData')
  .property 'finishedData'

  # ----------------------------------------------------------------------------
  # Drawing Functions
  # ----------------------------------------------------------------------------

  # Observe important variables and trigger chart redraw when they change
  concatenatedProperties: ['renderVars']
  # Every chart will trigger a redraw when these variables change, through the
  # magic of concatenatedProperties any class that overrides the variable
  # renderVars will actually just be appending names to the list
  renderVars: ['finishedData', 'width', 'height', 'margin', 'isInteractive']

  uniqRenderVars: Ember.computed ->
    Ember.A(@get('renderVars')).uniq() 
  .property 'renderVars' 

  init: ->
    @_super()
    for renderVar in @get('uniqRenderVars')
      @addObserver renderVar, @drawOnce
      # This is just to ensure that observers added above fire even
      # if that renderVar is not consumed elsewhere.
      @get(renderVar)

  willDestroyElement: ->
    for renderVar in @get('uniqRenderVars')
      @removeObserver renderVar, this, @drawOnce

    @_super()

  didInsertElement: ->
    @_super()
    Ember.run.schedule 'afterRender', this, @_updateDimensions
    @drawOnce()

  drawOnce: ->
    Ember.run.once this, @get('draw')

  onResizeEnd: ->
    @_updateDimensions()

  # Wrap the chart in a container div that is the same size
  _updateDimensions: ->
    @set 'defaultOuterHeight', this.$().height()
    @set 'defaultOuterWidth', this.$().width()

  clearChart: ->
    @$('.chart-viewport').children().remove()

  # Remove previous drawing
  draw: ->
    return unless (@_state or @state) is "inDOM"
    if @get('hasNoData')
      @clearChart()
    else
      @drawChart()  
)

`export default ChartBaseComponent`
