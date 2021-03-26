import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModeloDatosUsuario } from '../models1/modelo-datos-usuario';

@Injectable({
  providedIn: 'root'
})
export class AddInfoUserServicesService {
  private usersCollection: AngularFirestoreCollection<ModeloDatosUsuario>;
  public IDusuarioService:any;
  constructor(private Firestore:AngularFirestore, private router: Router) {
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
    console.log(this.IDusuarioService);
    
    this.usersCollection.doc(this.IDusuarioService).ref.onSnapshot(function(result) {
      result.ref.update({cedula: data.cedula, fecha: data.fecha, lugar: data.lugar, 
      nombre_apellido: data.nombre_apellido, numero: data.numero });
  })
  }

  /**
   * OBTENER EL ID DEL DOCUMENTO EN EL QUE SE ENCUENTRA LA INFO DEL 
   */

  ObtenerIDDocumentoUsuario(email: string): any{

    this.Firestore.collection('DATOS-USUARIOS').ref.where('correo','==',email).
    get().then((querysnapshot)=>{
        querysnapshot.forEach((usuario)=>{
          //obtenemos el id en cuestion
          this.IDusuarioService=usuario.id.valueOf();
          console.log(this.IDusuarioService);
          //utilizamos el id para evaluar que acceso tiene y hacer los tramites respectivos
          if(usuario.get('acceso')=='cliente'){
            this.router.navigate(['/vista-datos-perfil-cliente']);
            //restringir las demas rutas 
          }else if(usuario.get('acceso')=='mecanico'){
            this.router.navigate(['/vista-perfil-mecanico']);
            //restringir las demas rutas 
          }
        })
      })
    return this.IDusuarioService;
  }

  /**
   * AGREGAR VEHICULOS DE USUARIO
   */
}
