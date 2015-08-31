`import Ember from 'ember'`
`import ChartsFormatMixin from '../../../mixins/charts-format'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts format'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsFormatObject = Ember.Object.extend ChartsFormatMixin
  subject = ChartsFormatObject.create()
  assert.ok subject
