import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private afAuth: AngularFireAuth) { }
  async loginWithGoogle(): Promise<firebase.User>{
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const response = await this.afAuth.signInWithPopup(provider);
      console.log(JSON.stringify(response));
      if (response.user) {
        localStorage.setItem('user',response.user.uid);
        return response.user;
      }
      
      
    } catch (error) {
      console.log(error);
      localStorage.removeItem('user');
    }
    

  }
  /*Usuario actual*/
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
}
