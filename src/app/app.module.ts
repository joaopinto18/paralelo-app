import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';
import { ServicesComponent } from './services/services.component';
import { NavbarPaginaPrincipalComponent } from './components/paginaPrincipal/navbar-pagina-principal/navbar-pagina-principal.component';
import { VistaAboutUsComponent } from './pages/paginaPrincipal/vista-about-us/vista-about-us.component';
import { VistaInicioComponent } from './pages/paginaPrincipal/vista-inicio/vista-inicio.component';
import { VistaContactanosComponent } from './pages/paginaPrincipal/vista-contactanos/vista-contactanos.component';
import { VistaRegistrarseComponent } from './pages/paginaPrincipal/vista-registrarse/vista-registrarse.component';
import { VistaInicioSesionComponent } from './pages/paginaPrincipal/vista-inicio-sesion/vista-inicio-sesion.component';
import { NabvarPerfilMecanicoComponent } from './components/perfilMecanico/nabvar-perfil-mecanico/nabvar-perfil-mecanico.component';
import { NabvarDerechoPerfilMecanicoComponent } from './components/perfilMecanico/nabvar-derecho-perfil-mecanico/nabvar-derecho-perfil-mecanico.component';
import { NavbarDerechoPaginaPrincipalComponent } from './components/paginaPrincipal/navbar-derecho-pagina-principal/navbar-derecho-pagina-principal.component';
import { VistaDatosPerfilMecanicoComponent } from './pages/perfilMecanico/vista-datos-perfil-mecanico/vista-datos-perfil-mecanico.component';
import { VistaRegistroVehiculoMecanicoComponent } from './pages/perfilMecanico/vista-registro-vehiculo-mecanico/vista-registro-vehiculo-mecanico.component';
import { VistaVehiculosRegistradosComponent } from './pages/perfilMecanico/vista-vehiculos-registrados/vista-vehiculos-registrados.component';

//codigo qr
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { HttpClientModule } from '@angular/common/http';




//insertado de modulos para el tema de firebase
import { AngularFireModule } from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
//insertado de modulos para el tema de los forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthformComponent } from './components/paginaPrincipal/authform/authform.component';



//modulos de perfil cliente
import { NavbarDerechoClienteComponent } from './components/perfilCliente/navbar-derecho-cliente/navbar-derecho-cliente.component';
import { NavbarPerfilClienteComponent } from './components/perfilCliente/navbar-perfil-cliente/navbar-perfil-cliente.component';
import { VistaDatosPerfilClienteComponent } from './pages/perfilCliente/vista-datos-perfil-cliente/vista-datos-perfil-cliente.component';
import { VistaCitasClienteComponent } from './pages/perfilCliente/vista-citas-cliente/vista-citas-cliente.component';
import { VistaRegistroVehiculo1Component } from './pages/perfilCliente/vista-registro-vehiculo1/vista-registro-vehiculo1.component';
import { VistaRegistroVehiculo2Component } from './pages/perfilCliente/vista-registro-vehiculo2/vista-registro-vehiculo2.component';
import { VistaRegistroVehiculo3Component } from './pages/perfilCliente/vista-registro-vehiculo3/vista-registro-vehiculo3.component';
import { AuthformInicioSesionComponent } from './components/paginaPrincipal/authform-inicio-sesion/authform-inicio-sesion.component';
import { CodigoQrComponent } from './components/codigo-qr/codigo-qr.component';
import { VistaSolicitarCitasComponent } from './pages/perfilCliente/vista-solicitar-citas/vista-solicitar-citas.component';
import { VistaFaqComponent } from './pages/perfilCliente/vista-faq/vista-faq.component';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { VistaDatosPerfilAdminComponent } from './pages/perfilAdmin/vista-datos-perfil-admin/vista-datos-perfil-admin.component';
import { VistaAdminRolesComponent } from './pages/perfilAdmin/vista-admin-roles/vista-admin-roles.component';
import { NavbarPerfilAdminComponent } from './components/perfilAdmin/navbar-perfil-admin/navbar-perfil-admin.component';
import { NavbarDerechoAdminComponent } from './components/perfilAdmin/navbar-derecho-admin/navbar-derecho-admin.component';
import { FormAdminRoleComponent } from './components/perfilAdmin/form-admin-role/form-admin-role.component';
import { SearchBarUserComponent } from './components/perfilAdmin/search-bar-user/search-bar-user.component';
import { PerfilGerenteComponent } from './pages/perfil-gerente/perfil-gerente.component';
import { VistaOrdenesComponent } from './pages/perfil-gerente/vista-ordenes/vista-ordenes.component';
import { VistaReportesComponent } from './pages/perfil-gerente/vista-reportes/vista-reportes.component';
import { VistaCitasComponent } from './pages/perfil-gerente/vista-citas/vista-citas.component';
import { VistaManejaCitasComponent } from './pages/perfil-gerente/vista-maneja-citas/vista-maneja-citas.component';
import { VistaManejoOrdenesComponent } from './pages/perfil-gerente/vista-manejo-ordenes/vista-manejo-ordenes.component';
import { VistaReporteClienteComponent } from './pages/perfil-gerente/vista-reporte-cliente/vista-reporte-cliente.component';
import { VistaReporteMecanicoComponent } from './pages/perfil-gerente/vista-reporte-mecanico/vista-reporte-mecanico.component';
import { VistaReporteVehiculoComponent } from './pages/perfil-gerente/vista-reporte-vehiculo/vista-reporte-vehiculo.component';

