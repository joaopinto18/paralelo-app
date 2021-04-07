import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-registro-vehiculo2',
  templateUrl: './vista-registro-vehiculo2.component.html',
  styleUrls: ['./vista-registro-vehiculo2.component.scss']
})
export class VistaRegistroVehiculo2Component implements OnInit {

  url: any;
  prueba:boolean = false;
  clicked = false;
  form!:FormGroup;

  constructor(private addCar: AddCarServiceService, private addedUser: AddInfoUserServicesService, private fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    this.createForm1();

    const user = await this.addCar.BuscarVehiculoIdxx(localStorage.getItem('correouser'),2).valueChanges().pipe( take(1) ).toPromise()

    try{
      this.form.setValue({serial_motor: user[0].serial_motor,
        modelo:user[0].modelo, anno:user[0].anno, placa:user[0].placa, fecha:user[0].fecha});
    }catch(err){
      console.log('no hay vehiculo registrado en esta plaza');
    }
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
      this.prueba = true;
    }
}

  montarFoto(): boolean{
    return this.prueba;
  }

  createForm1(): void{
    this.form = this.fb.group({
      serial_motor: '',
      modelo: '',
      anno: '',
      fecha: '',
      placa:''
    });
  }

  RegistrarVehiculo() {

    const datosUsuario={
      IdDocDueno: localStorage.getItem('iduser'),
      nroVheiculo: 2,
      serial_motor: this.form.get('serial_motor').value,
      modelo: this.form.get('modelo').value,
      anno: this.form.get('anno').value,
      fecha: this.form.get('fecha').value,
      placa: this.form.get('placa').value,
      historial_procedimientos: ""
      } 
    this.addedUser.AgregarVehiculoUsuario(datosUsuario);
    
    }

    async desactivar(){
      const user = await this.addCar.BuscarVehiculoIdxx(localStorage.getItem('correouser'),2).valueChanges().pipe( take(1) ).toPromise()
      this.addCar.liberarEspacioNuevoVehiculo(user[0].placa);
  
      this.form.setValue({serial_motor: '',
        modelo:'', anno:'', placa:'', fecha:''});
  
        alert('se ha liberado este espacio para registrar vehiculo')
    }

}
