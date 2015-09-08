`import DS from 'ember-data'`
`import Ember from 'ember'`

assetvalue = DS.Model.extend
  label: DS.attr 'string' 
  value: DS.attr 'number' 

`export default assetvalue`  
