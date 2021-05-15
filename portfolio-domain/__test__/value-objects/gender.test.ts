import { Gender } from '../../src';

describe('#Gender', () => {
  describe('.valid', () => {
    it('accept any valid inputs', () => {
      expect(Gender('female')).toEqual('female');
      expect(Gender('male')).toEqual('male');
      expect(Gender('uninformed')).toEqual('uninformed');
    });
    it('doesn\'t accept a empty string as value', () => {
      const invalidGender = () => Gender('');
      expect(invalidGender).toThrow('Gender should be "male", "female" or "uninformed"');
    });
  });
});
