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
import { PerfilGerenteComponent } from './pages/perfil-gerente/perfil-gerente.component';
import { PruebaComponent } from './paginaPrincipal/prueba/prueba.component';
import { GuardClienteService } from './guards/guard-cliente.service';
import { GuardAdminService } from './guards/guard-admin.service';
import { GuardMecanicoService } from './guards/guard-mecanico.service';
import { VistaReportesComponent } from './pages/perfil-gerente/vista-reportes/vista-reportes.component';
import { VistaCitasComponent } from './pages/perfil-gerente/vista-citas/vista-citas.component';
import { VistaOrdenesComponent } from './pages/perfil-gerente/vista-ordenes/vista-ordenes.component';
import { VistaReporteClienteComponent } from './pages/perfil-gerente/vista-reporte-cliente/vista-reporte-cliente.component';
import { VistaReporteMecanicoComponent } from './pages/perfil-gerente/vista-reporte-mecanico/vista-reporte-mecanico.component';
import { VistaReporteVehiculoComponent } from './pages/perfil-gerente/vista-reporte-vehiculo/vista-reporte-vehiculo.component';
import { VistaReporteExtrasComponent } from './pages/perfil-gerente/vista-reporte-extras/vista-reporte-extras.component';
import { VistaManejaCitasComponent } from './pages/perfil-gerente/vista-maneja-citas/vista-maneja-citas.component';
import { VistaCitasAsignadasComponent } from './pages/perfil-gerente/vista-citas-asignadas/vista-citas-asignadas.component';
import { VistaCitasRechazadasComponent } from './pages/perfil-gerente/vista-citas-rechazadas/vista-citas-rechazadas.component';
import { VistaCerrarOrdenesComponent } from './pages/perfil-gerente/vista-cerrar-ordenes/vista-cerrar-ordenes.component';
import { GuardGerenteService } from './guards/guard-gerente.service';



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
  {path:'vista-registrar-vehiculo-mecanico', component:VistaRegistroVehiculoMecanicoComponent},
  {path:'vista-vehiculos-rehistrados-mecanicos', component:VistaVehiculosRegistradosComponent, canActivate: [GuardMecanicoService]},
  {path: 'vista-registrar-vehiculo1',component: VistaRegistroVehiculo1Component, canActivate: [GuardClienteService]},
  {path: 'vista-registrar-vehiculo2',component: VistaRegistroVehiculo2Component, canActivate: [GuardClienteService]},
  {path: 'vista-registrar-vehiculo3',component: VistaRegistroVehiculo3Component, canActivate: [GuardClienteService]},
  {path: 'vista-citas-cliente',component: VistaCitasClienteComponent, canActivate: [GuardClienteService]},
  {path: 'vista-datos-perfil-cliente',component: VistaDatosPerfilClienteComponent, canActivate: [GuardClienteService]}, 
  {path: 'vista-datos-perfil-admin',component: VistaDatosPerfilAdminComponent, canActivate: [GuardAdminService]},
  {path: 'vista-admin-roles',component: VistaAdminRolesComponent, canActivate: [GuardAdminService]},
  {path: 'prueba', component: PruebaComponent},
  {path: 'codigo',component: CodigoQrComponent},
  {path: 'gerente',component: PerfilGerenteComponent,canActivate: [GuardGerenteService],},
  {path: 'reportes',component: VistaReportesComponent,canActivate: [GuardGerenteService],},
  {path: 'citas-gerente',component: VistaCitasComponent,canActivate: [GuardGerenteService],},
  {path: 'ordenes-gerente',component: VistaOrdenesComponent,canActivate: [GuardGerenteService],},
  {path: 'vista-reporte-cliente',component: VistaReporteClienteComponent,canActivate: [GuardGerenteService],},
  {path: 'vista-reporte-mecanico',component: VistaReporteMecanicoComponent,canActivate: [GuardGerenteService],},
  {path: 'vista-reporte-vehiculo',component: VistaReporteVehiculoComponent,canActivate: [GuardGerenteService],},
  {path: 'vista-reporte-extras',component: VistaReporteExtrasComponent,canActivate: [GuardGerenteService],},
  {path: 'calendario',component: VistaManejaCitasComponent,canActivate: [GuardGerenteService],},
  {path: 'citas-asignadas',component: VistaCitasAsignadasComponent,canActivate: [GuardGerenteService],},
  {path: 'citas-rechazadas',component: VistaCitasRechazadasComponent,canActivate: [GuardGerenteService],},
  {path: 'cerrar-ordenes',component: VistaCerrarOrdenesComponent,canActivate: [GuardGerenteService],},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
