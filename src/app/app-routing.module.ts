import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaInicioSesionComponent } from './pages/paginaPrincipal/vista-inicio-sesion/vista-inicio-sesion.component';
import { VistaInicioComponent } from './pages/paginaPrincipal/vista-inicio/vista-inicio.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./paginaPrincipal/vista-inicio').then(m =>m.VistaInicioComponent)},
  {path: 'inicio', loadChildren: () => import('./paginaPrincipal/vista-inicio-sesion').then(m =>m.VistaInicioSesionComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