import { PruebaComponent } from './paginaPrincipal/prueba/prueba.component';
import { NavbarPerfilGerenteComponent } from './components/perfilGerente/navbar-perfil-gerente/navbar-perfil-gerente.component';
import { NavbarDerechoGerenteComponent } from './components/perfilGerente/navbar-derecho-gerente/navbar-derecho-gerente.component';
import { VistaReporteExtrasComponent } from './pages/perfil-gerente/vista-reporte-extras/vista-reporte-extras.component';
//FULL CALENDAR
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
//scanner
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { VistaCitasAsignadasComponent } from './pages/perfil-gerente/vista-citas-asignadas/vista-citas-asignadas.component';
import { VistaCitasRechazadasComponent } from './pages/perfil-gerente/vista-citas-rechazadas/vista-citas-rechazadas.component';
import { VistaCerrarOrdenesComponent } from './pages/perfil-gerente/vista-cerrar-ordenes/vista-cerrar-ordenes.component'; // a plugin
import { GoogleChartsModule } from 'angular-google-charts';
import { CuadritoComponent } from './components/cuadrito/cuadrito.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PagesComponent,
    ServicesComponent,
    NavbarPaginaPrincipalComponent,
    VistaAboutUsComponent,
    VistaInicioComponent,
    VistaContactanosComponent,
    VistaRegistrarseComponent,
    VistaInicioSesionComponent,
    NabvarPerfilMecanicoComponent,
    NabvarDerechoPerfilMecanicoComponent,
    NavbarDerechoPaginaPrincipalComponent,
    VistaDatosPerfilMecanicoComponent,
    VistaRegistroVehiculoMecanicoComponent,
    VistaVehiculosRegistradosComponent,
    NavbarDerechoClienteComponent,
    NavbarPerfilClienteComponent,
    VistaDatosPerfilClienteComponent,
    VistaRegistroVehiculo1Component,
    VistaRegistroVehiculo2Component,
    VistaRegistroVehiculo3Component,
    VistaCitasClienteComponent,
    AuthformComponent,
    AuthformInicioSesionComponent,
    CodigoQrComponent,
    VistaSolicitarCitasComponent,
    VistaFaqComponent,
    VistaDatosPerfilAdminComponent,
    VistaAdminRolesComponent,
    NavbarPerfilAdminComponent,
    NavbarDerechoAdminComponent,
    FormAdminRoleComponent,
    SearchBarUserComponent,
    PerfilGerenteComponent,
    VistaOrdenesComponent,
    VistaReportesComponent,
    VistaCitasComponent,
    VistaManejaCitasComponent,
    VistaManejoOrdenesComponent,
    VistaReporteClienteComponent,
    VistaReporteMecanicoComponent,
    VistaReporteVehiculoComponent,
    PruebaComponent,
    NavbarPerfilGerenteComponent,
    NavbarDerechoGerenteComponent,
    VistaReporteExtrasComponent,
    VistaCitasAsignadasComponent,
    VistaCitasRechazadasComponent,
    VistaCerrarOrdenesComponent,
    CuadritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //insertado de modulos de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    //modulos para crear formularios
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    HttpClientModule,
    FullCalendarModule,
    ZXingScannerModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
