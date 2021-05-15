import { Customer } from '../../src';

describe('#Customer', () => {
  describe('when input is valid', () => {
    const customer = Customer({
      first_name: 'Thiago',
      last_name: 'Farias',
      titulation: 'JR Developer',
      email: 'thiago.dutra@protonmail.com',
      gender: 'uninformed'
    });
    it('is a valid customer', () => {
      expect(customer.email).toBe('thiago.dutra@protonmail.com');
      expect(customer.city).toBe(undefined);
      expect(customer.first_name).toBe('Thiago');
    });
  });
});
