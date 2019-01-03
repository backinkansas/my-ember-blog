import Mixin from '@ember/object/mixin';
import  { inject as service } from '@ember/service';

export default Mixin.create({
  auth: service(),

  beforeModel() {
    this._super();

    const isAuthenticated = this.get('auth.isAuthenticated');

    console.log(isAuthenticated);

    if (!isAuthenticated) {
      this.transitionTo('login');
    }
  }
});
