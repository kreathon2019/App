import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular'

import { AngularFirestore } from '@angular/fire/firestore'
import { Userdata } from '../models/Userdata'
import { UserdataService } from '../services/userdata.service'

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
    public alert: AlertController,
    public router: Router,
    public afStore: AngularFirestore,
    public userService: UserdataService
  ) {}

  ngOnInit() {
  }

  async register(){
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      this.showAlert("Fehler", "Passwörter stimmen nicht überein")
      return console.error("Passwörter stimmen nicht überein")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)

      this.afStore.doc(`users/${res.user.uid}`).set({ // Erstelle in 'users'-Verzeichnis ein Dokument für den User
        username: this.username,
        description: "I like to make hackathons awesome!",
        uid: res.user.uid
      })

      if (res.user) {
        this.userService.setUser(res.user.uid)
      }

      console.log(res)
      this.showAlert("Fertig!", "Sie wurden erfolgreich registriert!")
      this.router.navigate(['/login']); // zu login navigieren
      res.user.sendEmailVerification();
    } catch(error) {
        console.dir(error)
        this.showAlert("Fehler", error.message)
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Okay"]
    })

    await alert.present()
  }

}
