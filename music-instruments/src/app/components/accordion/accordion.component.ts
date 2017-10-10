import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html'
})

export class AccordionComponent implements OnInit {

  results;
  audio;

  constructor(private http: HttpClient) { }

  accordionKeys = [];

  playNote(index) {
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
