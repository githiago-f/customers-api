import { City, Company } from 'portfolio-domain';

export const createCitySelector = (cities: City[]) => [
  {id:0, name: 'Selecione uma cidade'},
  ...cities
];

export const createCompanySelector = (companies: Company[]) => [
  {id:0, name: 'Selecione uma compania'},
  ...companies
];
