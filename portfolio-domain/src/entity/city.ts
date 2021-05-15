import { Name } from "../value-objects";

export type CityDTO = Partial<{
  id: number;
  name: string;
}>;

export const City = (cityDto: CityDTO) => {
  return {
    id: cityDto.id,
    name: Name(cityDto.name)
  };
};
