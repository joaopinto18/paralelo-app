import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-reporte-extras',
  templateUrl: './vista-reporte-extras.component.html',
  styleUrls: ['./vista-reporte-extras.component.scss']
})
export class VistaReporteExtrasComponent implements OnInit {

  selectedOption;
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

   title2 = 'Rango de edades de los clientes en Paralelo 4x4';
   data2 = [
      ['18-28', 45.0],
      ['29-40', 30.8],
      ['41-60', 20.8],
      ['60-90', 9.8],
      ['15-17', 2.8],
   ];

   title3 = 'Análisis de herramientas mas utilizadas';
   data3 = [
    ['Llaves', 35.0],
    ['Gato', 26.8],
    ['Pinzas', 12.8],
    ['Compresora', 8.5],
    ['Multímetro', 6.2],
    ['Pluma hidráulica', 6.2],
    ['Otros', 0.7] 
   ];
  

 
  

}
