import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-vista-vehiculos-registrados',
  templateUrl: './vista-vehiculos-registrados.component.html',
  styleUrls: ['./vista-vehiculos-registrados.component.scss']
})
export class VistaVehiculosRegistradosComponent implements OnInit {

  public registroVehiculoForm!:FormGroup;
  public infoVehiculo!:FormGroup;
  vehiculoBuscado:any;
  vehiculoBuscadoCambiar:any;
  placa:any;

  constructor(private fb: FormBuilder, private carService:AddCarServiceService) { }

  ngOnInit(): void {
    this.createInputForm1();
    this.createInputForm2();
  }

  createInputForm1(): void{
    this.registroVehiculoForm=this.fb.group({
      placa:''
    });
  }

  createInputForm2(): void{
    this.infoVehiculo=this.fb.group({
      repuestos:'',
      procedimiento:'',
      diagnostico:''
    })
  }

  /**
   * FUNCION PARA MODIFICAR LA INFO DE REPARACION DE UN VEHICULO
   */

  modify():void{
    
    if(this.placa==undefined){
      alert('no se encontró la orden')
    }else{
      console.log("actualizando info de reparación");
      const repuestos = this.infoVehiculo.get('repuestos').value
      const diagnostico = this.infoVehiculo.get('diagnostico').value
      const procedimiento = this.infoVehiculo.get('procedimiento').value
      this.carService.modificarInfoVehiculo(repuestos,procedimiento,diagnostico,this.placa);
      alert('Se ha modificado la información del vehiculo');
    }
  }

  /**
   * FUNCION PARA CERRAR LA ORDEN DE REPARACIÓN (REPARACION TERMINADA)
   */

  cerrarOrden(): void{
  if(this.placa==undefined){
    alert('no se encontró la orden')
  }else{
    const repuestos = this.infoVehiculo.get('repuestos').value
    const diagnostico = this.infoVehiculo.get('diagnostico').value
    const procedimiento = this.infoVehiculo.get('procedimiento').value
    this.carService.modificarInfoVehiculo(repuestos,procedimiento,diagnostico,this.placa);
    this.carService.modificarHistorialVehiculosRegistrados(this.placa,procedimiento);
    this.carService.modificarHistorialMecanico(procedimiento, this.placa);
    this.carService.cerrarOrdenRepa(this.placa);
    this.placa=undefined;
    this.registroVehiculoForm.reset();
    this.infoVehiculo.reset();
    alert('la orden se ha cancelado, se notificará al gerente')
  }
  }

  /**
   * FUNCION PARA BUSCAR UN VEHICULO
   */

  async search():Promise<void>{
    const newCar: any={
      placa:this.registroVehiculoForm.get('placa')?.value
    }
    
    const car = await this.carService.BuscarVehiculo(newCar.placa).valueChanges().pipe( take(1) ).toPromise();
    this.vehiculoBuscado = car;
    if(car[0]==undefined){
      alert('sin resultados para esta búsqueda')
    }else if(car[0].estado=='orden cerrada por mecanico'){
      alert('la orden de reparación de este vehículo ya fue cerrada');
    }else{
      this.placa = car[0].placa;
      //buscamos los datos de esta orden y llenamos los campos 
      this.infoVehiculo.setValue({repuestos: car[0].repuestos, 
      procedimiento:car[0].procedimiento, diagnostico:car[0].diagnostico});
    }
  }
}
