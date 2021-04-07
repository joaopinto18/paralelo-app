import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-navbar-derecho-admin',
  templateUrl: './navbar-derecho-admin.component.html',
  styleUrls: ['./navbar-derecho-admin.component.scss']
})
export class NavbarDerechoAdminComponent implements OnInit {
  user: any;
  constructor(private authService: ServicioService,private router: Router) {
    this.user = this.authService.getCurrentUser();
   }

  ngOnInit(): void {
  }

  handleLogout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['/']);
    });
  }
}
