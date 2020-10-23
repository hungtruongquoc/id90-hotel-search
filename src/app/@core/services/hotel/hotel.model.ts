export class HotelModel {
  public displayName: string;
  public location?: {longitude, latitude};
  public image?: string;

  constructor(public id: string, public name: string, public code: string, public lat: number, public long: number) {
    this.displayName = name;
  }
}
