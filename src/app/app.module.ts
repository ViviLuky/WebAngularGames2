import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesEditComponent } from './components/games-edit/games-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    GamesListComponent,
    GamesEditComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
