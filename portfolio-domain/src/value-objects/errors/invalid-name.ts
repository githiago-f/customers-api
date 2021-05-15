export class InvalidName extends Error {
  constructor(cause: string) {
    super(`Invalid name: ${cause}`);
    this.name = 'InvalidName';
  }
}
