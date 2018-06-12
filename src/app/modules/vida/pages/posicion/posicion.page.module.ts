import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosicionPageComponent } from './posicion.page';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [PosicionPageComponent],
  exports: [PosicionPageComponent],
})
export class PosicionModule {}
