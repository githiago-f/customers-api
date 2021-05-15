import {range} from 'lodash';
import { Email } from './../../src/value-objects';

describe('#Email', () => {
  describe('.valid', () => {
    describe('when valid input', () => {
      it('returns the valid email', () => {
        const validEmail = () => Email('thiago.dutra@protonmail.com');
        expect(validEmail).not.toThrow();
        expect(validEmail()).toEqual('thiago.dutra@protonmail.com');
      });
    });

    describe('when invalid input', () => {
      const empty = () => Email(' ');
      const tooLong = () => Email(range(325).reduce((i, j)=>i+j, ''));
      const isNotEmail = () => Email('thiago.dutra');
      it('should throw InvalidEmail error', () => {
        expect(empty).toThrow('Invalid email: E-mail too short (min size is 4)');
        expect(tooLong).toThrow('Invalid email: E-mail too long (max size is 320)');
        expect(isNotEmail).toThrow('Invalid email: thiago.dutra is not an e-mail');
      });
    })
  });
});
