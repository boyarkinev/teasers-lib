import axios from 'axios';

const headersConfig = {
  Accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const instance = axios.create({
  baseURL: 'https://itunes.apple.com',
  headers: headersConfig,
});
