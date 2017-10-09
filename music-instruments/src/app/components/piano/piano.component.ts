import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: 'piano.component.html'
})

export class PianoComponent implements OnInit {

  results;
  audio;

  constructor(private http: HttpClient) { }

  pianoKeys = [];

  playNote(index) {    
    this.audio = new Audio();
    this.audio.src = '../' + this.pianoKeys[index].audioLink;
    this.audio.play();
  }

  ngOnInit(): void {
    this.http.get('../../assets/piano.json').subscribe(data => {
      this.results = data['piano-keys'];
      this.pianoKeys = this.results;
    });
  }
}
