import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, docChanges, DocumentData, DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AddCarModel } from '../models/add-car-model';

@Injectable({
  providedIn: 'root'
})
export class AddCarServiceService {

  private CarsCollection: AngularFirestoreCollection<AddCarModel>
  private CarsCollectionObtener: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) { 
    this.CarsCollection=this.firestore.collection<AddCarModel>('VEHICULOS REGISTRADOS PARA ORDENES');
    this.CarsCollectionObtener=firestore.collection('VEHICULOS REGISTRADOS PARA ORDENES');
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

    return this.firestore.collection('VEHICULOS REGISTRADOS PARA ORDENES' ,  ref => (
      ref.where('placa', '==', placa)))

      
    /*this.CarsCollectionObtener.doc(nombreDelDoc).ref.onSnapshot(function(result) {
      var data = result.get('placa')
      console.log(data);
      })*/
    
    
    /*this.CarsCollectionObtener.ref.where('placa','==',placa)
    .get().then((querySnapshot) => {
        querySnapshot.forEach((carro) => {
           console.log(carro.id);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/
  
  }  

   /**
   * FUNCION PARA MODIFICAR LA INFORMACIÓN DE REPARACIÓN DE UN VEHÍCULO
   */

    //esto esta parapeteado, arreglarlo
    modificarInfoVehiculo(respuestos: String, procedimiento: String, diagnostico: String, placa: string):any{

      
      this.firestore.collection('VEHICULOS REGISTRADOS PARA ORDENES').ref.where('placa','==',placa).
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
