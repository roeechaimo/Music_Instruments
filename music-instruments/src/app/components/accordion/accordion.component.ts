import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  animations: [ ON_OFF_ANIMATION ]
})

export class AccordionComponent implements OnInit {

  results;
  audio;
  triggerStateName: string;

  constructor(private http: HttpClient) { }

  accordionKeys = [];

  playNote(index) {    
    this.accordionKeys[index].state = this.accordionKeys[index].state === 'on' ? 'off' : 'on';
    this.audio = new Audio();
    this.audio.src = this.accordionKeys[index].audioLink;
    this.audio.play();
  }

  ngOnInit(): void {
    this.http.get('../../assets/accordion.json').subscribe(data => {
      this.results = data['accordion-keys'];
      this.accordionKeys = this.results;
    });
  }
}
