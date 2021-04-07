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
  nombre:any;
  data:Array<string>=[];

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
    this.fechaForm=this.fb.group({
      fechax:'',
      horax:''
    })
  }

  async search():Promise<void>{
    const citaUser: any={
      placa:this.registroVehiculoForm.get('placa')?.value
    }

    console.log(citaUser.placa);

    const cita = await this.carService.buscarCita(citaUser.placa).valueChanges().pipe( take(1) ).toPromise();
    if(cita[0]==undefined){
      alert('sin resultados para esta búsqueda')
    }else if(cita[0].estatus=='cita solicitada'){
      this.correo = cita[0].placa;

      this.nombre = await this.carService.obtenerDueno(this.registroVehiculoForm.get('placa')?.value);
      console.log('------------------->');
      
      console.log(await this.carService.obtenerDueno(this.registroVehiculoForm.get('placa')?.value));
      
    }else{
      alert('ya se ha asignado una fecha para esta cita');
    }
  }

  async asignar():Promise<void>{
    if(this.correo){
      alert('la fecha ha sido asignada, se avisara al cliente')
      
      this.carService.modificarFecha(this.fechaForm.get('fechax')?.value, this.registroVehiculoForm.get('placa')?.value, this.fechaForm.get('horax')?.value);
      this.registroVehiculoForm.reset();
      this.fechaForm.reset();
      this.nombre='';
    }else{
      alert('debe encontrar un vehiculo que requiera asignación de cita primero')
    }
  }

}
