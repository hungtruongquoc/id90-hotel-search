import { ModelAdapter } from '@app/@core/interfaces';
import {AirlineModel} from './airline.model';

export class AirlineAdapter implements ModelAdapter<AirlineModel> {
  adapt(item: any): AirlineModel {
    return new AirlineModel(
      item.id,
      item.display_name,
      item.code
    );
  }
  encode(item: AirlineModel) {
    return {
      id: item.id,
      display_name: item.displayName,
      code: item.code
    };
  }
}
