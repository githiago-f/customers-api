import { City } from '../entity';

export type CustomersInCity = {
  city_id: number;
  city: string;
  customers_total: number;
}

export const CustomersInCity = (city: City, customers: number) => ({
  city_id: city.id,
  city: city.name,
  customers_total: customers
});
