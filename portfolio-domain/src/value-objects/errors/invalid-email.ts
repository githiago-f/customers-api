export class InvalidEmail extends Error {
  constructor(cause: string) {
    super(`Invalid email: ${cause}`);
    this.name = 'InvalidEmail';
  }
}
