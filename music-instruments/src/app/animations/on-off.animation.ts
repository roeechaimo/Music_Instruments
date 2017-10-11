import { animate, state, style, transition, trigger } from '@angular/animations';

export const ON_OFF_ANIMATION =
  trigger('onOffTrigger', [
    transition('* => *', animate('.15s', style({'box-shadow': '0.2vh 0.2vh 0.1vh #888888'}))),
    transition('* => *', animate('.15s', style({'box-shadow': '0.2vh 0.2vh 0.1vh #888888'})))
  ]);
