`import Ember from 'ember'`
`import ChartsAxesMixin from '../../../mixins/charts-axes'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts axes'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsAxesObject = Ember.Object.extend ChartsAxesMixin
  subject = ChartsAxesObject.create()
  assert.ok subject
