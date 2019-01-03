import Controller from '@ember/controller';
import { computed } from '@ember/object'
import { inject as service } from '@ember/service';

export default Controller.extend({
  auth: service(),
  email: '',
  password: '',
  errorMessage: 'Email ou senha inválidos',
  hasError: false,
  actions: {
    async login(event) {
      event.preventDefault()
      const {
        email,
        password
      } = this.getProperties('email', 'password');

      const user = await this.get('auth').login({ email, password })

      if (user) {
        this.transitionToRoute('post-list');
      } else {
        this.set('hasError', true);
      }
    }
  }
});
