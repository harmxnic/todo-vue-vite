import axios from 'axios';

export const useFetch = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos?_limit=';
  const limit = 8;

  return await axios.get(url + limit);
};