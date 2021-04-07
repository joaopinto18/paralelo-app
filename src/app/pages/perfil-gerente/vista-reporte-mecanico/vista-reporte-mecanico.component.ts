import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-reporte-mecanico',
  templateUrl: './vista-reporte-mecanico.component.html',
  styleUrls: ['./vista-reporte-mecanico.component.scss']
})
export class VistaReporteMecanicoComponent implements OnInit {
  form!:FormGroup;
  nombre:any;
  servicios:any;
  ordenes:any;
  constructor(private fb: FormBuilder, private addUserService: AddInfoUserServicesService, private addVehiculoInfo: AddCarServiceService) { }

  ngOnInit(): void {
    this.createInputForm1();
  }

  createInputForm1(): void{
    this.form=this.fb.group({
      correo:''
    });
  }

  async search(){
    const newUser: any={
      correo:this.form.get('correo')?.value
    } 
    const user = await this.addUserService.BuscarUsuario(newUser.correo).valueChanges().pipe( take(1) ).toPromise();
    
    this.nombre=user[0].nombre_apellido;
    this.servicios=user[0].servicios_realizados;
    this.ordenes=user[0].Vehiculos_trabados;
  }

}
