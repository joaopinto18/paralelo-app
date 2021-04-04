import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodigoQrComponent } from './components/codigo-qr/codigo-qr.component';
import { VistaAboutUsComponent } from './pages/paginaPrincipal/vista-about-us/vista-about-us.component';
import { VistaContactanosComponent } from './pages/paginaPrincipal/vista-contactanos/vista-contactanos.component';
import { VistaInicioSesionComponent } from './pages/paginaPrincipal/vista-inicio-sesion/vista-inicio-sesion.component';
import { VistaInicioComponent } from './pages/paginaPrincipal/vista-inicio/vista-inicio.component';
import { VistaRegistrarseComponent } from './pages/paginaPrincipal/vista-registrarse/vista-registrarse.component';
import { VistaCitasClienteComponent } from './pages/perfilCliente/vista-citas-cliente/vista-citas-cliente.component';
import { VistaDatosPerfilClienteComponent } from './pages/perfilCliente/vista-datos-perfil-cliente/vista-datos-perfil-cliente.component';
import { VistaFaqComponent } from './pages/perfilCliente/vista-faq/vista-faq.component';
import { VistaRegistroVehiculo1Component } from './pages/perfilCliente/vista-registro-vehiculo1/vista-registro-vehiculo1.component';
import { VistaRegistroVehiculo2Component } from './pages/perfilCliente/vista-registro-vehiculo2/vista-registro-vehiculo2.component';
import { VistaRegistroVehiculo3Component } from './pages/perfilCliente/vista-registro-vehiculo3/vista-registro-vehiculo3.component';
import { VistaSolicitarCitasComponent } from './pages/perfilCliente/vista-solicitar-citas/vista-solicitar-citas.component';
import { VistaDatosPerfilMecanicoComponent } from './pages/perfilMecanico/vista-datos-perfil-mecanico/vista-datos-perfil-mecanico.component';
import { VistaRegistroVehiculoMecanicoComponent } from './pages/perfilMecanico/vista-registro-vehiculo-mecanico/vista-registro-vehiculo-mecanico.component';
import { VistaVehiculosRegistradosComponent } from './pages/perfilMecanico/vista-vehiculos-registrados/vista-vehiculos-registrados.component';
import { VistaDatosPerfilAdminComponent } from './pages/perfilAdmin/vista-datos-perfil-admin/vista-datos-perfil-admin.component';
import {  VistaAdminRolesComponent } from './pages/perfilAdmin/vista-admin-roles/vista-admin-roles.component';
import { PruebaComponent } from './paginaPrincipal/prueba/prueba.component';
import { GuardClienteService } from './guards/guard-cliente.service';
import { GuardAdminService } from './guards/guard-admin.service';
import { GuardMecanicoService } from './guards/guard-mecanico.service';


const routes: Routes = [

  {path:'vista-perfil-cliente', component:VistaDatosPerfilClienteComponent, canActivate: [GuardClienteService]},  
  {path:'faq', component:VistaFaqComponent},
  {path:'solicitar-cita', component:VistaSolicitarCitasComponent, canActivate: [GuardClienteService]},            
  {path:'inicio-sesion', component:VistaInicioSesionComponent},
  {path:'', component:VistaInicioComponent},
  {path:'registro', component:VistaRegistrarseComponent},
  {path:'about-us', component:VistaAboutUsComponent},
  {path:'contactanos', component:VistaContactanosComponent},
  {path:'vista-perfil-mecanico', component:VistaDatosPerfilMecanicoComponent, canActivate: [GuardMecanicoService]},
  {path:'vista-registrar-vehiculo-mecanico', component:VistaRegistroVehiculoMecanicoComponent, canActivate: [GuardMecanicoService]},
  {path:'vista-vehiculos-rehistrados-mecanicos', component:VistaVehiculosRegistradosComponent, canActivate: [GuardMecanicoService]},
  {path: 'vista-registrar-vehiculo1',component: VistaRegistroVehiculo1Component, canActivate: [GuardClienteService]},
  {path: 'vista-registrar-vehiculo2',component: VistaRegistroVehiculo2Component, canActivate: [GuardClienteService]},
  {path: 'vista-registrar-vehiculo3',component: VistaRegistroVehiculo3Component, canActivate: [GuardClienteService]},
  {path: 'vista-citas-cliente',component: VistaCitasClienteComponent, canActivate: [GuardClienteService]},
  {path: 'vista-datos-perfil-cliente',component: VistaDatosPerfilClienteComponent, canActivate: [GuardClienteService]}, 
  {path: 'vista-datos-perfil-admin',component: VistaDatosPerfilAdminComponent, canActivate: [GuardAdminService]},
  {path: 'vista-admin-roles',component: VistaAdminRolesComponent, canActivate: [GuardAdminService]},
  {path: 'prueba', component: PruebaComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
