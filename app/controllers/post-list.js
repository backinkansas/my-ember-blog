import Controller from '@ember/controller';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  allPosts: reads('model.posts'),
});
