`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'chart-pie', 'Integration | Component | chart pie', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{chart-pie}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#chart-pie}}
      template block text
    {{/chart-pie}}
  """

  assert.equal @$().text().trim(), 'template block text'
