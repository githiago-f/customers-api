import { Customer, CustomersInCity, Page } from 'portfolio-domain';
import { portfolioApi } from './config';

export const customersGroupedByCity = async () => {
  const {data} = await portfolioApi.get<CustomersInCity[]>('/customer/groupByCity');
  return data;
};
export const customerById = async (customerId: string) => {
  const {data} = await portfolioApi.get<Customer>('/customer/'+customerId);
  return data;
};

export const customersByCity = async (city_id: string, page = 0) => {
  const {data} = await portfolioApi.get<Page<Customer>>('/customer', {
    params: {
      city: city_id,
      page: page
    }
  });
  return data;
};

export const createCustomer = async (customer: Customer) => {
  const {status, data} = await portfolioApi.post('/customer', customer);
  return {status, data};
};

export const updateCustomer = async (customer: Customer) => {
  const {status, data} = await portfolioApi.patch('/customer', customer);
  return {status, data};
};
