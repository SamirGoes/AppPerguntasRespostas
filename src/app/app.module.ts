import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PainelperguntasComponent } from './painelperguntas/painelperguntas.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelperguntasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
