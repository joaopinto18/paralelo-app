import { Component, OnInit } from '@angular/core';
import { AddCarServiceService } from 'src/app/services/add-car-service.service';
import { AddInfoUserServicesService } from 'src/app/services/add-info-user-services.service';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-vista-solicitar-citas',
  templateUrl: './vista-solicitar-citas.component.html',
  styleUrls: ['./vista-solicitar-citas.component.scss']
})
export class VistaSolicitarCitasComponent implements OnInit {

  fecha1: any;
  fecha2: any;
  fecha3: any;

  hora1: any;
  hora2: any;
  hora3: any;

  confirmada1: string;
  confirmada2: string;
  confirmada3: string;

  mostrar: boolean= false;

  url: any;
  prueba:boolean = false;
  filePath:String;

  constructor(private infoUser: AddInfoUserServicesService, private Firestorage: AngularFireStorage) { }

  value3:any;
  value2:any;
  value1:any;

  async ngOnInit(): Promise<void> {

    this.value3 = await this.infoUser.VerificarVehiculo(3);
    this.value2 = await this.infoUser.VerificarVehiculo(2);
    this.value1 = await this.infoUser.VerificarVehiculo(1);

    for (let index = 1; index <= 3; index++) {
      if(await this.infoUser.comprobarCita(index)){

        if(index==1 && await this.infoUser.estadoCita(1) == 'cita solicitada'){
          this.clicked=true;
          this.fecha1= await this.infoUser.fecha(index);
          this.hora1= await this.infoUser.hora(index);
          this.confirmada1='cita solicitada';
        }else if(index==1 && await this.infoUser.estadoCita(1) == 'confirmada'){
          this.clicked=true;
          this.confirmada1='confirmada';
        }else if(index==1 && await this.infoUser.estadoCita(1) == 'En espera de confirmación'){
          this.clicked=true;
          this.fecha1= await this.infoUser.fecha(index);
          this.hora1= await this.infoUser.hora(index);
          this.confirmada1='En espera de confirmación';
        }else if(index==1 && await this.infoUser.estadoCita(1) == 'incio de reparacion'){
          this.clicked=true;
          this.fecha1= await this.infoUser.fecha(index);
          this.hora1= await this.infoUser.hora(index);
          this.confirmada1='confirmada';
        }else if(index==1 && await this.infoUser.estadoCita(1) == 'reparacion en proceso'){
          this.clicked=true;
          this.fecha1= await this.infoUser.fecha(index);
          this.hora1= await this.infoUser.hora(index);
          this.confirmada1='confirmada';
        }else if(index==1 && await this.infoUser.estadoCita(1) == 'reparacion finalizada'){
          this.clicked=true;
          this.fecha1= await this.infoUser.fecha(index);
          this.hora1= await this.infoUser.hora(index);
          this.confirmada1='confirmada';
        }

        if(index==2 && await this.infoUser.estadoCita(2) == 'cita solicitada'){
          this.clicked2=true;
          this.fecha2= await this.infoUser.fecha(index);
          this.hora2= await this.infoUser.hora(index);
          this.confirmada2='cita solicitada';
        }else if(index==2 && await this.infoUser.estadoCita(2) == 'confirmada'){
          this.clicked2=true;
          this.confirmada2='confirmada';
        }else if(index==2 && await this.infoUser.estadoCita(2) == 'En espera de confirmación'){
          this.clicked2=true;
          this.fecha2= await this.infoUser.fecha(index);
          this.hora2= await this.infoUser.hora(index);
          this.confirmada2='En espera de confirmación';
        }else if(index==2 && await this.infoUser.estadoCita(2) == 'incio de reparacion'){
          this.clicked2=true;
          this.fecha2= await this.infoUser.fecha(index);
          this.hora2= await this.infoUser.hora(index);
          this.confirmada2='confirmada';
        }else if(index==2 && await this.infoUser.estadoCita(2) == 'reparacion en proceso'){
          this.clicked2=true;
          this.fecha2= await this.infoUser.fecha(index);
          this.hora2= await this.infoUser.hora(index);
          this.confirmada2='confirmada';
        }else if(index==2 && await this.infoUser.estadoCita(2) == 'reparacion finalizada'){
          this.clicked2=true;
          this.fecha2= await this.infoUser.fecha(index);
          this.hora2= await this.infoUser.hora(index);
          this.confirmada2='confirmada';
        }

        if(index==3 && await this.infoUser.estadoCita(3) == 'cita solicitada'){
          this.clicked3=true;
          this.fecha3= await this.infoUser.fecha(index);
          this.hora3= await this.infoUser.hora(index);
          this.confirmada3='cita solicitada';
        }else if(index==3 && await this.infoUser.estadoCita(3) == 'confirmada'){
          this.clicked3=true;
          this.confirmada3='confirmada';
        }else if(index==3 && await this.infoUser.estadoCita(3) == 'En espera de confirmación'){
          this.clicked3=true;
          this.fecha3= await this.infoUser.fecha(index);
          this.hora3= await this.infoUser.hora(index);
          this.confirmada3='En espera de confirmación';
        }else if(index==3 && await this.infoUser.estadoCita(3) == 'incio de reparacion'){
          this.clicked3=true;
          this.fecha3= await this.infoUser.fecha(index);
          this.hora3= await this.infoUser.hora(index);
          this.confirmada3='confirmada';
        }else if(index==3 && await this.infoUser.estadoCita(3) == 'reparacion en proceso'){
          this.clicked3=true;
          this.fecha3= await this.infoUser.fecha(index);
          this.hora3= await this.infoUser.hora(index);
          this.confirmada3='confirmada';
        }else if(index==3 && await this.infoUser.estadoCita(3) == 'reparacion finalizada'){
          this.clicked3=true;
          this.fecha3= await this.infoUser.fecha(index);
          this.hora3= await this.infoUser.hora(index);
          this.confirmada3='confirmada';
        }
      }
    }
  }

