import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-datos-perfil-admin',
  templateUrl: './vista-datos-perfil-admin.component.html',
  styleUrls: ['./vista-datos-perfil-admin.component.scss']
})
export class VistaDatosPerfilAdminComponent implements OnInit {

  public form!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private serviceUser: AddInfoUserServicesService) { 
    this.createInputForm1();
  }

  ngOnInit(): void {
  }

  createInputForm1(): void{
    this.form=this.fb.group({
      nombre_apellido:'',
      cedula:'',
      fecha:'',
      lugar:'',
      numero:'',
    });
  }

    modificarInfoUsuario(): void{
    console.log("Modificando la info del usuario");
    const usuarioModificado: any= {
      nombre_apellido: this.form.get("nombre_apellido").value,
      cedula: this.form.get("cedula").value,
      fecha: this.form.get("fecha").value,
      lugar: this.form.get("lugar").value,
      numero: this.form.get("numero").value,
    }

    this.serviceUser.modificarInfoUsuario(usuarioModificado);
    console.log('datos actualizados');
  }

}
