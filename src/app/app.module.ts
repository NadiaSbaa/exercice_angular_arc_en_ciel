import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './directives/word/word.component';
import { ArcEnCielDirective } from './directives/arc-en-ciel.directive';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ArcEnCielDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
