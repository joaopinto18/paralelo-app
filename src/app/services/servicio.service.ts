import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { ModeloDatosUsuario } from '../models1/modelo-datos-usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private usersCollection: AngularFirestoreCollection<ModeloDatosUsuario>;
  constructor(private afAuth: AngularFireAuth, private router: Router, private Firestore:AngularFirestore) {
    this.usersCollection = this.Firestore.collection<ModeloDatosUsuario>("DATOS-USUARIOS");
   }
  

  /**
   * FUNCION PARA HACER LOGIN CON GOOGLE 
   */

  async loginWithGoogle(): Promise<firebase.User>{
    let registrado: boolean = false;
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await this.afAuth.signInWithPopup(provider);
      console.log(JSON.stringify(response));
      if (response.user) {
        const datosUsuario={
          nombre_apellido: response.user.displayName,
          cedula: 0,
          fecha: "vacio",
          lugar: "vacio",
          numero: 0,
          acceso: "cliente",
          correo: response.user.email
          } 

        await this.Firestore.collection('DATOS-USUARIOS').ref.where('correo','==',datosUsuario.correo).
        get().then((querysnapshot)=>{
          querysnapshot.forEach((usuario)=>{
            //si hay un resultado es porque el usuario ya esta registrado 
            registrado = true;
            localStorage.setItem('iduser',usuario.id.valueOf());
            localStorage.setItem('correouser', datosUsuario.correo.valueOf());
            localStorage.setItem('accesouser', usuario.get('acceso'));
            console.log(usuario.get('acceso'));
            
            //utilizamos el id para evaluar que acceso tiene y hacer los tramites respectivos
            if(usuario.get('acceso')=='cliente'){
              this.router.navigate(['/vista-datos-perfil-cliente']);
            }else if(usuario.get('acceso')=='mecanico'){
              this.router.navigate(['/vista-perfil-mecanico']);
            }else if(usuario.get('acceso')=='admin'){
              this.router.navigate(['/vista-datos-perfil-admin']);
            }
            //GERENTE

          })
        })
        
        if(!registrado){
          //registramos al usuario
          this.RegistrarUsuario(datosUsuario);
          //lo redirigimos a la vista de cliente
          this.router.navigate(['/vista-datos-perfil-cliente']);
        }
        
        return response.user;
      }

    } catch (error) {
      console.log(error);
      localStorage.removeItem('iduser');
    }
  }

  /**
   * FUNCION PARA REGISTRAR USUARIO
   */

  RegistrarUsuario(data:ModeloDatosUsuario): any{
  this.usersCollection.add(data);
  
  this.Firestore.collection('DATOS-USUARIOS').ref.where('correo','==',data.correo).
  get().then((querysnapshot)=>{
      querysnapshot.forEach((usuario)=>{
        //mandamos el id del user al local storage
        localStorage.setItem('iduser',usuario.id.valueOf());
        localStorage.setItem('correouser', data.correo);
        localStorage.setItem('accesouser', 'cliente');
        //utilizamos el id para evaluar que acceso tiene y hacer los tramites respectivos
        this.router.navigate(['/vista-datos-perfil-cliente']);
        //restringir las demas rutas 
        
      })
    })
  } 

  /**
   * INICIAR SESIÓN Y REDIRIGIR A LA VISTA CORRESPONDIENTE
   */

   Iniciar(email: string): any{

    this.Firestore.collection('DATOS-USUARIOS').ref.where('correo','==',email).
    get().then((querysnapshot)=>{
        querysnapshot.forEach((usuario)=>{
          //guardamos al user en el localStorage
          localStorage.setItem('iduser',usuario.id.valueOf());
          localStorage.setItem('correouser', email);
          localStorage.setItem('accesouser', usuario.get('acceso'));
          //utilizamos el id para evaluar que acceso tiene y hacer los tramites respectivos
          if(usuario.get('acceso')=='cliente'){
            this.router.navigate(['/vista-datos-perfil-cliente']);
            //restringir las demas rutas 
          }else if(usuario.get('acceso')=='mecanico'){
            this.router.navigate(['/vista-perfil-mecanico']);
            //restringir las demas rutas 
          }else if(usuario.get('acceso')=='admin'){
            this.router.navigate(['/vista-datos-perfil-admin']);
          }
        })
      })
  }

  /**
   * FUNCION PARA CAPTAR SI HAY UN USUARIO LOGEADO
   */

  getCurrentUser(): string{
    return localStorage.getItem('iduser');
  }

  /**
   * FUNCION PARA HACER LOG OUT
   */

  async logout(): Promise<void>{
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('iduser');
      localStorage.removeItem('correouser'); 
      localStorage.removeItem('accesouser');
    } catch (error) {
      console.log(error);
      localStorage.removeItem('iduser');
      localStorage.removeItem('correouser');
      localStorage.removeItem('accesouser');
    }
  }
  
  /**
   *  FUNCION PARA REGISTRAR EL USUARIO // NO SE USA
   */

  async registerNewUSer(
    email: string,
    password:  string, 
    displayName: string,
    ): Promise<firebase.User>{
      try {
       const response = await this.afAuth.createUserWithEmailAndPassword(email,password);
      if (response.user) {
        localStorage.setItem('user',response.user.uid);
        response.user.updateProfile({displayName,photoURL: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',});
        return response.user;
      }
      } catch (error) {
        console.log(error);
        localStorage.removeItem('user');
      }
  }

  /**
   * HACIENDO LOGIN MANUAL // NO SE USA
   */

  async loginWithEmail(email: string, password:  string,): Promise<firebase.User>{
    try {
      const response = await this.afAuth.signInWithEmailAndPassword(email,password);
      if (response.user) {
        localStorage.setItem('user',response.user.uid);
        return response.user;
      }else{
        alert('no se encontro el usuario')
      }

    } catch (error) {
      console.log(error);
      alert('correo o contraseña incorrecta, intente de nuevo')
      localStorage.removeItem('user');
    }
  }

}
