import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Place } from './places.state';

export const PlacesPageActions = createActionGroup({
  source: 'Places',
  events: {
    'Load Places': emptyProps(),
    'Add Place': props<{ place: Place }>(),
    'Update Place': props<{ place: Place }>(),
    'Delete Place': props<{ id: string }>(),
    'Select Place': props<{ place: Place }>(),
    'UnSelect Place': emptyProps(),
  },
});
