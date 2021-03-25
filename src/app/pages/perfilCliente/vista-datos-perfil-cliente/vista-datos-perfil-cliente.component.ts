import { CompileNgModuleMetadata } from '@angular/compiler';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-datos-perfil-cliente',
  templateUrl: './vista-datos-perfil-cliente.component.html',
  styleUrls: ['./vista-datos-perfil-cliente.component.scss']
})
export class VistaDatosPerfilClienteComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private serviceUser: AddInfoUserServicesService) { }

  ngOnInit(): void {
  }

  datosform = this.fb.group({
      nombre_apellido: ["", Validators.required],
      cedula: ["", Validators.required],
      fecha: ["", Validators.required],
      lugar: ["", Validators.required],
      numero: ["", Validators.required],
    });
  
    saveUser() {
      if (this.datosform.valid) {
        alert(
          `Sus datos han sidos guardados ${this.datosform.value.nombre_apellido}`
        );
      }}

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
    }

}

