import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-navbar-derecho-cliente',
  templateUrl: './navbar-derecho-cliente.component.html',
  styleUrls: ['./navbar-derecho-cliente.component.scss']
})
export class NavbarDerechoClienteComponent implements OnInit {
  user: any;
  correo: any;
  constructor(private authService: ServicioService,private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.correo = localStorage.getItem('correouser');
  }
  


  handleLogout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['/']);
    });
  }

}
