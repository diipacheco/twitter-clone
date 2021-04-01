import Tweet from '../components/Tweet';
import api from '../services/api';

interface Tweet {
  id: number;
  avatar_author_url?: string;
  author_name: string;
  author_nickname: string;
  content: string;
  retweets: number;
  likes: number;
}

async function fetchTweets(): Promise<Tweet[]> {
  const response = await api.get<Tweet[]>('/tweets');
  return response.data;
}

function wrapPromise(promise: Promise<Tweet[]>) {
  let status = 'pending';
  let result: Tweet[] | undefined;
  const suspender = promise.then(
    response => {
      status = 'success';
      result = response;
    },
    error => {
      status = 'error';
      result = error;
    },
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }
      return result;
    },
  };
}

export default function fetchTweetsData() {
  const postsPromise = fetchTweets();
  return {
    tweets: wrapPromise(postsPromise),
  };
}
