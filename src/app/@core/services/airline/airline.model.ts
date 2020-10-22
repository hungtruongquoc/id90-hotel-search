export class AirlineModel {
  public displayName: string;
  public id: number;
  public code: string;

  constructor(id: number, name: string, code: string) {
    this.id = id;
    this.displayName = name;
    this.code = code;
  }
}
