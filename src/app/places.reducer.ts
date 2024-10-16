import { createReducer, on } from '@ngrx/store';
import { adapter, initialPlacesState } from './places.state';
import { PlacesPageActions } from './places.actions';

export const placesReducer = createReducer(
  initialPlacesState,
  on(PlacesPageActions.loadPlaces, (state, {}) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(PlacesPageActions.loadPlacesSuccess, (state, { places }) => {
    const updatedState = {
      ...state,
      loading: false,
    };
    return adapter.setAll(places, updatedState);
  }),
  on(PlacesPageActions.addPlace, (state, { place }) => {
    return adapter.addOne(place, state);
  }),
  on(PlacesPageActions.updatePlace, (state, { place }) => {
    return adapter.updateOne(place, state);
  }),
  on(PlacesPageActions.deletePlace, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(PlacesPageActions.deleteAllPlaces, (state) => {
    return adapter.removeAll({ ...state, selectedPlace: null });
  }),
);
