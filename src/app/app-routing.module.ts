import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAboutUsComponent } from './pages/paginaPrincipal/vista-about-us/vista-about-us.component';
import { VistaContactanosComponent } from './pages/paginaPrincipal/vista-contactanos/vista-contactanos.component';
import { VistaInicioSesionComponent } from './pages/paginaPrincipal/vista-inicio-sesion/vista-inicio-sesion.component';
import { VistaInicioComponent } from './pages/paginaPrincipal/vista-inicio/vista-inicio.component';
import { VistaRegistrarseComponent } from './pages/paginaPrincipal/vista-registrarse/vista-registrarse.component';
import { VistaCitasClienteComponent } from './pages/perfilCliente/vista-citas-cliente/vista-citas-cliente.component';
import { VistaDatosPerfilClienteComponent } from './pages/perfilCliente/vista-datos-perfil-cliente/vista-datos-perfil-cliente.component';
import { VistaRegistroVehiculo1Component } from './pages/perfilCliente/vista-registro-vehiculo1/vista-registro-vehiculo1.component';
import { VistaRegistroVehiculo2Component } from './pages/perfilCliente/vista-registro-vehiculo2/vista-registro-vehiculo2.component';
import { VistaRegistroVehiculo3Component } from './pages/perfilCliente/vista-registro-vehiculo3/vista-registro-vehiculo3.component';
import { VistaDatosPerfilMecanicoComponent } from './pages/perfilMecanico/vista-datos-perfil-mecanico/vista-datos-perfil-mecanico.component';
import { VistaRegistroVehiculoMecanicoComponent } from './pages/perfilMecanico/vista-registro-vehiculo-mecanico/vista-registro-vehiculo-mecanico.component';
import { VistaVehiculosRegistradosComponent } from './pages/perfilMecanico/vista-vehiculos-registrados/vista-vehiculos-registrados.component';


const routes: Routes = [

  {path:'', component:VistaDatosPerfilClienteComponent},
  {path:'inicio', component:VistaInicioSesionComponent},
  {path:'registro', component:VistaRegistrarseComponent},
  {path:'about-us', component:VistaAboutUsComponent},
  {path:'contactanos', component:VistaContactanosComponent},
  {path:'vista-perfil-mecanico', component:VistaDatosPerfilMecanicoComponent},
  {path:'vista-registrar-vehiculo-mecanico', component:VistaRegistroVehiculoMecanicoComponent},
  {path:'vista-vehiculos-rehistrados-mecanicos', component:VistaVehiculosRegistradosComponent},
  {path: 'vista-registrar-vehiculo1',component: VistaRegistroVehiculo1Component},
  {path: 'vista-registrar-vehiculo2',component: VistaRegistroVehiculo2Component},
  {path: 'vista-registrar-vehiculo3',component: VistaRegistroVehiculo3Component},
  {path: 'vista-citas-cliente',component: VistaCitasClienteComponent},
  {path: 'vista-datos-perfil-cliente',component: VistaDatosPerfilClienteComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
