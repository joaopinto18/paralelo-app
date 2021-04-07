import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-reporte-extras',
  templateUrl: './vista-reporte-extras.component.html',
  styleUrls: ['./vista-reporte-extras.component.scss']
})
export class VistaReporteExtrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title1 = 'Marcas que mas reciden en Paralelo 4x4';
   type = 'PieChart';
   data1 = [
      ['Chevrolet', 45.0],
      ['Toyota', 26.8],
      ['Jeep', 12.8],
      ['Ford', 8.5],
      ['Honda', 6.2],
      ['Tesla', 0.7] 
   ];
   options = {    
   };
   width = 400;
   height = 300;

  
  

}
