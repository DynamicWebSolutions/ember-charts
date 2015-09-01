module.exports = {
  name: 'ember-charts',  
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addBowerPackageToProject([
      {name: 'd3', target: '~3.5.6'},
      {name: 'lodash', target: '~3.10.1'}      
    ]); 
  }
};
