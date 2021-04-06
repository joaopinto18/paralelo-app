import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, docChanges, DocumentData, DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AddCarModel } from '../models/add-car-model';
import { AddUserCarModel } from '../models/add-user-car-model';
import { AddInfoUserServicesService } from './add-info-user-services.service';

@Injectable({
  providedIn: 'root'
})
export class AddCarServiceService {

  private CarsCollection: AngularFirestoreCollection<AddCarModel>
  private CarsCollectionObtener: AngularFirestoreCollection;
  private citasCollection: AngularFirestoreCollection;

  //id del vehiculo de la reparacion
  public vehiculoID: any;
  //cont
  public cont: number= 0;
  
  constructor(private firestore: AngularFirestore, private addedUser: AddInfoUserServicesService) { 
    this.CarsCollection=this.firestore.collection<AddCarModel>('ORDENES-REPA_MODIFICA');
    this.CarsCollectionObtener=firestore.collection('ORDENES-REPA_MODIFICA');
    this.citasCollection=firestore.collection('GESTION-CITAS');
  }

  /**
   * FUNCION PARA MANDAR LA INFORMACION DE REGISTRO DE VEHICULO A LA BD
   */

  RegistrarNuevoVehiculo(data:AddCarModel): Promise<DocumentReference>{
    return this.CarsCollection.add(data);
  }

  /**
   * FUNCION PARA OBTENER LA INFORMACIÓN DE VEHÍCULO
   */

  BuscarVehiculo(placa: string): any{

    return this.firestore.collection('ORDENES-REPA_MODIFICA' ,  ref => (
      ref.where('placa', '==', placa)))
  }  

  /**
   * FUNCION PARA BUSCAR LOS DATOS DEL VEHICULO
   */

   BuscarVehiculoId(id: string): any{

    return this.firestore.collection('VEHICULOS-REGISTRADOS').doc(id)
  }   

  /**
   * OBTENER TODOS LOS DOCUMENTOS DE GESTION DE CITAS
   */

  async obtenerFechaCitas(): Promise<any>{
    
    
    return await this.firestore.collection("GESTION-CITAS").get().toPromise()
  }

  /**
   * FUNCION PARA CERRAR LA ORDEN
   */

  cerrarOrdenRepa(placa:string): void{

    this.firestore.collection('ORDENES-REPA_MODIFICA').ref.where('placa','==',placa).
      get().then((querysnapshot)=>{
        querysnapshot.forEach((carro)=>{
          //obtenemos el id en cuestion
          let id = carro.id;
          //utilizamos el id para buscar el documento y hacer los cambios
          this.CarsCollectionObtener.doc(id).ref.onSnapshot(function(result) {
            result.ref.update({estado:'orden cerrada por mecanico'});
          })
        })
      })
  }

  /**
   * MODIFICAR FECHA DE LA CITA
   */

  modificarFecha(fecha: any, placa: string){
    this.firestore.collection('GESTION-CITAS').ref.where('placa','==',placa).
      get().then((querysnapshot)=>{
        querysnapshot.forEach((carro)=>{
          //obtenemos el id en cuestion
          let id = carro.id;
          //utilizamos el id para buscar el documento y hacer los cambios
          this.citasCollection.doc(id).ref.onSnapshot(function(result) {
            result.ref.update({fechaTentativa:fecha, estatus:'En espera de confirmación'});
          })
        })
      })
  }

  /**
   * FUNCION PARA BUSCAR UNA CITA POR CORREO
   */

  buscarCita(placa: string): any{
    return this.firestore.collection('GESTION-CITAS' ,  ref => (
      ref.where('placa', '==', placa)))
  }

  /**
   * FUNCION PARA OBTENER EL NOMBRE DEL DUE;O DEL CARRO DADA LA PLACA
   */

  async obtenerDueno(placa: string): Promise<string>{
    let cor
    let name='no se encontro user';
    await this.firestore.collection('GESTION-CITAS').ref.where('placa','==',placa).
      get().then((querysnapshot)=>{
        querysnapshot.forEach(async (carro)=>{
          //obtenemos el id en cuestion
          cor = carro.get('CorreoSolicitante');
          //utilizamos el id para buscar el documento y hacer los cambios
        })
      })
      await this.firestore.collection('DATOS-USUARIOS').ref.where('correo','==',cor).
      get().then((querysnapshot)=>{
        querysnapshot.forEach((user)=>{
        //obtenemos el id en cuestion
        let nombre = user.get('nombre_apellido');
        //utilizamos el id para buscar el documento y hacer los cambios
        name=nombre;
        })
      })
      return name
  }

   /**
   * FUNCION PARA MODIFICAR LA INFORMACIÓN DE REPARACIÓN DE UN VEHÍCULO
   */

    //esto esta parapeteado, arreglarlo
    modificarInfoVehiculo(respuestos: String, procedimiento: String, diagnostico: String, placa: string):any{

      
      this.firestore.collection('ORDENES-REPA_MODIFICA').ref.where('placa','==',placa).
      get().then((querysnapshot)=>{
        querysnapshot.forEach((carro)=>{
          //obtenemos el id en cuestion
          let id = carro.id;
          //utilizamos el id para buscar el documento y hacer los cambios
          this.CarsCollectionObtener.doc(id).ref.onSnapshot(function(result) {
            result.ref.update({diagnostico:diagnostico, repuestos:respuestos, procedimiento:procedimiento});
            
          })
        })
      })
    }
   
}
