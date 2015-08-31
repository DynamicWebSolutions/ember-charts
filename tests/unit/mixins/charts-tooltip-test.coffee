`import Ember from 'ember'`
`import ChartsTooltipMixin from '../../../mixins/charts-tooltip'`
`import { module, test } from 'qunit'`

module 'Unit | Mixin | charts tooltip'

# Replace this with your real tests.
test 'it works', (assert) ->
  ChartsTooltipObject = Ember.Object.extend ChartsTooltipMixin
  subject = ChartsTooltipObject.create()
  assert.ok subject
