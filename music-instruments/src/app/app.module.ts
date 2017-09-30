import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PianoComponent } from './components/piano/piano.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'piano', component: PianoComponent },
  {
    path: '',
    redirectTo: '/piano',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PianoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
