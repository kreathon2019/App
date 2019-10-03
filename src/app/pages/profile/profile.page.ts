import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public userService: UserdataService) {
    //userService.setUser("oAqG2pgqLNbAf58sE1nmP1FOdlx2") // TODO: for debugging purposes
    for(var i = 0; i < 5; i++) {
      console.error(`WARNUNG: Eine Feste User-ID wurde in profile.page.ts für Debugzwecke eingestellt! ${i}`);
    }
    
    userService.printUser();
  }

  ngOnInit() {
  }

}
