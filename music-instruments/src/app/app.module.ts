import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { GuitarComponent } from './components/guitar/guitar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'guitar', component: GuitarComponent },
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
    GuitarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
