import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vista-solicitar-citas',
  templateUrl: './vista-solicitar-citas.component.html',
  styleUrls: ['./vista-solicitar-citas.component.scss']
})
export class VistaSolicitarCitasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  clicked = false;
  clicked2 = false;
  clicked3 = false;

  trash1(){
    this.clicked = false;
  }

  trash2(){
    this.clicked2 = false;
  }

  trash3(){
    this.clicked3 = false;
  }


}
