import dotenv from 'dotenv';

import axios from 'axios';

dotenv.config();

export default axios.create({
  baseURL: process.env.BASE_URL,
});
