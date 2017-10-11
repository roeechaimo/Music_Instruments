import { animate, state, style, transition, trigger } from '@angular/animations';

export const ON_OFF_ANIMATION =
  trigger('onOffTrigger', [
    transition('* => *', animate('.15s', style({'box-shadow': 'none'}))),
    transition('* => *', animate('.15s', style({'box-shadow': 'none'})))
  ]);
