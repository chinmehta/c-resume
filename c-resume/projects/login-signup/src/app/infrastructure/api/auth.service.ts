import { Injectable } from '@angular/core';

import { IExistingUser } from '../../core/iexisting-user.interface';
import { INewUser } from '../../core/inew-user.interface';
import { AuthRepository } from '../repository/auth-repository.repository';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue, child, get } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthRepository {
  // isLoggedIn = false;

  constructor() {}

  // To sign up a new user.
  async signup(userDetails: INewUser) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // this.createUser(userDetails);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }

  async login(userDetails: IExistingUser) {
    const auth = getAuth();
    await signInWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async logout() {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  async getUserAuthStatus() {
    const auth = getAuth();
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
      } else {
        // User is signed out
      }
    });
  }

  async createUser(userDetails: INewUser) {
    const db = getDatabase();
    /** 
     * TODO: convert into DTO / interface once tested
     * replace email with uid 
    **/
    await set(ref(db, 'users/' + userDetails.email), {
      username: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phone
    });
  }
}
