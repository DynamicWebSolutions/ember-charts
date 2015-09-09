`import DS from 'ember-data'`
`import Ember from 'ember'`

model = DS.Model.extend
	xValue: DS.attr 'number' 
	yValue: DS.attr 'number' 

`export default model`  
