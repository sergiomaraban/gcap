import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {    
    var res = this.afAuth.signInWithEmailAndPassword(email, password);    
    return res;
  }

  logout() {
    return this.afAuth.signOut();
  }

  // Obtener información del usuario actual
  getUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }
}

