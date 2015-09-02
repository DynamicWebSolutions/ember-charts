import Ember from 'ember'

export default Ember.Helper.helper(function([left, right]){
  return left === right;
});