import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-datos-perfil-mecanico',
  templateUrl: './vista-datos-perfil-mecanico.component.html',
  styleUrls: ['./vista-datos-perfil-mecanico.component.scss']
})
export class VistaDatosPerfilMecanicoComponent implements OnInit {

  public datosMecanico!:FormGroup;

  constructor(private fb: FormBuilder, private infoUserService: AddInfoUserServicesService) { 
    this.createInputForm1();
  }

  ngOnInit(): void {
  }

   createInputForm1(): void{
    this.datosMecanico=this.fb.group({
      nombre_apellido:'',
      cedula:'',
      fecha:'',
      lugar:'',
      numero:'',
    });
  }

  modify():void{
    console.log("Modificando la info del usuario");
    const usuarioModificado: any={
      nombre_apellido:this.datosMecanico.get('nombre_apellido').value,
      cedula:this.datosMecanico.get('cedula').value,
      fecha:this.datosMecanico.get('fecha').value,
      lugar:this.datosMecanico.get('lugar').value,
      numero:this.datosMecanico.get('numero').value,
    }

    this.infoUserService.modificarInfoUsuario(usuarioModificado);
    console.log('datos actualizados');
  }

}
