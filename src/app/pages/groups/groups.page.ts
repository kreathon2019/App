import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  clicked: boolean = false;

  constructor() { }

  createGroupClicked() {
    this.clicked = !this.clicked;
  }

  ngOnInit() {
  }

}
