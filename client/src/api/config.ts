import Axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

export const portfolioApi = Axios.create({
  baseURL: isProduction ? '' : 'http://localhost:8080'
});
