export class InvalidCompany extends Error {
  constructor() {
    super('Company can\'t be zero');
    this.name = 'InvalidCompany';
  }
}
