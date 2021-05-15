import { City } from '../../src';

describe('#City', () => {
  describe('.valid', () => {
    describe('when input is valid', () => {
      it('has a valid name and id is undefined', () => {
        const city = City({ name: 'Porto Alegre,RS' });
        expect(city).toMatchObject({
          id: undefined,
          name: 'Porto Alegre,RS'
        });
      });
      it('has a valid name and id is present', () => {
        const city = City({ id: 1, name: 'Porto Alegre,RS' });
        expect(city).toMatchObject({
          id: 1,
          name: 'Porto Alegre,RS'
        });
      });
    });
    describe('when a invalid input is given', () => {
      it('fails if no name is given', () => {
        const noNameCity = () => City({});
        expect(noNameCity).toThrow('Invalid name: Name should not be null or empty');
      });
    });
  });
});
