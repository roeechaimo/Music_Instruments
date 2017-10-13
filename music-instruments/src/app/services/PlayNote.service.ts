import { Injectable } from '@angular/core';

@Injectable()

export class PlayNote {

  constructor() { }

  audio;
  keyboardKey;
  requestedArray;

  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardKey = event.key;
    let keyExists = this.requestedArray.filter(key => {
      return this.keyboardKey === key.keyboard;
    });
    if (keyExists.length !== 0) {
      this.playNote(keyExists[0].id);
      return true;
    } else {
      return false;
    }
  }

  activate(array) {
    this.requestedArray = array;
    document.addEventListener('keypress', (event) => {
      this.handleKeyboardEvent(event);
      return true;
    });

  }

  playNote(index) {
    this.requestedArray[index].state = this.requestedArray[index].state === 'on' ? 'off' : 'on';
    this.audio = new Audio();
    this.audio.src = this.requestedArray[index].audioLink;
    this.audio.play();
  }

}
