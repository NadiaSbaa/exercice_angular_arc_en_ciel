import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './directives/word/word.component';
import { ArcEnCielDirective } from './directives/arc-en-ciel.directive';
import { CvComponent } from './cv/pages/cv/cv.component';
import { DetailComponent } from './cv/components/detail/detail.component';
import { ItemComponent } from './cv/components/item/item.component';
import { CardComponent } from './cv/components/card/card.component';
import { ListComponent } from './cv/components/list/list.component';
import { RandomStringPipe } from './pipes/random-string.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ArcEnCielDirective,
    CvComponent,
    DetailComponent,
    ItemComponent,
    CardComponent,
    ListComponent,
    RandomStringPipe,
    DefaultImagePipe,
    TodoComponent
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
