import axios from 'axios';

export default axios.create({
  baseURL: ' http://192.168.0.20:8000/api',
});
