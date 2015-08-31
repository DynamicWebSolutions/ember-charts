`import Ember from 'ember'`
`import ChartsTimeserieslabelerMixin from '../../../mixins/charts-timeserieslabeler'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts timeserieslabeler'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsTimeserieslabelerObject = Ember.Object.extend ChartsTimeserieslabelerMixin
  subject = ChartsTimeserieslabelerObject.create()
  assert.ok subject
