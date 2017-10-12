import { Injectable } from '@angular/core';
import { HostListener } from '@angular/core';

@Injectable()

export class KeyBoardKey {

  constructor() { }

  keyboardKey;
  requestedArray;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardKey = event.key;
    let keyExists = this.requestedArray.filter(key => {
      return this.keyboardKey === key.keyboard;
    });
    if (keyExists.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  activate(array){
    this.requestedArray = array;
  }

}
