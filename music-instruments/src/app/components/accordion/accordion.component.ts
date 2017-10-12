import { OnInit } from '@angular/core';
import { GetJson } from '../../services/GetJson.service';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  animations: [ ON_OFF_ANIMATION ]
})

export class AccordionComponent implements OnInit {

  results;
  audio;
  keyboardKey;
  triggerStateName: string;

  constructor(private _getJson: GetJson) { }

  accordionKeys = [];

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardKey = event.key;
    let keyExists = this.accordionKeys.filter(accordionKey => {
      return this.keyboardKey === accordionKey.keyboard;
    });
    if(keyExists.length !== 0){
      this.playNote(keyExists[0].id);
    } else{
      return false;
    }
  }

  playNote(index) {
    this.accordionKeys[index].state = this.accordionKeys[index].state === 'on' ? 'off' : 'on';
    this.audio = new Audio();
    this.audio.src = this.accordionKeys[index].audioLink;
    this.audio.play();
  }

  getClass(index) {
    return this.accordionKeys[index].class;
  }

  ngOnInit() {
    let accordionKeys;
    this._getJson.getDataFromJson("accordion").then((res) => {
      accordionKeys = res;
      this.accordionKeys = accordionKeys["accordion-keys"];
    });
  }
}
