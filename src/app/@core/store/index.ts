import {Action, createAction, createReducer, on, props} from '@ngrx/store';
import {AirlineModel} from '../services/airline/airline.model';

export const GET_ALL_AIRLINES = '[Airline Feature] Get All';
export const UPDATE_AIRLINE_LIST = '[Airline Feature] Update Airline List';

export interface AirlineAction extends Action {
  type: string;
  airlines?: AirlineModel[];
}

export interface State {
  airlines: AirlineModel[];
}

export const initialState: State = {
  airlines: null
};
// Selectors
export const selectAirlineList = (state: any) => {
  return state.airline.airlines;
};


// Actions
export const getAllAirlines = createAction(GET_ALL_AIRLINES);
export const updateAirlineList = createAction(UPDATE_AIRLINE_LIST, props<{ airlines: AirlineModel[] }>());

// Reducer
export const airlineReducer = createReducer(initialState,
  on(updateAirlineList, (state, action: AirlineAction) => {
    return {...state, airlines: [...action.airlines]};
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return airlineReducer(state, action);
}
