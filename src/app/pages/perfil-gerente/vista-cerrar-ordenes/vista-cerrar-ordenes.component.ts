import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-cerrar-ordenes',
  templateUrl: './vista-cerrar-ordenes.component.html',
  styleUrls: ['./vista-cerrar-ordenes.component.scss']
})
export class VistaCerrarOrdenesComponent implements OnInit {

  placa:any;
  registroVehiculoForm!:FormGroup;
  formPrecios!:FormGroup

  repuestos:any;
  procedimiento:any;

  constructor(private infoUser: AddInfoUserServicesService, private fb: FormBuilder, private carService:AddCarServiceService) { }

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
    this.formPrecios=this.fb.group({
      precio1:'',
      precio2:''
    })
  }

  async search():Promise<void>{
    const citaUser: any={
      placa:this.registroVehiculoForm.get('placa')?.value
    }

    console.log(citaUser.placa);
    
    const orden = await this.carService.OrdenRepaModifica(citaUser.placa).valueChanges().pipe( take(1) ).toPromise();
    
    if(orden[0]==undefined){
      alert('sin resultados para esta búsqueda')
    }else if(orden[0].estado=='orden cerrada por mecanico'){
      this.placa = orden[0].placa;
      this.repuestos = orden[0].repuestos
      this.procedimiento = orden[0].procedimiento
    }else{
      alert('el mecanico no ha cerrado esta orden de reparación o ya no se encuentra disponible');
    }
  }

  async asignar():Promise<void>{
    if(this.placa && this.formPrecios.get('precio1')?.value!='' && this.formPrecios.get('precio2')?.value!=''){
      alert('se ha cerrado la orden, se le avisara al cliente')
      this.carService.asignarItems(this.placa, this.formPrecios.get('precio1')?.value, this.formPrecios.get('precio2')?.value);
      this.infoUser.cambiarEstadoCita(this.placa, 'reparacion finalizada');
      this.registroVehiculoForm.reset();
      this.formPrecios.reset();
      this.placa='';
      this.repuestos=''
      this.procedimiento=''
      console.log(this.placa);
      
      console.log('cerrada');
      
    }else{
      alert('debe encontrar un vehiculo cuya orden este preparada para cerrar y llenar los campos correspondientes')
    }
  }

}
