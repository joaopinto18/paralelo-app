import { Component, Input, OnInit } from '@angular/core';
import { Modelocitas } from 'src/app/models/modelocitas';

@Component({
  selector: 'app-cuadrito',
  templateUrl: './cuadrito.component.html',
  styleUrls: ['./cuadrito.component.scss']
})
export class CuadritoComponent implements OnInit {

  @Input() DocModel!: Modelocitas;

  constructor() { }

  ngOnInit(): void {
  }

}
