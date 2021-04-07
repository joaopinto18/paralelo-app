import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

@Component({
  selector: 'app-vista-registro-vehiculo1',
  templateUrl: './vista-registro-vehiculo1.component.html',
  styleUrls: ['./vista-registro-vehiculo1.component.scss']
})
export class VistaRegistroVehiculo1Component implements OnInit {

  url: any;
  prueba:boolean = false;
  clicked = false;
  form!:FormGroup;
  filePath:String;

  constructor(private addedUser: AddInfoUserServicesService, private fb: FormBuilder, private Firestorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.createForm1();
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      this.filePath = event.target.files[0];
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
      this.prueba = true;
    }
  }

  upload(event){
    this.filePath = event.target.files[0];
  }

  montarFoto(): boolean{
    return this.prueba;
  }

  createForm1(): void{
    this.form = this.fb.group({
      IdDocDueno:'',
      nroVheiculo:'',
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
      nroVheiculo: 1,
      serial_motor: this.form.get('serial_motor').value,
      modelo: this.form.get('modelo').value,
      anno: this.form.get('anno').value,
      fecha: this.form.get('fecha').value,
      placa: this.form.get('placa').value,
      historial_procedimientos: ""
      } 
    this.addedUser.AgregarVehiculoUsuario(datosUsuario);
    console.log(this.filePath)
    this.Firestorage.upload('/images'+Math.random()+this.filePath, this.filePath);
    }

}
