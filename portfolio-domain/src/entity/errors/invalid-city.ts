export class InvalidCity extends Error {
  constructor() {
    super('City can\'t be zero');
    this.name = 'InvalidCity';
  }
}
