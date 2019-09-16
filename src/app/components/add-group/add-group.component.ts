import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Group } from '../../models/group';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
})
export class AddGroupComponent implements OnInit {
  group: Group = {
    title: '',
    description: ''

  }
  constructor(private groupService: GroupService) { }

  ngOnInit() {}

  onSubmit(){
    if(this.group.title != '' && this.group.description != ''){
      this.groupService.addGroup(this.group);
      this.group.title = '';
      this.group.description = '';
    }
  }

}
