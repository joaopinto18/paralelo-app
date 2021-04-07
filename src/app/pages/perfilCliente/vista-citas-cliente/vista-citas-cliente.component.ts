import { Component, OnInit } from '@angular/core';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';


@Component({
  selector: 'app-vista-citas-cliente',
  templateUrl: './vista-citas-cliente.component.html',
  styleUrls: ['./vista-citas-cliente.component.scss']
})
export class VistaCitasClienteComponent implements OnInit {

  estado1:any;
  estado2:any;
  estado3:any;

  constructor(private infoUser: AddInfoUserServicesService) { }

  async ngOnInit(): Promise<void> {
    this.estado1 = await this.infoUser.estadoCita(1);
    this.estado2 = await this.infoUser.estadoCita(2);
    this.estado3 = await this.infoUser.estadoCita(3);
  }

}
