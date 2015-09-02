`import Ember from 'ember'`

ChartsSortableMixin = Ember.Mixin.create(
  sortKey: 'value'

  sortedData: Ember.computed ->
    data = @get 'data'
    key = @get 'sortKey'
    if Ember.isEmpty(data) then [] else data.sortBy key
  .property 'data.[]', 'sortKey'
)

`export default ChartsSortableMixin`
