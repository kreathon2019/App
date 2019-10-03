import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public user: UserdataService
    ) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)

      if (res.user) {
        this.user.setUser(res.user.uid)
        console.log(`User found: ${res.user.uid}`)
      }

      this.router.navigate(['/menu/user']);
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
