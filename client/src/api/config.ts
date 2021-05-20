import Axios from 'axios';

export const isProduction = process.env.NODE_ENV === 'production';

export const hosts = {
  PRODUCTION_URL: 'https://customers-ghitiago.herokuapp.com/',
  DEVELOPMENT_URL: 'http://localhost:8080'
};

export const portfolioApi = Axios.create({
  baseURL: isProduction ? hosts.PRODUCTION_URL : hosts.DEVELOPMENT_URL
});
