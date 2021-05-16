import Axios from 'axios';

export const portfolioApi = Axios.create({
  baseURL: 'http://localhost:8080'
});
