import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';

@Component({
  selector: 'app-vista-ordenes',
  templateUrl: './vista-ordenes.component.html',
  styleUrls: ['./vista-ordenes.component.scss']
})
export class VistaOrdenesComponent implements OnInit {

  private scannerEnabled: boolean = true;
  private transports: Transport[] = [];
  private information: string = "No se ha detectado información de ningún código. Acerque un código QR para escanear.";

  constructor(private router: Router, private addCarService: AddCarServiceService) { }

  ngOnInit(): void {
  }

  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = "Espera recuperando información... ";

    console.log($event);
    this.addCarService.vehiculoID=$event;
    
    this.router.navigate(['/vista-registrar-vehiculo-mecanico']);    
      (error: any) => {
        this.information = "Ha ocurrido un error por favor intentalo nuevamente ... ";
      };
  }

}
