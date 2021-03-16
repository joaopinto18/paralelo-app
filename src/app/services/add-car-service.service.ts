import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AddCarModel } from '../models/add-car-model';

@Injectable({
  providedIn: 'root'
})
export class AddCarServiceService {

  private CarsCollection: AngularFirestoreCollection<AddCarModel>

  constructor(private firestore: AngularFirestore) { 
    /**CarsCollection hace referencia a la coleccion de la bd llamada VEHICULOS.... */
    this.CarsCollection=this.firestore.collection<AddCarModel>('VEHICULOS REGISTRADOS PARA ORDENES');
  }

  /**
   * FUNCION PARA MANDAR LA INFORMACION DE REGISTRO DE VEHICULO A LA BD
   */

  RegistrarNuevoVehiculo(data:AddCarModel): Promise<DocumentReference>{
    return this.CarsCollection.add(data);
  }
}
