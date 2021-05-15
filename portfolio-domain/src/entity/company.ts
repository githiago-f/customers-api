import { Name } from '../value-objects';

export type CompanyDTO = Partial<{
  id: number;
  name: string;
}>;

export type Company = {
  id?: number;
  name: string;
}

export const Company = (companyDto: CompanyDTO) => {
  return {
    id: companyDto.id,
    name: Name(companyDto.name)
  };
};
