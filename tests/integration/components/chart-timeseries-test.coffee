`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'chart-timeseries', 'Integration | Component | chart timeseries', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{chart-timeseries}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#chart-timeseries}}
      template block text
    {{/chart-timeseries}}
  """

  assert.equal @$().text().trim(), 'template block text'
