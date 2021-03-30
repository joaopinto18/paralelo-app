import { Component, OnInit } from '@angular/core';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';


@Component({
  selector: 'app-vista-solicitar-citas',
  templateUrl: './vista-solicitar-citas.component.html',
  styleUrls: ['./vista-solicitar-citas.component.scss']
})
export class VistaSolicitarCitasComponent implements OnInit {

  constructor(private infoUser: AddInfoUserServicesService) { }

  ngOnInit(): void {
  }

  clicked = false;
  clicked2 = false;
  clicked3 = false;

  async clickedx(): Promise<void>{
    /*llamamos a solicitar cita con el nro de vehiculo que va a solicitar la cita, la condicion es que el 
    vehiculo este registrado*/ 
    if(await this.infoUser.VerificarVehiculo(1) == 'no encontrado'){
      alert('Debe agregar un vehiculo en el campo VEHICULO 1 para solicitar esta cita')
    }else{
      this.solicitarCita(1, await this.infoUser.VerificarVehiculo(1));
    }
  }

  async clickedx2(): Promise<void>{
    if(await this.infoUser.VerificarVehiculo(2) == 'no encontrado'){
      alert('Debe agregar un vehiculo en el campo VEHICULO 2 para solicitar esta cita')
    }else{
      this.solicitarCita(2, this.infoUser.VerificarVehiculo(2));
    }
  }

  async clickedx3(): Promise<void>{
    if(await this.infoUser.VerificarVehiculo(3) == 'no encontrado'){
      alert('Debe agregar un vehiculo en el campo VEHICULO 3 para solicitar esta cita')
    }else{
      this.solicitarCita(3, this.infoUser.VerificarVehiculo(3));
    }
  }

  solicitarCita(nroVehiculo: number, idDocVehiculo): void{
    alert('cita solicitada')
  }

  trash1(){
    this.clicked = false;
  }

  trash2(){
    this.clicked2 = false;
  }

  trash3(){
    this.clicked3 = false;
  }


}
