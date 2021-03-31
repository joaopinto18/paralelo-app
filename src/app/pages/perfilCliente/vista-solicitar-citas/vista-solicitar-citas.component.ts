import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-vista-solicitar-citas',
  templateUrl: './vista-solicitar-citas.component.html',
  styleUrls: ['./vista-solicitar-citas.component.scss']
})
export class VistaSolicitarCitasComponent implements OnInit {


  constructor(private fun: AngularFireFunctions){}

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

  

 /* API_KEY = "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";
  TEMPLATE_ID = "d-1adad623ca9d42b2a2adf445f94cdebd";
  */

  /*sendEmail(){

    SendGrid.setApiKey(this.API_KEY);

    const msg = {
      to: "v.rujana@correo.unimet.edu.ve",
      from: 'v.rujana@correo.unimet.edu.ve',
      templateId: this.TEMPLATE_ID,
      dynamic_template_data: {
          subject: 'Welcome to my awesome app!',
          name: "Hola",
      },
  };
  return SendGrid.send(msg);
  }
  */
}
