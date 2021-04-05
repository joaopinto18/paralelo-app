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

  constructor(private fb: FormBuilder, private carService:AddCarServiceService) { }

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

  async search():Promise<void>{
    const citaUser: any={
      correo:this.registroVehiculoForm.get('correo')?.value
    }
    
    const cita = await this.carService.BuscarVehiculo(citaUser.correo).valueChanges().pipe( take(1) ).toPromise();
    this.vehiculoBuscado = cita;
    if(cita[0]==undefined){
      alert('sin resultados para esta búsqueda')
    }else if(cita[0].estado=='orden cerrada por mecanico'){
      alert('la orden de reparación de este vehículo ya fue cerrada');
    }else{
      this.correo = cita[0].correo;
      //buscamos los datos de esta orden y llenamos los campos 
      //this.infoVehiculo.setValue({repuestos: cita[0].repuestos, 
      //procedimiento:cita[0].procedimiento, diagnostico:cita[0].diagnostico});
    }
  }

}
