import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Userdata } from '../models/Userdata';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  user: Observable<Userdata>;
  uid: string;

  constructor(public afs: AngularFirestore) {
  }

  getUser() {
    return this.user;
  }

  printUser() {
    console.log(this.uid);
    this.afs.doc(`users/${this.uid}`).get().toPromise().then( asd => {
      console.log(asd);
    });
  }

  setUser(uid: string) {
    this.uid = uid;
    console.log(`Setting uid:${this.uid}`)
    this.user = this.afs.doc(`users/${uid}`).valueChanges();
  }

  getUID() {
    return this.uid
  }
}
