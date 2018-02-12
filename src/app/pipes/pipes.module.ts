import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  imports: [ ],
  exports: [
    ImagenPipe
  ],
  declarations:[
    ImagenPipe
  ]
})
export class PipesModule { }
