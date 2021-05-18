import { City, Company } from 'portfolio-domain';
import { portfolioApi } from './config';

export const getAllCities = async () => {
  const {data} = await portfolioApi.get<City[]>('/city');
  return data;
};

export const getAllCompanies = async () => {
  const {data} = await portfolioApi.get<Company[]>('/company');
  return data;
};
