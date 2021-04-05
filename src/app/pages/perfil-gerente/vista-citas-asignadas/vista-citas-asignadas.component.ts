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

}
