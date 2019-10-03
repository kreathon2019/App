import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss'],
})
export class UserdataComponent implements OnInit {

  constructor(public userdataService: UserdataService) { }

  ngOnInit() {
  }

}
