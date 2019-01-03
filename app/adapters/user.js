import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:4000',
  headers: computed(function(){
    return {
      'authorization': 'fluba'
    }
  }),

  buildURL() {
    return 'login'
  }
});
