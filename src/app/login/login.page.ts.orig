import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
<<<<<<< HEAD
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular'
=======
import { UserService } from '../user.service';
>>>>>>> userdata

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""
<<<<<<< HEAD

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
    ) { }
=======
  constructor(public afAuth: AngularFireAuth, public user: UserService) { }
>>>>>>> userdata

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
<<<<<<< HEAD
      this.router.navigate(['/menu/user']);
=======
      alert("herzlichen Glückwunsch")

      if (res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        })
      }
>>>>>>> userdata
    } catch(err) {
      console.dir(err)
      this.showAlert("Fehler", err.message)
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
