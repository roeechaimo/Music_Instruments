import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { GetJson } from './services/GetJson.service';
import { PlayNote } from './services/PlayNote.service';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './components/accordion/accordion.component';
import { XylophonerComponent} from './components/xylophone/xylophone.component';
import { DrumComponent} from './components/drum/drum.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

const appRoutes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'xylophone', component: XylophonerComponent },
  { path: 'drum', component: DrumComponent },
  {
    path: '',
    redirectTo: '/accordion',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    XylophonerComponent,
    DrumComponent,
    HeaderComponent,
    FooterComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule
  ],
  providers: [GetJson, PlayNote],
  bootstrap: [AppComponent]
})
export class AppModule { }
