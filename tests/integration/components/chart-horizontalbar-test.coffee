`import { test, moduleForComponent } from 'ember-qunit'`
`import hbs from 'htmlbars-inline-precompile'`

moduleForComponent 'chart-horizontalbar', 'Integration | Component | chart horizontalbar', {
  integration: true
}

test 'it renders', (assert) ->
  assert.expect 2

  # Set any properties with @set 'myProperty', 'value'
  # Handle any actions with @on 'myAction', (val) ->

  @render hbs """{{chart-horizontalbar}}"""

  assert.equal @$().text().trim(), ''

  # Template block usage:
  @render hbs """
    {{#chart-horizontalbar}}
      template block text
    {{/chart-horizontalbar}}
  """

  assert.equal @$().text().trim(), 'template block text'
