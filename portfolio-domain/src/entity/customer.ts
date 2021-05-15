import { Email, Gender, Name } from "../value-objects";

export type CustomerDTO = Partial<{
  id: number;
  first_name: string;
  last_name: string;
  gender: 'male' | 'female' | 'uninformed';
  email: string;
  company: number|string;
  city: number|string;
  titulation: string;
}>;

export type Customer = {
  id: number | undefined;
  first_name: string;
  last_name: string;
  email: string;
  company: string | number | undefined;
  city: string | number | undefined;
  titulation: string | undefined;
  gender: string;
};

export const Customer = (customerDto: CustomerDTO) => ({
  id: customerDto.id,
  first_name: Name(customerDto.first_name),
  last_name: Name(customerDto.last_name),
  email: Email(customerDto.email),
  company: customerDto.company,
  city: customerDto.city,
  titulation: customerDto.titulation,
  gender: Gender(customerDto.gender)
});
