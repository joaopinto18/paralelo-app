import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private fb: FormBuilder,private authService: ServicioService) { }

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
    this.sendFormEvent.emit(formData);
  }
    
  handleGoogleLogin(){
    this.authService.loginWithGoogle();

  }
}
