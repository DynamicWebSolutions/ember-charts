`import DS from 'ember-data'`
`import Ember from 'ember'`

model = DS.Model.extend
  sepalLength: DS.attr 'number'
  sepalWidth: DS.attr 'number'
  petalLength: DS.attr 'number'
  petalWidth: DS.attr 'number'
  group: DS.attr 'string'

`export default model`  
