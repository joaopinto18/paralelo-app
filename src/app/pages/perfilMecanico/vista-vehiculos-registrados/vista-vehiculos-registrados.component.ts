import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';

@Component({
  selector: 'app-vista-vehiculos-registrados',
  templateUrl: './vista-vehiculos-registrados.component.html',
  styleUrls: ['./vista-vehiculos-registrados.component.scss']
})
export class VistaVehiculosRegistradosComponent implements OnInit {

  public registroVehiculoForm!:FormGroup;
  public infoVehiculo!:FormGroup;
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

  search():void{
    const newCar: any={
      placa:this.registroVehiculoForm.get('placa')?.value
    }
  
    this.carService.BuscarVehiculo(newCar.placa).onSnapshot(function(result){
      result.forEach((propiedades)=>{
        this.placa=propiedades.get('placa');
        console.log(this.placa)
      })
    })
  }
}
