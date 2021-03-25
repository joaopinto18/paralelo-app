import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { ModeloDatosUsuario } from '../models1/modelo-datos-usuario';

@Injectable({
  providedIn: 'root'
})
export class AddInfoUserServicesService {
  private usersCollection: AngularFirestoreCollection<ModeloDatosUsuario>;

  constructor(private Firestore:AngularFirestore) {
    this.usersCollection = this.Firestore.collection<ModeloDatosUsuario>("DATOS-USUARIOS");

  }

  /**
   * FUNCION PARA MODIFICAR DATOS DE LA BD 
   */
  
  modificarInfoUsuario(data:ModeloDatosUsuario):any{
    this.usersCollection.doc("xe3HBRUNGZStmqzwgIRa").ref.onSnapshot(function(result) {
      result.ref.update({cedula: data.cedula, fecha: data.fecha, lugar: data.lugar, 
      nombre_apellido: data.nombre_apellido, numero: data.numero });
  })
  }

   
  

}
