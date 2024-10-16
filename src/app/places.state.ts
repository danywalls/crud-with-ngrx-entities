import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface Place {
  id: number;
  name: string;
  when: string;
  visited: boolean;
}

export interface PlaceState extends EntityState<Place> {
  selectedPlace: Place | null;
}

export const adapter = createEntityAdapter<Place>();

export const initialPlacesState = adapter.getInitialState({
  selectedPlace: null,
});
