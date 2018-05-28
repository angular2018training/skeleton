import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBookPageComponent } from './containers/list-book-page/list-book-page.component';
import { CreateBookPageComponent } from './containers/create-book-page/create-book-page.component';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';

@NgModule({
  imports: [CommonModule, BookRoutingModule],
  declarations: [BookComponent, ListBookPageComponent, CreateBookPageComponent]
})
export class BookModule {}
