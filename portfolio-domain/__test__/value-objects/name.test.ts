import {range} from 'lodash';
import { Name } from '../../src/value-objects';

describe('#Name', () => {
  describe('.valid', () => {
    describe('when input is invalid', () => {
      const tooShortMessage = 'Invalid name: Name is too short (min 3)';
      const tooLongMessage = 'Invalid name: Name is too long (max 80)';
      const nullOrEmpty = 'Invalid name: Name should not be null or empty';

      it('should not be null or empty', () => {
        const invalidname = () => Name('');
        expect(invalidname).toThrow(nullOrEmpty);
      });
      it('should not be shorter than 3 char', () => {
        const invalidname = () => Name('an ');
        expect(invalidname).toThrow(tooShortMessage);
      });
      it('should not be longer than 80 char', () => {
        const invalidname = () => Name(range(81).join(''));
        expect(invalidname).toThrow(tooLongMessage);
      });
    });
    describe('when input is valid', () => {
      it('can have spaces', () => {
        expect(Name('Jane Doe')).toEqual('Jane Doe');
      });
      it('can have no spaces', () => {
        expect(Name('Urokodaki')).toEqual('Urokodaki');
      });
    });
  });
});
