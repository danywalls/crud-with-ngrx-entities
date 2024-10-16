import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Place } from './places.state';
import { Update } from '@ngrx/entity';

export const PlacesPageActions = createActionGroup({
  source: 'Places',
  events: {
    'Load Places': emptyProps(),
    'Load Places Success': props<{ places: Place[] }>(),
    'Add Place': props<{ place: Place }>(),
    'Update Place': props<{ place: Update<Place> }>(),
    'Delete All Places': emptyProps(),
    'Delete Place': props<{ id: string }>(),
    'Mark All Places Visited': emptyProps(),
    'Select Place': props<{ place: Place }>(),
    'UnSelect Place': emptyProps(),
  },
});
