import { animate, state, style, transition, trigger } from '@angular/animations';

export const ON_OFF_ANIMATION =
  trigger('onOffTrigger', [
    state('off', style({
      transform: 'scale(1)'
    })),
    state('on', style({
      transform: 'scale(0.9)'
    })),
    transition('off => on', animate('.2s 100ms ease-in')),
    transition('on => off', animate('.2s 100ms ease-out'))
  ]);
