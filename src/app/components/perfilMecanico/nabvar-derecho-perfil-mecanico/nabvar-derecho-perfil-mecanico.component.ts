import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-nabvar-derecho-perfil-mecanico',
  templateUrl: './nabvar-derecho-perfil-mecanico.component.html',
  styleUrls: ['./nabvar-derecho-perfil-mecanico.component.scss']
})
export class NabvarDerechoPerfilMecanicoComponent implements OnInit {
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
