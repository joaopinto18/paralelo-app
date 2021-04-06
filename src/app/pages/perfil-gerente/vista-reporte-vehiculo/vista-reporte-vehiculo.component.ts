import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';

@Component({
  selector: 'app-vista-reporte-vehiculo',
  templateUrl: './vista-reporte-vehiculo.component.html',
  styleUrls: ['./vista-reporte-vehiculo.component.scss']
})
export class VistaReporteVehiculoComponent implements OnInit {

  form!:FormGroup;

  duenno:any;
  placa:any;
  modelo:any;
  servicios:any;

  constructor(private addCarService: AddCarServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createInputForm1();
  }

  createInputForm1(): void{
    this.form=this.fb.group({
      placa:''
    });
  }

  async search(){
    const newVehicle: any={
      placa:this.form.get('placa')?.value
    } 
    const user = await this.addCarService.BuscarVehiculox(newVehicle.placa).valueChanges().pipe( take(1) ).toPromise();
    this.placa=user[0].placa
    this.modelo=user[0].modelo
    this.servicios=user[0].historial_procedimientos
    console.log('------------>');
    
    const duenno = await this.addCarService.obtenerDuenox(newVehicle.placa);
    this.duenno=duenno;
  }
}