  elementType = NgxQrcodeElementTypes.IMG;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH; 
  

  clicked = false;
  clicked2 = false;
  clicked3 = false;

  upload(event){
    this.filePath = event.target.files[0];
  }

  trash1(){
    this.clicked = false;
    this.infoUser.eliminarCita(1);
  }

  trash2(){
    this.clicked2 = false;
    this.infoUser.eliminarCita(2);
  }

  trash3(){
    this.clicked3 = false;
    this.infoUser.eliminarCita(3);
  }

  async confirmar2(): Promise<void>{
    //asignamos el mensaje correspondiente
    const mensaje= this.fecha2;
    //generando el codigo qr de la orden de repa y enviandolo por correo con la info
    const base64Img = document.getElementsByClassName('bshadow2')[0].children[0]['src'];
    await fetch(base64Img)
        .then(res => res.blob())
        .then(async (blob) => {
          let identificador = Math.random();
          await this.Firestorage.upload('/images'+identificador+blob, blob).then(data => {
          data.ref.getDownloadURL().then(async url => {
            //enviando el url dentro del correo
            var templateParams = {
              correo_user: localStorage.getItem('correouser'),
              asunto: 'Confirmación de cita para reparación/modificación',
              placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), 2),
              url_qr: url,
              fecha: mensaje
            };
            emailjs.send('contact_service', 'contact_form', templateParams, 'user_KW3uRXxAbvOF5N1nIX2LP')
              .then((result: EmailJSResponseStatus) => {
                console.log(result.text);
              }, (error) => {
                console.log(error.text);
              });
          });
      });  
    })

    //otros tramites
    this.infoUser.confirmar(2);
    this.confirmada2 = 'confirmada';
    this.fecha2 = 'Cita en progreso, para ver estado revisa "Reparaciones"'
    alert('se ha confirmado su cita');
  }

  async confirmar3(e: Event): Promise<void>{
    //asignamos el mensaje correspondiente
    const mensaje= this.fecha3;
    //generando el codigo qr de la orden de repa y enviandolo por correo con la info
    const base64Img = document.getElementsByClassName('bshadow3')[0].children[0]['src'];
    await fetch(base64Img)
        .then(res => res.blob())
        .then(async (blob) => {
          let identificador = Math.random();
          await this.Firestorage.upload('/images'+identificador+blob, blob).then(data => {
          data.ref.getDownloadURL().then(async url => {
            //enviando el url dentro del correo
            var templateParams = {
              correo_user: localStorage.getItem('correouser'),
              asunto: 'Confirmación de cita para reparación/modificación',
              placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), 3),
              url_qr: url,
              fecha: mensaje
            };
            emailjs.send('contact_service', 'contact_form', templateParams, 'user_KW3uRXxAbvOF5N1nIX2LP')
              .then((result: EmailJSResponseStatus) => {
                console.log(result.text);
              }, (error) => {
                console.log(error.text);
              });
          });
      });  
    })

    //otros tramites
    this.infoUser.confirmar(3);
    this.confirmada3 = 'confirmada';
    this.fecha3 = 'Cita en progreso, para ver estado revisa "Reparaciones"'
    alert('se ha confirmado su cita');
  }

  async confirmar1(): Promise<void>{
    //asignamos el mensaje correspondiente
    const mensaje= this.fecha1;
    //generando el codigo qr de la orden de repa y enviandolo por correo con la info
    const base64Img = document.getElementsByClassName('bshadow1')[0].children[0]['src'];
    await fetch(base64Img)
        .then(res => res.blob())
        .then(async (blob) => {
          let identificador = Math.random();
          await this.Firestorage.upload('/images'+identificador+blob, blob).then(data => {
          data.ref.getDownloadURL().then(async url => {
            //enviando el url dentro del correo
            var templateParams = {
              correo_user: localStorage.getItem('correouser'),
              asunto: 'Confirmación de cita para reparación/modificación',
              placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), 1),
              url_qr: url,
              fecha: mensaje
            };
            emailjs.send('contact_service', 'contact_form', templateParams, 'user_KW3uRXxAbvOF5N1nIX2LP')
              .then((result: EmailJSResponseStatus) => {
                console.log(result.text);
              }, (error) => {
                console.log(error.text);
              });
          });
      });  
    })

    //otros tramites
    this.infoUser.confirmar(1);
    this.confirmada1 = 'confirmada';
    this.fecha1 = 'Cita en progreso, para ver estado revisa "Reparaciones"'
    alert('se ha confirmado su cita');
  }

  async pedirOtraFecha1(): Promise<void>{
    this.infoUser.nuevaFecha(1);
    this.fecha1='En espera por fecha';
    this.confirmada1='cita solicitada';
    //enviamos un correo al gerente para que sepa que el cliente rechazo la cita
    var templateParams = {
      correo_user: localStorage.getItem('correouser'),
      asunto: 'Solicitud de Rechazada',
      placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), 1),
      estado: 'rechazado'
    };
    emailjs.send('contact_service', 'contact_form2', templateParams, 'user_KW3uRXxAbvOF5N1nIX2LP')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    alert('se ha solicitado otra fecha para la cita')
  }

  async pedirOtraFecha2(): Promise<void>{
    this.infoUser.nuevaFecha(2);
    this.fecha2='En espera por fecha';
    this.confirmada2='cita solicitada';
    //enviamos un correo al gerente para que sepa que el cliente rechazo la cita
    var templateParams = {
      correo_user: localStorage.getItem('correouser'),
      asunto: 'Solicitud de Rechazada',
      placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), 2),
      estado: 'rechazado'
    };
    emailjs.send('contact_service', 'contact_form2', templateParams, 'user_KW3uRXxAbvOF5N1nIX2LP')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      alert('se ha solicitado otra fecha para la cita')
  }

  async pedirOtraFecha3(): Promise<void>{
    this.infoUser.nuevaFecha(3);
    this.fecha3='En espera por fecha';
    this.confirmada3='cita solicitada';
    //enviamos un correo al gerente para que sepa que el cliente rechazo la cita
    var templateParams = {
      correo_user: localStorage.getItem('correouser'),
      asunto: 'Solicitud de Rechazada',
      placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), 3),
      estado: 'rechazado'
    };
    emailjs.send('contact_service', 'contact_form2', templateParams, 'user_KW3uRXxAbvOF5N1nIX2LP')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      alert('se ha solicitado otra fecha para la cita')
  }

  async clickedx(): Promise<void>{
    /*llamamos a solicitar cita con el nro de vehiculo que va a solicitar la cita, la condicion es que el 
    vehiculo este registrado*/ 
    if(await this.infoUser.VerificarVehiculo(1) == 'no encontrado'){
      alert('Debe agregar un vehiculo en el campo VEHICULO 1 para solicitar esta cita')
    }else{
      this.clicked = true;
      this.solicitarCita((await this.infoUser.VerificarVehiculo(1)).valueOf(), 1);
    }
  }

  async clickedx2(): Promise<void>{

    if(await this.infoUser.VerificarVehiculo(2) == 'no encontrado'){
      alert('Debe agregar un vehiculo en el campo VEHICULO 2 para solicitar esta cita')
    }else{
      this.clicked2 = true;
      this.solicitarCita((await this.infoUser.VerificarVehiculo(2)), 2);
    }
  }

  async clickedx3(): Promise<void>{

    if(await this.infoUser.VerificarVehiculo(3) == 'no encontrado'){
      alert('Debe agregar un vehiculo en el campo VEHICULO 3 para solicitar esta cita')
    }else{
      this.clicked3 = true;
      this.solicitarCita((await this.infoUser.VerificarVehiculo(3)), 3);
    }
  }

  async solicitarCita(idDocVehiculo: string, nroVehiculo: number): Promise<void>{
    const datosCita={
      fechaTentativa: 'En espera por fecha',
      IdDocVehiculo: idDocVehiculo,
      CorreoSolicitante: localStorage.getItem('correouser'),
      estatus: 'cita solicitada',
      nroVehiculo: nroVehiculo, 
      placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), nroVehiculo), 
      HoraTentativa:''
    } 
    console.log(datosCita);
    this.infoUser.SolicitarCitax(datosCita);
    if(nroVehiculo==1){
      this.fecha1=datosCita.fechaTentativa;
    }else if(nroVehiculo==1){
      this.fecha2=datosCita.fechaTentativa;
    }else{
      this.fecha3=datosCita.fechaTentativa;
    }
    alert('cita solicitada')

    var templateParams = {
      correo_user: localStorage.getItem('correouser'),
      asunto: 'Solicitud de cita',
      placa: await this.infoUser.obtenerPlaca(localStorage.getItem('iduser'), nroVehiculo),
      estado: 'solicitado'
    };
    emailjs.send('contact_service', 'contact_form2', templateParams, 'user_KW3uRXxAbvOF5N1nIX2LP')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
