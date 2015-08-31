`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'chart-verticalbar', 'Integration | Component | chart verticalbar', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{chart-verticalbar}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#chart-verticalbar}}
      template block text
    {{/chart-verticalbar}}
  """

  assert.equal @$().text().trim(), 'template block text'
