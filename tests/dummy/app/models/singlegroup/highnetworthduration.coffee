`import DS from 'ember-data'`
`import Ember from 'ember'`

model = DS.Model.extend
  label: DS.attr 'string' 
  value: DS.attr 'number' 

`export default model`  
