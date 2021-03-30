import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDatosUsuario } from 'src/app/models1/modelo-datos-usuario';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent implements OnInit {
  authForm: FormGroup;
  @Input() withDisplayName: boolean = true;
  @Output() sendFormEvent=new EventEmitter();
  usernavbar: any;
  usernavbarData: ModeloDatosUsuario;
  constructor(private fb: FormBuilder,private authService: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.createAuthForm();
  }
  createAuthForm(): void{
    this.authForm = this.fb.group({
      email: '',
      password: '',
      displayname: '',
    });
  }
  onSubmit(): void{
    console.log('enviando form');
    const formData={
      email: this.authForm.get('email').value,
      password: this.authForm.get('password').value,
      displayname: this.authForm.get('displayname').value,
    };
    
   const datosUsuario={
    nombre_apellido: this.authForm.get('displayname').value,
    cedula: 0,
    fecha: "vacio",
    lugar: "vacio",
    numero: 0,
    acceso: "cliente",
    correo: this.authForm.get('email').value
    } 
    
    this.authService.RegistrarUsuario(datosUsuario);

    this.sendFormEvent.emit(formData);
    this.router.navigate(['/vista-datos-perfil-cliente']);
  }
    
  handleGoogleLogin(){
    this.authService.loginWithGoogle();
    
    //se guarda una variable con el id del documento del usuario en cuestion que se acaba de crear
  }
}
