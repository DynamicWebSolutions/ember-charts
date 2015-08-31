`import Ember from 'ember'`
`import ChartsHastimeseriesruleMixin from '../../../mixins/charts-hastimeseriesrule'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts hastimeseriesrule'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsHastimeseriesruleObject = Ember.Object.extend ChartsHastimeseriesruleMixin
  subject = ChartsHastimeseriesruleObject.create()
  assert.ok subject
