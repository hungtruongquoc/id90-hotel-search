import {Action, createAction, createReducer, on, props} from '@ngrx/store';
import {HotelModel} from '@core/services/hotel/hotel.model';

export const GET_ALL_HOTEL = '[Hotel Feature] Get All';
export const UPDATE_HOTEL_LIST = '[Hotel Feature] Update Hotel List';
export const UPDATE_HOTEL_LIST_AND_META = '[Hotel Feature] Update Hotel List and Meta Info';

export interface HotelAction extends Action {
  type: string;
  hotels?: HotelModel[];
  meta?: any;
}

export interface GetHotelAction extends Action {
  type: string;
  guests?: number;
  destination?: string;
  checkin?: string;
  checkout?: string;
}

export interface State {
  hotels?: HotelModel[];
  metaInfo?: any;
}

export interface HotelListParams {
  guests?: number;
  destination?: string;
  checkin?: string;
  checkout?: string;
}

export const initialState: State = {
  hotels: null,
  metaInfo: null
};
// Selectors
export const selectHotelList = (state: any) => {
  return state.hotel.hotels;
};

export const selectHotelListMeta = (state: any) => {
  return state.hotel.metaInfo;
};


// Actions
export const getAllHotels = createAction(GET_ALL_HOTEL, props<HotelListParams>());
export const updateHotelListAction = createAction(UPDATE_HOTEL_LIST, props<{ hotels: HotelModel[] }>());
export const updateHotelListAndMetaInfo = createAction(UPDATE_HOTEL_LIST_AND_META, props<{ hotels: HotelModel[] }>());

// Reducer
export const hotelReducer = createReducer(initialState,
  on(updateHotelListAction, (state, action: HotelAction) => {
    return {...state, hotels: [...action.hotels]};
  }),
  on(updateHotelListAndMetaInfo, (state, action: HotelAction) => {
    debugger;
    return {...state, hotels: [...action.hotels], metaInfo: {...action.meta}};
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return hotelReducer(state, action);
}
