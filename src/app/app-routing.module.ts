import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { VidaPageComponent } from './modules/vida/pages/vida/vida.page';
import { PosicionPageComponent } from './modules/vida/pages/posicion/posicion.page';

const routes: Routes = [
  { path: '', redirectTo: '/vida', pathMatch: 'full' },
  { path: 'vida', component: VidaPageComponent },
  { path: 'posicion', component: PosicionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
