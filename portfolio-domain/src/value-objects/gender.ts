import {some} from 'lodash';
import { InvalidGender } from "./errors"

const validValues = [
  'male',
  'female',
  'uninformed'
];

export const Gender = (value?: string) => {
  if(!value) {
    throw new InvalidGender();
  }
  if(value.trim().length < 1 && !some(validValues, value.toLowerCase())) {
    throw new InvalidGender();
  }
  return value;
}
