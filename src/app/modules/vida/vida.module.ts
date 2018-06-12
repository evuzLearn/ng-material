import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { VidaPageModule } from './pages/vida/vida.page.module';
import { PosicionModule } from './pages/posicion/posicion.page.module';

const pages = [VidaPageModule, PosicionModule];

@NgModule({
  imports: [CommonModule, ...pages],
  exports: pages,
})
export class VidaModule {}
