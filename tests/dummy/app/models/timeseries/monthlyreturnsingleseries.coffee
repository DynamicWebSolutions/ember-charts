`import DS from 'ember-data'`
`import Ember from 'ember'`

monthlyreturnsingleseries = DS.Model.extend
  time: DS.attr 'date' 
  value: DS.attr 'number' 

`export default monthlyreturnsingleseries`  