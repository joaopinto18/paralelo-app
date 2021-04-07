import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-nabvar-derecho-perfil-mecanico',
  templateUrl: './nabvar-derecho-perfil-mecanico.component.html',
  styleUrls: ['./nabvar-derecho-perfil-mecanico.component.scss']
})
export class NabvarDerechoPerfilMecanicoComponent implements OnInit {
  user: any;
  nom: any;
  constructor(private authService: ServicioService,private router: Router,private n:AddInfoUserServicesService) { }

  
  async ngOnInit(): Promise<void> {
    this.user = this.authService.getCurrentUser();
    const nombre= await this.n.BuscarUsuario(localStorage.getItem('correouser')).valueChanges().pipe( take(1) ).toPromise();
    this.nom = nombre[0].nombre_apellido;
  }


  handleLogout(){
    this.authService.logout().then(()=>{
      this.router.navigate(['/']);
    });
  }

}
