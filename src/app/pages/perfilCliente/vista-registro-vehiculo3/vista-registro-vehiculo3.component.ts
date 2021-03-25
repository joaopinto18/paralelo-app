import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-registro-vehiculo3',
  templateUrl: './vista-registro-vehiculo3.component.html',
  styleUrls: ['./vista-registro-vehiculo3.component.scss']
})
export class VistaRegistroVehiculo3Component implements OnInit {

  url: any;
  prueba:boolean = false;

  constructor() { }

  ngOnInit(): void {
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
}
