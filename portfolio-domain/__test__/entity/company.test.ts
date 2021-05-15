import { Company } from '../../src';

describe('#Company', () => {
  describe('.valid', () => {
    describe('when input is valid', () => {
      it('has a valid name and id is undefined', () => {
        expect(Company({ name: 'GitHub' })).toMatchObject({
          id: undefined,
          name: 'GitHub'
        });
      });
      it('has a valid name and id is present', () => {
        expect(Company({ id: 1, name: 'GitHub' })).toMatchObject({
          id: 1,
          name: 'GitHub'
        });
      });
    });
    describe('when a invalid input is given', () => {
      it('fails if no name is given', () => {
        const noNameCity = () => Company({});
        expect(noNameCity).toThrow('Invalid name: Name should not be null or empty');
      });
    });
  });
});
