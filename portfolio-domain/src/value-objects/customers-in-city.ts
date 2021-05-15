import { City } from '../entity';

export type CustomersInCity = {
  city: string;
  customers_total: number;
}

export const CustomersInCity = (city: City, customers: number) => ({
  city: city.name,
  customers_total: customers
});
