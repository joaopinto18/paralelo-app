import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { ServicioService } from 'src/app/services/servicio.service';
@Component({
  selector: 'app-navbar-derecho-pagina-principal',
  templateUrl: './navbar-derecho-pagina-principal.component.html',
  styleUrls: ['./navbar-derecho-pagina-principal.component.scss']
})
export class NavbarDerechoPaginaPrincipalComponent implements OnInit {
  user: firebase.User = null;
  constructor(private authService: ServicioService,private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user)=>{
      this.user=user;
    });
  }
  handleLogout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['/']);
    });
  }
}
