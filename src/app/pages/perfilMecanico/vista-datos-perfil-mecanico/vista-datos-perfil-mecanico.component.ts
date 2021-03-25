import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vista-datos-perfil-mecanico',
  templateUrl: './vista-datos-perfil-mecanico.component.html',
  styleUrls: ['./vista-datos-perfil-mecanico.component.scss']
})
export class VistaDatosPerfilMecanicoComponent implements OnInit {

  public datosMecanico!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * OBTENEMOS EL CORREO CON EL QUE SE LOGUEO EL USUARIO Y APARTIR DE ESTE, BUSCAMOS SU RESPECTIVO DOCUMENTO
   * DENTRO DE LA BD Y UNA VEZ CON EL DOCUMENTO, PODEMOS COMENZAR A REALIZAR OPERACIONES CON SUS DATOS-- POR HACER
   */



  /**
   * SUPONEMOS QUE YA TENEMOS EL DOCUMENTO 
   */

  idDeelDocumento: string = "4f7W3m6obhvEwykOxsTw";

   createInputForm1(): void{
    this.datosMecanico=this.fb.group({
      nombre_apellido:'',
      cedula:'',
      fecha_nacimiento:'',
      
    });
  }

}
