import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaInicioSesionComponent } from './pages/paginaPrincipal/vista-inicio-sesion/vista-inicio-sesion.component';
import { VistaInicioComponent } from './pages/paginaPrincipal/vista-inicio/vista-inicio.component';
import { VistaDatosPerfilMecanicoComponent } from './pages/perfilMecanico/vista-datos-perfil-mecanico/vista-datos-perfil-mecanico.component';

const routes: Routes = [
  {path:'', component:VistaInicioComponent},
  {path:'inicio', component:VistaInicioSesionComponent},
  {path:'vista-perfil-mecanico', component:VistaDatosPerfilMecanicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
