import axios from 'axios';

export const  AxiosInstance = axios.create({

    baseURL: 'http://localhost:4000/api/package/',

    // headers: {'X-Custom-Header': 'foobar'}

  });