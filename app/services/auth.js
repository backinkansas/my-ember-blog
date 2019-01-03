import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import fetch from 'fetch';

export default Service.extend({
  store: service(),
  token: null,
  isAuthenticated: computed('token', function() {
    return this.get('token') ? true : false
  }),

  async _handleResponse(response) {
    if (response.ok) {
      return await response.json();
    }

    return false
  },

  async login({email, password}) {
    let user = null
    try {

      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });

      user = await this._handleResponse(response)
      console.log(user)
      this.set('token', user.token)
    } catch (err) {
      console.log(err)
    }

    return user;
  }
});
