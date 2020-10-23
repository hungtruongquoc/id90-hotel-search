import { ModelAdapter } from '@app/@core/interfaces';
import {HotelModel} from './hotel.model';

export class HotelAdapter implements ModelAdapter<HotelModel> {
  adapt(item: any): HotelModel {
    return new HotelModel(
      item.id,
      item.name,
      item.code,
      item.location.latitude,
      item.location.longitude
    );
  }
  encode(item: HotelModel) {
    return {
      id: item.id,
      display_name: item.displayName,
      code: item.code,
      name: item.name,
      location: {
        latitude: item.lat,
        longitude: item.long
      }
    };
  }
}
