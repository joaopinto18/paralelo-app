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
   * FUNCION PARA AGREGAR UN USUARIO A LA BASE DE DATOS
   */

   RegistrarUsuario(data:ModeloDatosUsuario): Promise<DocumentReference>{
    return this.usersCollection.add(data);
  }
   

  /**
   * FUNCION PARA MODIFICAR DATOS DE LA BD 
   */

  modificarInfoUsuario(data:ModeloDatosUsuario):any{
<<<<<<< HEAD
    this.usersCollection.doc("xe3HBRUNGZStmqzwgIRa").ref.onSnapshot(function(result) {
=======
    this.usersCollection.doc("IA7y5m5Jw6lOaBKHlMpM").ref.onSnapshot(function(result) {
>>>>>>> 52920536fec99c08f412b029a0f30184f130e1d2
      result.ref.update({cedula: data.cedula, fecha: data.fecha, lugar: data.lugar, 
      nombre_apellido: data.nombre_apellido, numero: data.numero });
  })
  }

   
  

}
