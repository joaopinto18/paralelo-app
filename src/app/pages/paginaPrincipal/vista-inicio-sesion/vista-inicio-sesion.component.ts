import { Component, OnInit } from '@angular/core';
import { Console } from 'node:console';

@Component({
  selector: 'app-vista-inicio-sesion',
  templateUrl: './vista-inicio-sesion.component.html',
  styleUrls: ['./vista-inicio-sesion.component.scss']
})
export class VistaInicioSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleLogin(){
    console.log('Hola Mundo');
  }
}
