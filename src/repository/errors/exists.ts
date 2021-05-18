export class Exists extends Error {
  constructor(entityName: string) {
    super(`${entityName} already exists.`);
    this.name = 'EntryConflict';
  }
}
