import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { AddInfoUserServicesService } from './add-info-user-services.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private afAuth: AngularFireAuth, private addInfoService: AddInfoUserServicesService, private router: Router) { }
  async loginWithGoogle(): Promise<firebase.User>{
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await this.afAuth.signInWithPopup(provider);
      console.log(JSON.stringify(response));
      if (response.user) {
        localStorage.setItem('user',response.user.uid);
        const datosUsuario={
          nombre_apellido: response.user.displayName,
          cedula: 0,
          fecha: "vacio",
          lugar: "vacio",
          numero: 0,
          acceso: "cliente",
          correo: response.user.email
          } 
    
          console.log('---------------------------------------------->');
          console.log('---------------------------------------------->');
      
          this.addInfoService.RegistrarUsuario(datosUsuario);
          this.router.navigate(['/vista-datos-perfil-cliente']);
        return response.user;
      }
      
      
    } catch (error) {
      console.log(error);
      localStorage.removeItem('user');
    }
    

  }
  /**
   *  FUNCION PARA OBTENER EL USUARIO
   */

  getCurrentUser(): Observable<firebase.User>{
    return this.afAuth.user;

  }

  async logout(): Promise<void>{
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user');
    } catch (error) {
      console.log(error);
      localStorage.removeItem('user');
    }
  }
  
  /**
   *  FUNCION PARA REGISTRAR EL USUARIO
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
   * HACIENDO LOGIN MANUAL
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
