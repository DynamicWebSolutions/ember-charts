import Ember from 'ember';

export default Ember.Component.extend({

	value: 0,
	min: 0,
	max: 0,
	step: 0,

	didInsertElement: function() {
		var component = this; 

		this.$().slider({
			value: component.get('value'),
			min: component.get('min'),
			max: component.get('max'),
			step: component.get('step'),
			change: function( event, ui ) {
				component.sendAction('action', ui.value);
			}			
		});
	}
});