`import Ember from 'ember'`
`import ChartsResizeMixin from '../../../mixins/charts-resize'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts resize'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsResizeObject = Ember.Object.extend ChartsResizeMixin
  subject = ChartsResizeObject.create()
  assert.ok subject
