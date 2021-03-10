import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaInicioComponent } from './pages/paginaPrincipal/vista-inicio/vista-inicio.component';
import { VistaDatosPerfilMecanicoComponent } from './pages/perfilMecanico/vista-datos-perfil-mecanico/vista-datos-perfil-mecanico.component';
import { VistaRegistroVehiculoMecanicoComponent } from './pages/perfilMecanico/vista-registro-vehiculo-mecanico/vista-registro-vehiculo-mecanico.component';
import { VistaVehiculosRegistradosComponent } from './pages/perfilMecanico/vista-vehiculos-registrados/vista-vehiculos-registrados.component';

const routes: Routes = [
  {path:'vista-inicio', component:VistaInicioComponent},
  {path:'vista-perfil-mecanico', component:VistaDatosPerfilMecanicoComponent},
  {path:'vista-registrar-vehiculo-mecanico', component:VistaRegistroVehiculoMecanicoComponent},
  {path:'vista-vehiculos-rehistrados-mecanicos', component:VistaVehiculosRegistradosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
