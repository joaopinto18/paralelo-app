import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, docChanges, DocumentData, DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AddCarModel } from '../models/add-car-model';

@Injectable({
  providedIn: 'root'
})
export class AddCarServiceService {

  private CarsCollection: AngularFirestoreCollection<AddCarModel>
  private CarsCollectionObtener:AngularFirestoreCollection

  constructor(private firestore: AngularFirestore) { 
    /**CarsCollection hace referencia a la coleccion de la bd llamada VEHICULOS.... */
    this.CarsCollection=this.firestore.collection<AddCarModel>('VEHICULOS REGISTRADOS PARA ORDENES');
    this.CarsCollectionObtener=this.firestore.collection('VEHICULOS REGISTRADOS PARA ORDENES');
  }

  /**
   * FUNCION PARA MANDAR LA INFORMACION DE REGISTRO DE VEHICULO A LA BD
   */

  RegistrarNuevoVehiculo(data:AddCarModel): Promise<DocumentReference>{
    return this.CarsCollection.add(data);
  }

  /**
   * FUNCION PARA OBTENER LA INFORMACIÓN DE VEHÍCULO Y MODIFICARLA
   */

  BuscarVehiculo(placa: string): any{

    return this.CarsCollectionObtener.ref.where('placa','==',placa)
      
    /*this.CarsCollectionObtener.doc(nombreDeColeccion).ref.onSnapshot(function(result) {
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
   
}
