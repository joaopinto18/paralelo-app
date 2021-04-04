import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';
import { SearchBarUserComponent } from '../search-bar-user/search-bar-user.component';

@Component({
  selector: 'app-form-admin-role',
  templateUrl: './form-admin-role.component.html',
  styleUrls: ['./form-admin-role.component.scss']
})
export class FormAdminRoleComponent implements OnInit {

  public postForm!: FormGroup;

  constructor(private fb: FormBuilder, private serviceUser: AddInfoUserServicesService) { }

  async ngOnInit(): Promise<void> {
    if(this.serviceUser.estadoRespuesta=='no se ha realizado búsqueda'){
      
    }else if(this.serviceUser.estadoRespuesta=='sin resultados'){
      
    }else{
      const user = await this.serviceUser.BuscarUsuario(this.serviceUser.estadoRespuesta).
      valueChanges().pipe( take(1) ).toPromise()
      this.datosform.setValue({nombre_apellido: user[0].nombre_apellido, 
      cedula:user[0].cedula, fecha:user[0].fecha, lugar:user[0].lugar, numero:user[0].numero});
    }
  }

  datosform = this.fb.group({
    nombre_apellido: ["", Validators.required],
    cedula: ["", Validators.required],
    fecha: ["", Validators.required],
    lugar: ["", Validators.required],
    numero: ["", Validators.required],
    acceso: ["", Validators.required]
  });

  saveUser() {
    if (this.datosform.valid) {
      alert(
        `Los datos de  ${this.datosform.value.nombre_apellido} han sidos guardados`
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
      acceso: this.datosform.get('acceso').value
    }
    if(this.serviceUser.estadoRespuesta=='no se ha realizado búsqueda'){
      alert('debe buscar primero el correo del usuario a quien desea modificar sus datos');
    }else if(this.serviceUser.estadoRespuesta=='sin resultados'){
      alert('no se encontró el usuario buscado, vuelve a intentar');
    }else{
      this.serviceUser.modificarInfoUsuarioAdmin(usuarioModificado, this.serviceUser.estadoRespuesta);
    }
  }


}


