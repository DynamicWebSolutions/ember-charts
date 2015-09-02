`import DS from 'ember-data'`
`import Ember from 'ember'`

dailyfiveseries = DS.Model.extend
	label: DS.attr 'string'
	time: DS.attr 'date' 
	value: DS.attr 'number' 

`export default dailyfiveseries`  