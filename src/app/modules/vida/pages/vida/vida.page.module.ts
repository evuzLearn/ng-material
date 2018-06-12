import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidaPageComponent } from './vida.page';

import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,  RouterModule, MatButtonModule],
  declarations: [VidaPageComponent],
  exports: [VidaPageComponent],
})
export class VidaPageModule {}
