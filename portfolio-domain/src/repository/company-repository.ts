import { Company } from '../entity';

export interface CompanyRepository {
  getAll(): Promise<Company[]>;
  create(city: Company): Promise<void|Company>;
}
