import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { IExistingUser } from '../../core/iexisting-user.interface';
import { INewUser } from '../../core/inew-user.interface';
import { AuthRepository } from '../repository/auth-repository.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthRepository {
  // isLoggedIn = false;

  constructor(private firebaseAuth: AngularFireAuth) {}

  // To sign up a new user.
  async signup(userDetails: INewUser) {
    await this.firebaseAuth.auth
      .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log('Success! User is successfully registered.');
      })
      .catch((error: any) => {
        console.log('Something went wrong:', error);
      });
  }

  async login(userDetails: IExistingUser) {
    await this.firebaseAuth.auth
      .signInWithEmailAndPassword(userDetails.email, userDetails.password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log('User successfully logged in!');
      })
      .catch((error: any) => {
        console.log('Something went wrong:', error);
      });
  }

  async logout() {
    await this.firebaseAuth.auth.signOut();
  }

  async getUserAuthStatus() {
    return await this.firebaseAuth.authState;
  }
}
