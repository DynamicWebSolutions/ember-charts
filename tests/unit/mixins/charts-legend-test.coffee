`import Ember from 'ember'`
`import ChartsLegendMixin from '../../../mixins/charts-legend'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts legend'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsLegendObject = Ember.Object.extend ChartsLegendMixin
  subject = ChartsLegendObject.create()
  assert.ok subject
