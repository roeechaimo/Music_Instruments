import { animate, state, style, transition, trigger } from '@angular/animations';

export const ON_OFF_ANIMATION =
  trigger('onOffTrigger', [
    state('off', style({
      transform: 'box-shadow(0.5vh 0.5vh 0.2vh #888888)'
    })),
    state('on', style({
      transform: 'box-shadow(0.2vh 0.2vh 0.1vh #888888)'
    })),
    transition('off => on', animate('.1s 100ms')),
    transition('on => off', animate('.1s 100ms'))
  ]);
