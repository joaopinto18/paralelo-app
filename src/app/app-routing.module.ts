import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAboutUsComponent } from './pages/paginaPrincipal/vista-about-us/vista-about-us.component';
import { VistaInicioSesionComponent } from './pages/paginaPrincipal/vista-inicio-sesion/vista-inicio-sesion.component';
import { VistaInicioComponent } from './pages/paginaPrincipal/vista-inicio/vista-inicio.component';
import { VistaRegistrarseComponent } from './pages/paginaPrincipal/vista-registrarse/vista-registrarse.component';
import { VistaDatosPerfilMecanicoComponent } from './pages/perfilMecanico/vista-datos-perfil-mecanico/vista-datos-perfil-mecanico.component';

const routes: Routes = [
  {path:'', component:VistaInicioComponent},
  {path:'inicio', component:VistaInicioSesionComponent},
  {path:'vista-perfil-mecanico', component:VistaDatosPerfilMecanicoComponent},
  {path:'registro', component:VistaRegistrarseComponent},
  {path:'about-us', component:VistaAboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
