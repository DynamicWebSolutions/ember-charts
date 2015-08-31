`import Ember from 'ember'`
`import ChartsSortableMixin from '../../../mixins/charts-sortable'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts sortable'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsSortableObject = Ember.Object.extend ChartsSortableMixin
  subject = ChartsSortableObject.create()
  assert.ok subject
