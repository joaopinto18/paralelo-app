import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-navbar-derecho-gerente',
  templateUrl: './navbar-derecho-gerente.component.html',
  styleUrls: ['./navbar-derecho-gerente.component.scss']
})
export class NavbarDerechoGerenteComponent implements OnInit {
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
