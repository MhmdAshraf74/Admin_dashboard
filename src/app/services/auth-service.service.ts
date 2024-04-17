import * as auth from 'firebase/auth';
import { inject, Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Iuser } from '../models/user-interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: any;
  

  constructor(
    
    public afs: AngularFirestore,
    public afAuth : AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,

  ) { 
    this.afAuth.authState.subscribe((user)=>{
      if (user){
        this.userData = user
        localStorage.setItem('user',JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);

      } else {
        localStorage.setItem('user', 'null')
        JSON.parse(localStorage.getItem('user')!)
      }
    })
  }
 
  SignUp(email: string, password: string) {
   

     return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
       
        
        console.log(result);
       
        
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
 
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);

        console.log(this.SetUserData);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['home']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
 
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: Iuser = {
      firstName: user.firstName,
      lastName:user.lastName,
      uId: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
 
  // SignOut() {
  //   return this.afAuth.signOut().then(() => {
  //     localStorage.removeItem('user');
  //     this.router.navigate(['login']);
  //   });
  // }
 
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }
}


