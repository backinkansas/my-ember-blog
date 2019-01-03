import Route from '@ember/routing/route';
import authenticatedRouteMixin from '../mixins/authenticated-route-mixin'
import { inject as service } from '@ember/service';

export default Route.extend(authenticatedRouteMixin, {
  posts: service(),

  async model() {
    const service = this.get('posts');
    const allPosts = await service.getPosts()
    console.log(allPosts)
    return allPosts
  }
});
