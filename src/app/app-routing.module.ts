import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: './book/book.module#BookModule'
  }
];

const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});

@NgModule({
  imports: [Routing],
  exports: [RouterModule]
})
export class AppRoutingModule {}
