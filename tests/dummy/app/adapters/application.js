import DS from 'ember-data'

var ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api',
	buildURL: function(modelName, id, snapshot, requestType, query) {
		var url = modelName.replace('.', '/');
		return this._super(url, id, snapshot, requestType, query);
	}	
});

export default ApplicationAdapter;