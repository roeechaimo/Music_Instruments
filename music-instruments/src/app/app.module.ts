import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { DrumComponent } from "./components/drum/drum.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { InstructionsComponent } from "./components/instructions/instructions.component";
import { SelectionComponent } from "./components/selection/selection.component";
import { XylophonerComponent } from "./components/xylophone/xylophone.component";
import { GetJson } from "./services/GetJson.service";
import { PlayNote } from "./services/PlayNote.service";

const appRoutes: Routes = [
  { path: "accordion", component: AccordionComponent },
  { path: "xylophone", component: XylophonerComponent },
  { path: "drum", component: DrumComponent },
  { path: "selection", component: SelectionComponent },
  {
    path: "",
    redirectTo: "/selection",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    AccordionComponent,
    XylophonerComponent,
    DrumComponent,
    HeaderComponent,
    FooterComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule
  ],
  providers: [GetJson, PlayNote],
  bootstrap: [AppComponent]
})
export class AppModule {}
