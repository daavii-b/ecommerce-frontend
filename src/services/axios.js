import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
