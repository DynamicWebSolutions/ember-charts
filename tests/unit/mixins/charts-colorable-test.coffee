`import Ember from 'ember'`
`import ChartsColorableMixin from '../../../mixins/charts-colorable'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts colorable'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsColorableObject = Ember.Object.extend ChartsColorableMixin
  subject = ChartsColorableObject.create()
  assert.ok subject
