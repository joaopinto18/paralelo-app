import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-navbar-derecho-pagina-principal',
  templateUrl: './navbar-derecho-pagina-principal.component.html',
  styleUrls: ['./navbar-derecho-pagina-principal.component.scss']
})
export class NavbarDerechoPaginaPrincipalComponent implements OnInit {
  user: any;
  constructor(private authService: ServicioService,private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }
  
  handleLogout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['/']);
    });
  }
}
