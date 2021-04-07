import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-reporte-cliente',
  templateUrl: './vista-reporte-cliente.component.html',
  styleUrls: ['./vista-reporte-cliente.component.scss']
})
export class VistaReporteClienteComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb: FormBuilder, private addUserService: AddInfoUserServicesService, private addVehiculoInfo: AddCarServiceService) { }
  nombre:any;
  correo:any;
  cedula:any;
  vehiculo1:any;
  vehiculo2:any;
  vehiculo3:any;
  dinero:any;

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
    this.nombre=user[0].nombre_apellido
    this.correo=user[0].correo
    this.cedula=user[0].cedula

    this.vehiculo1=await this.addVehiculoInfo.buscarVehiculoRegistrado(await this.addUserService.obtenerID(this.correo), 1);
    this.vehiculo2=await this.addVehiculoInfo.buscarVehiculoRegistrado(await this.addUserService.obtenerID(this.correo), 2);
    this.vehiculo3=await this.addVehiculoInfo.buscarVehiculoRegistrado(await this.addUserService.obtenerID(this.correo), 3);
  }

}
