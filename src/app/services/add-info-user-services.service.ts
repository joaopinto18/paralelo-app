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
   * Funcion para mandar la informacion de usuarios a la base de datos
   */
  
  modificarInfoUsuario(data:ModeloDatosUsuario):Promise<DocumentReference>{
    return this.usersCollection.add(data);
  }

}
