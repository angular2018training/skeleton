import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const COMPONENTS = [NotFoundPageComponent];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {}
