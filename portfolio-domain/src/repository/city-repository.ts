import { City } from '../entity';

export interface CityRepository {
  getAll(): Promise<City[]>;
  create(city: City): Promise<void|City>;
}
