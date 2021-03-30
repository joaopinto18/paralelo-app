import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-vista-registrarse',
  templateUrl: './vista-registrarse.component.html',
  styleUrls: ['./vista-registrarse.component.scss']
})
export class VistaRegistrarseComponent implements OnInit {
  
  constructor(private authService: ServicioService,private router: Router) { }

  ngOnInit(): void {
    
  }
  handleRegister(formData){
    console.log(formData);
    this.authService.registerNewUSer(formData.email,formData.password,formData.displayName).then((user)=>{
      if (user) {
        
      }
    });
  }

}
