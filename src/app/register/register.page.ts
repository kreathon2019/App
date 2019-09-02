import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public user: UserService
  ) { }

  ngOnInit() {
  }

  async register(){
    const { username, password, cpassword } = this
    if(password !== cpassword) {
      return console.error("Passwörter stimmen nicht überein")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      const description = 'I like to make hackathons awesome!'  // Standard-Beschreibung

      this.afStore.doc(`users/${res.user.uid}`).set({ // Erstelle in 'users'-"Verzeichnis" ein Dokument mit dem Wert des Usernamens
        username,
        description
      })

      if (res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        })
      }

      console.log(res)
    } catch(error) {
        console.dir(error)
    }
    
  }

}
