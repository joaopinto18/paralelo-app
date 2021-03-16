import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-registro-vehiculo-mecanico',
  templateUrl: './vista-registro-vehiculo-mecanico.component.html',
  styleUrls: ['./vista-registro-vehiculo-mecanico.component.scss']
})
export class VistaRegistroVehiculoMecanicoComponent implements OnInit {

  public registroVehiculoForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void{
    this.registroVehiculoForm=this.fb.group({
      año:'',
      cauchoDeRepuesto:false,
      color:'',
      daños:'',
      gato:false,
      herramientas:false,
      kilometraje:'',
      llaves:false,
      marca:'',
      modelo:'',
      nivelDeCombustible:'',
      otros:'',
      placa:'',
      reproductor:false,
      requerimientos:''
    });
  }



}
