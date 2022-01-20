import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { IExistingUser } from '../../core/iexisting-user.interface';
import { INewUser } from '../../core/inew-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn=false;

  constructor(private firebaseAuth: AngularFireAuth) {
    // this.user = firebaseAuth.authState;
  }


   
  // To sign up a new user.
  async signup(userDetails: INewUser) {
    await this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((value: any) => {
        console.log('Success! User is successfully registered.', value.user.email);
      })
      .catch((error: any) => {
        // this.err = error.message;
        console.log('Something went wrong:', error);
      });
  }
 
  // To login a valid user.
  async login(userDetails: IExistingUser) {
    await this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((value: any) => {
        console.log('User successfully logged in!');
      })
      .catch((error: any) => {
        // this.err = error.message;
        console.log('Something went wrong:', error);
      });
  }
 
  // To logout an authenticated user.
  async logout() {
    await this.firebaseAuth
      .auth
      .signOut();
  }

  async getUserAuthStatus() {
    return await this.firebaseAuth.authState;
  }
}
