import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';

@Component({
  selector: 'app-vista-registro-vehiculo-mecanico',
  templateUrl: './vista-registro-vehiculo-mecanico.component.html',
  styleUrls: ['./vista-registro-vehiculo-mecanico.component.scss']
})
export class VistaRegistroVehiculoMecanicoComponent implements OnInit {

  public registroVehiculoForm!: FormGroup;

  constructor(private fb: FormBuilder, private addCarService: AddCarServiceService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void{
    this.registroVehiculoForm=this.fb.group({
      año:'',
      caucho_respuesto:false,
      color:'',
      daños:'',
      gato:false,
      herramientas:false,
      kilometraje_ingreso:'',
      llaves:false,
      marca:'',
      modelo:'',
      tanque_gasolina:'',
      otros:'',
      placa:'',
      reproductor:false,
      requerimientos:''
    });
  }

  /**
   * ENVIAMOS LA INFO DE REGISTRO DE VEHICULO A LA BD
   */

  onSubmit():void{
    console.log('registrando vehiculo en la bd');
    const newCar: any={
      año:this.registroVehiculoForm.get('año').value,
      color:this.registroVehiculoForm.get('color').value,
      daños:this.registroVehiculoForm.get('daños').value,
      gato:this.registroVehiculoForm.get('gato').value,
      caucho_respuesto:this.registroVehiculoForm.get('caucho_respuesto').value,
      herramientas:this.registroVehiculoForm.get('herramientas').value,
      kilometraje_ingreso:this.registroVehiculoForm.get('kilometraje_ingreso').value,
      llaves:this.registroVehiculoForm.get('llaves').value,
      marca:this.registroVehiculoForm.get('marca').value,
      modelo:this.registroVehiculoForm.get('modelo').value,
      otros:this.registroVehiculoForm.get('otros').value,
      placa:this.registroVehiculoForm.get('placa').value,
      reproductor:this.registroVehiculoForm.get('reproductor').value,
      requerimientos:this.registroVehiculoForm.get('requerimientos').value,
      tanque_gasolina:this.registroVehiculoForm.get('tanque_gasolina').value,
      diagnostico:"vacio",
      procedimiento:"vacio",
      repuestos:"vacio",
      estado:"en revisión"
    }

    console.log(newCar);

     //una vez recogida la información la enviamos 

     this.addCarService.RegistrarNuevoVehiculo(newCar);
      
     alert('Se ha registrado el vehiculo');
  }



}
