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

  //id del vehiculo de la reparacion
  public vehiculoID: any;
  
  constructor(private firestore: AngularFirestore, private addedUser: AddInfoUserServicesService) { 
    this.CarsCollection=this.firestore.collection<AddCarModel>('ORDENES-REPA_MODIFICA');
    this.CarsCollectionObtener=firestore.collection('ORDENES-REPA_MODIFICA');
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
