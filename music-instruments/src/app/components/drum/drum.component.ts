import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';

@Component({
  selector: 'app-drum',
  templateUrl: 'drum.component.html',
  animations: [ON_OFF_ANIMATION]
})
export class DrumComponent implements OnInit {
  results;
  audio;
  keyboardKey;  
  triggerStateName: string;

  constructor(private http: HttpClient) { }

  drumKeys = [];

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardKey = event.key;
    let keyExists = this.drumKeys.filter(drumKey => {
      return this.keyboardKey === drumKey.keyboard;
    });
    if (keyExists.length !== 0) {
      this.playNote(keyExists[0].id);
    } else {
      return false;
    }
  }

  playNote(index) {
    this.drumKeys[index].state = this.drumKeys[index].state === 'on' ? 'off' : 'on';
    this.audio = new Audio();
    this.audio.src = this.drumKeys[index].audioLink;
    this.audio.play();
  }

  getClass(index) {
    return this.drumKeys[index].class;
  }

  checkIfClassExists(index, cls) {
    if (this.drumKeys[index].class.indexOf(cls) > -1) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.http.get('../../assets/drum.json').subscribe(data => {
      this.results = data['drum-keys'];
      this.drumKeys = this.results;
    });
  }
}
