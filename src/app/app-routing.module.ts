import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesListComponent} from "./components/games-list/games-list.component";
import {GamesEditComponent} from "./components/games-edit/games-edit.component";
import {BooksListComponent} from "./components/books-list/books-list.component";

const routes: Routes = [
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'games',
    component: GamesEditComponent
  },
  {
    path: 'games/add',
    component: GamesEditComponent
  },
  {
    path: 'games/add/:id',
    component: GamesEditComponent
  },
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: '',
    redirectTo:'/games',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo:'/games',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
