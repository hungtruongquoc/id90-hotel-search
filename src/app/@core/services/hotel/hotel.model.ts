export class HotelModel {
  public displayName: string;
  public location?: {longitude, latitude};

  constructor(public id: number, public name: string, public code: string, public lat: number, public long: number) {
    this.displayName = name;
  }
}
