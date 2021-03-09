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
    NabvarDerechoPerfilMecanicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
