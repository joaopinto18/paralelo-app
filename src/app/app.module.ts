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
import { VistaDatosPerfilAdminComponent } from './pages/perfilAdmin/vista-datos-perfil-admin/vista-datos-perfil-admin.component';
import { VistaAdminRolesComponent } from './pages/perfilAdmin/vista-admin-roles/vista-admin-roles.component';
import { NavbarPerfilAdminComponent } from './components/perfilAdmin/navbar-perfil-admin/navbar-perfil-admin.component';
import { NavbarDerechoAdminComponent } from './components/perfilAdmin/navbar-derecho-admin/navbar-derecho-admin.component';
import { FormAdminRoleComponent } from './components/perfilAdmin/form-admin-role/form-admin-role.component';
import { SearchBarUserComponent } from './components/perfilAdmin/search-bar-user/search-bar-user.component';


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
    VistaDatosPerfilAdminComponent,
    VistaAdminRolesComponent,
    NavbarPerfilAdminComponent,
    NavbarDerechoAdminComponent,
    FormAdminRoleComponent,
    SearchBarUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //insertado de modulos de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    //modulos para crear formularios
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
