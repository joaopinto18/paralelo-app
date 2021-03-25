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

  modify():void{
    
    //this.vehiculoBuscado.ref.update({ diagnostico: "QQQ", procedimientoAplicado: "QQQ", repuestosNecesarios: "QQQ" });
    /*const newCar: any={
      placa:this.registroVehiculoForm.get('placa')?.value
    }
    
    this.carService.BuscarVehiculo(newCar.placa).onSnapshot(function(result){
      result.forEach((propiedades)=>{
        propiedades.ref.update({ diagnostico: "QQQ", procedimientoAplicado: "QQQ", repuestosNecesarios: "QQQ" })
      })
    })*/

    this.vehiculoBuscadoCambiar.onSnapshot(function(result){
      result.forEach((propiedades)=>{
        propiedades.ref.update({ diagnostico: "QQQ", procedimientoAplicado: "QQQ", repuestosNecesarios: "QQQ" })
      })
    })
  }

  async search():Promise<void>{
    const newCar: any={
      placa:this.registroVehiculoForm.get('placa')?.value
    }
    this.vehiculoBuscadoCambiar = await this.carService.BuscarVehiculo(newCar.placa);
    const car = await this.carService.BuscarVehiculo(newCar.placa).valueChanges().pipe( take(1) ).toPromise();
    console.log(car);
    this.vehiculoBuscado = car;
    this.placa = car[0].placa;
    console.log(car[0].placa);
    
    // this.carService.BuscarVehiculo(newCar.placa).onSnapshot(function(result) {
    //   result.forEach((propiedades)=> {
    //     this.placa = propiedades.get('placa');

    //     if( !this.vehiculoBuscado ){
    //       this.vehiculoBuscado=propiedades.data();
    //     }

    //     console.log(propiedades);
    //     console.log(propiedades.data());
    //   })
    // })

  }
}
