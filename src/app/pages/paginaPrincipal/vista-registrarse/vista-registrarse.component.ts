import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-vista-registrarse',
  templateUrl: './vista-registrarse.component.html',
  styleUrls: ['./vista-registrarse.component.scss']
})
export class VistaRegistrarseComponent implements OnInit {
  authForm: FormGroup;
  @Input() withDisplayName: boolean = true;
  @Output() sendFormEvent=new EventEmitter<{
    email: string,
    password: string,
    displayname:string,
  }>();
  constructor(private fb: FormBuilder,private authService: ServicioService) { }

  ngOnInit(): void {
    this.createAuthForm();
  }
  createAuthForm(): void{
    this.authForm = this.fb.group({
      displayname: '',
      email: '',
      passwprd: '',
    });
  }
  onSubmit(): void{
    console.log('enviando form');
    const formData={
      email: 'gabriel@gmail.com',
      password: 'password',
      displayname: '',
    };
    this.sendFormEvent.emit(formData);
  }
  handleGoogleLogin(){
    this.authService.loginWithGoogle();

  }
}
