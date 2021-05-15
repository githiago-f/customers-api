export class InvalidGender extends Error {
  constructor() {
    super('Gender should be "male", "female" or "uninformed"');
    this.name = 'InvalidGender';
  }
}
