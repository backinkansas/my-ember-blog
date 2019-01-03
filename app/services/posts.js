import Service, { inject as service } from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  auth: service(),
  url: 'http://localhost:4000',

  async getPosts() {
    const auth = this.get('auth');
    const url = this.get('url');

    const response = await fetch(`${url}/posts`, {
      method: 'GET',
      headers: {
        authorization: auth.get('token')
      }
    })
    return response.json()
  },

  async createPost({ title, content }) {
    const auth =  this.get('auth');
    const url = this.get('url');
    console.log({title, content})

    const response = await fetch(`${url}/posts`, {
      method: 'POST',
      headers: {
        authorization: auth.get('token')
      },
      body: JSON.stringify({
        "title": title,
        "content": content
      })
    })

    return
  }
});
