`import Ember from 'ember`'

mixin = Ember.Mixin.create
  sortKey: 'value'

  sortedData: Ember.computed ->
    data = @get 'data'
    key = @get 'sortKey'
    if Ember.isEmpty(data) then [] else data.sortBy key
  .property 'data.@each', 'sortKey'

`export default mixin`  