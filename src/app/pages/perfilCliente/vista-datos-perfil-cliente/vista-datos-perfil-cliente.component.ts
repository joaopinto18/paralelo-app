import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-datos-perfil-cliente',
  templateUrl: './vista-datos-perfil-cliente.component.html',
  styleUrls: ['./vista-datos-perfil-cliente.component.scss']
})
export class VistaDatosPerfilClienteComponent implements OnInit {

  public datosform!:FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private serviceUser: AddInfoUserServicesService) { 
    this.createInputForm1();
  }

  async ngOnInit(): Promise<void> {
    const user = await this.serviceUser.BuscarUsuario(localStorage.getItem('correouser')).
    valueChanges().pipe( take(1) ).toPromise()

    this.datosform.setValue({nombre_apellido: user[0].nombre_apellido, 
      cedula:user[0].cedula, fecha:user[0].fecha, lugar:user[0].lugar, numero:user[0].numero});
  }

  createInputForm1(): void{
    this.datosform=this.fb.group({
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
      nombre_apellido: this.datosform.get("nombre_apellido").value,
      cedula: this.datosform.get("cedula").value,
      fecha: this.datosform.get("fecha").value,
      lugar: this.datosform.get("lugar").value,
      numero: this.datosform.get("numero").value,
    }

    this.serviceUser.modificarInfoUsuario(usuarioModificado);
    console.log('datos actualizados');
    
  }

}

