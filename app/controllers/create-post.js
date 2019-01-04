import Controller from '@ember/controller';
import { inject as service} from '@ember/service';

export default Controller.extend({
  posts: service(),
  titleName: '',
  contentName: '',

  actions: {
    async savePost() {
      const title = this.get('titleName')
      const content = this.get('contentName')
      const service = this.get('posts')

      await service.createPost({ title, content })

      this.set('titleName', '')
      this.set('contentName', '')
      return this.transitionToRoute('post-list')
    },

    cancelCreation() {
      this.set('titleName', '')
      this.set('contentName', '')
      return
    }
  },
});
