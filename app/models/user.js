import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  name: DS.attr('string'),
  password: DS.attr('string'),
  token: DS.attr('string')
});
