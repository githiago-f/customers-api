import { CustomersInCity } from '../value-objects/customers-in-city';
import {Customer} from './../entity';

export interface CustomerRepository {
  create(customer: Customer): Promise<Customer|void>;
  findAllPaged(page?: number): Promise<Customer[]>;
  findByCityPaged(city: number, page?: number): Promise<Customer[]>;
  findById(id: number): Promise<Customer|undefined|null>;
  totalByCity(): Promise<CustomersInCity[]>;
  update(customer: Customer): Promise<void|Customer>;
}
