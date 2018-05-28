import { CreateBookPageComponent } from './containers/create-book-page/create-book-page.component';
import { ListBookPageComponent } from './containers/list-book-page/list-book-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        component: ListBookPageComponent
      },
      {
        path: 'create-new',
        component: CreateBookPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
