import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicativeDatePipe } from './communicative-date.pipe';



@NgModule({
  declarations: [
    CommunicativeDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommunicativeDatePipe
  ]
})
export class PipesModule { }
