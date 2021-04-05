import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';

@Component({
  selector: 'app-vista-citas-asignadas',
  templateUrl: './vista-citas-asignadas.component.html',
  styleUrls: ['./vista-citas-asignadas.component.scss']
})
export class VistaCitasAsignadasComponent implements OnInit {

  public registroVehiculoForm!:FormGroup;
  public fechaForm!:FormGroup;
  vehiculoBuscado:any;
  vehiculoBuscadoCambiar:any;
  correo:any;

  data:Array<string>=[];

  constructor(private fb: FormBuilder, private carService:AddCarServiceService, private addCarServices: AddCarServiceService) { }

  ngOnInit(): void {
    this.createInputForm1();
    this.createInputForm2();
  }

  createInputForm1(): void{
    this.registroVehiculoForm=this.fb.group({
      correo:''
    });
  }

  createInputForm2(): void{
    this.fechaForm=this.fb.group({
      fechax:''
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
      /*const repuestos = this.infoVehiculo.get('repuestos').value
      const diagnostico = this.infoVehiculo.get('diagnostico').value
      const procedimiento = this.infoVehiculo.get('procedimiento').value
      this.carService.modificarInfoVehiculo(repuestos,procedimiento,diagnostico,this.placa);*/
      alert('Se ha modificado la información del vehiculo');
    }
  }

  /**
   * FUNCION PARA CERRAR LA ORDEN DE REPARACIÓN (REPARACION TERMINADA)
   */

  cerrarOrden(): void{
    if(this.correo==undefined){
      alert('no se encontró la orden')
    }else{
      this.carService.cerrarOrdenRepa(this.placa);
      this.correo=undefined;
      this.registroVehiculoForm.reset();
      alert('la orden se ha cancelado, se notificará al gerente')
    }
  }

  /**
   * FUNCION PARA BUSCAR UN VEHICULO
   */

  async search():Promise<void>{
    const newCar: any={
      correo:this.registroVehiculoForm.get('placa')?.value
    }
    
    const car = await this.carService.BuscarVehiculo(newCar.correo).valueChanges().pipe( take(1) ).toPromise();
    this.vehiculoBuscado = car;
    if(car[0]==undefined){
      alert('sin resultados para esta búsqueda')
    }else if(car[0].estado=='orden cerrada por mecanico'){
      alert('la orden de reparación de este vehículo ya fue cerrada');
    }else{
      this.correo = car[0].correo;
      //buscamos los datos de esta orden y llenamos los campos 
      /*this.infoVehiculo.setValue({repuestos: car[0].repuestos, 
      procedimiento:car[0].procedimiento, diagnostico:car[0].diagnostico});*/
    }
  }

}
