import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { ServicioService } from 'src/app/services/servicio.service';
@Component({
  selector: 'app-navbar-pagina-principal',
  templateUrl: './navbar-pagina-principal.component.html',
  styleUrls: ['./navbar-pagina-principal.component.scss']
})
export class NavbarPaginaPrincipalComponent implements OnInit {
  user: firebase.User = null;
  constructor(private authService: ServicioService) { }

  ngOnInit(): void {
    };
}

