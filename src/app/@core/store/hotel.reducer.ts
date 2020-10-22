import {Action, createAction, createReducer, on, props} from '@ngrx/store';
import {HotelModel} from '@core/services/hotel/hotel.model';

export const GET_ALL_HOTEL = '[Hotel Feature] Get All';
export const UPDATE_HOTEL_LIST = '[Hotel Feature] Update Hotel List';

export interface HotelAction extends Action {
  type: string;
  hotels?: HotelModel[];
}

export interface GetHotelAction extends Action {
  type: string;
  guests?: number;
  destination?: string;
  checkin?: string;
  checkout?: string;
}

export interface State {
  hotels: HotelModel[];
}

export interface HotelListParams {
  guests?: number;
  destination?: string;
  checkin?: string;
  checkout?: string;
}

export const initialState: State = {
  hotels: null
};
// Selectors
export const selectAirlineList = (state: any) => {
  return state.airline.airlines;
};


// Actions
export const getAllHotels = createAction(GET_ALL_HOTEL, props<HotelListParams>());
export const updateAirlineList = createAction(UPDATE_HOTEL_LIST, props<{ hotels: HotelModel[] }>());

// Reducer
export const hotelReducer = createReducer(initialState,
  on(updateAirlineList, (state, action: HotelAction) => {
    return {...state, hotels: [...action.hotels]};
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return hotelReducer(state, action);
}