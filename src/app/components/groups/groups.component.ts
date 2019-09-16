import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Group } from '../../models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor( private groupService: GroupService) { 
    
  }

//wird bei Initialisierung ausgeführt
  ngOnInit() {
    this.groupService.getGroups().subscribe(groups => {
      //console.log(groups);
      this.groups = groups;
    });
  }

}
