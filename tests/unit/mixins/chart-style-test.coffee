`import Ember from 'ember'`
`import ChartStyleMixin from '../../../mixins/chart-style'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | chart style'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartStyleObject = Ember.Object.extend ChartStyleMixin
  subject = ChartStyleObject.create()
  assert.ok subject
