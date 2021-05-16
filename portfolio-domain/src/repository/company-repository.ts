import { Company } from '../entity';

export interface CompanyRepository {
  getAll(): Promise<Company[]>;
  create(company: Company): Promise<void|Company>;
}
