import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-contactanos',
  templateUrl: './vista-contactanos.component.html',
  styleUrls: ['./vista-contactanos.component.scss']
})
export class VistaContactanosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  position ={
    lat: -34.681,
    lng: -58.371
  };

  label ={
    color: "red",
    text: "Paralelo",
  }

}
