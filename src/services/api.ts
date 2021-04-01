import axios from 'axios';

export default {
  git_hub: axios.create({
    baseURL: 'http://api.github.com',
  }),
  tweets: axios.create({
    baseURL: 'http://my-json-server.typicode.com/diipacheco/twitter-clone-db/',
  }),
};
