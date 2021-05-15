import { InvalidName } from "./errors"

export const Name = (value?: string) => {
  if(!value) {
    throw new InvalidName('Name should not be null or empty');
  }
  const size = value.trim().length;
  if(size <= 2 || size > 80) {
    throw new InvalidName(size > 80 ? 'Name is too long (max 80)': 'Name is too short (min 3)');
  }
  return value;
}
