`import Ember from 'ember'`
`import ChartsPielegendMixin from '../../../mixins/charts-pielegend'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts pielegend'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsPielegendObject = Ember.Object.extend ChartsPielegendMixin
  subject = ChartsPielegendObject.create()
  assert.ok subject
