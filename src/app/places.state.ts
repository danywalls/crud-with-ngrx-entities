import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface Place {
  id: number;
  name: string;
  when: string;
  visited: boolean;
}

export interface PlaceState extends EntityState<Place> {
  selectedPlace: Place | null;
}

const adapter = createEntityAdapter<PlaceState>({});

export const initialPlacesState = adapter.getInitialState({
  selectedPlace: null,
});

export const placesReducer = createReducer(initialPlacesState);
