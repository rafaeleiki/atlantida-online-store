import {NgModule} from '@angular/core';
import {LoadingIconComponent} from './loading-icon/loading-icon.component';

@NgModule({
  declarations: [
    LoadingIconComponent,
  ],
  exports: [
    LoadingIconComponent,
  ]
})
export class SharedModule { }
