import axios from 'axios';

export default {
  git_hub: axios.create({
    baseURL: 'https://api.github.com',
  }),
  tweets: axios.create({
    baseURL: 'https://my-json-server.typicode.com/diipacheco/twitter-clone-db/',
  }),
};
