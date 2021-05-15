import { InvalidEmail } from "./errors/invalid-email";

export const Email = (value: string) => {
  const emailRegex = /^[\w.-]+@([\w-]+\.)+\w{2,}$/;
  const size = value.trim().length;

  const [tooShort, tooLong] = [
    'E-mail too short (min size is 4)',
    'E-mail too long (max size is 320)'
  ];

  if(size <= 3 || size > 320) {
    throw new InvalidEmail(size > 320?tooLong:tooShort);
  }
  if(!emailRegex.test(value)) {
    throw new InvalidEmail(value + ' is not an e-mail');
  }
  return value;
}
