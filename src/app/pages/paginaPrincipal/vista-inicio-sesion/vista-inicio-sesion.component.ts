import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-vista-inicio-sesion',
  templateUrl: './vista-inicio-sesion.component.html',
  styleUrls: ['./vista-inicio-sesion.component.scss']
})
export class VistaInicioSesionComponent implements OnInit {

  constructor(private authService: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }
  
  handleLogin(formData){
    const {email,password}= formData;
    this.authService.loginWithEmail(email,password).then((user)=>{
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }
}
