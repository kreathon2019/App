import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { UserdataService } from '../../services/userdata.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  description: string = ""

  constructor(
    public afStore: AngularFirestore,
    public user: UserdataService
  ) { }

  ngOnInit() {
  }

  setDescription() {
    const description = this  // Das "description"-Feld von oben nehmen

    this.afStore.doc(`users/${this.user.getUID()}`).update({
      description
    })
  }

}
