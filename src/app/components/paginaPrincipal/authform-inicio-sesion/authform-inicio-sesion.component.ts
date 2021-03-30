import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-authform-inicio-sesion',
  templateUrl: './authform-inicio-sesion.component.html',
  styleUrls: ['./authform-inicio-sesion.component.scss']
})
export class AuthformInicioSesionComponent implements OnInit {

  authForm!: FormGroup;
  IDusuario:any;
  constructor(private fb: FormBuilder, private authService: ServicioService) { }

  ngOnInit(): void {
    this.createAuthForm();
  }

  createAuthForm(): void{
    this.authForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  iniciarSinGoogle(): void{
    console.log("iniciando sesión....");
    const user = this.authService.loginWithEmail(this.authForm.get('email').value,this.authForm.get('password').value);
    user.then(async res=>{  //agarramos el user y, si no es undefined le sacamos su id y lo guardamos en user services
      if(res){
        this.authService.Iniciar(res.email);
      }else{
        console.log('no hay user');
      }
    })
  }

  handleGoogleLogin(){
    this.authService.loginWithGoogle();
  }

}
