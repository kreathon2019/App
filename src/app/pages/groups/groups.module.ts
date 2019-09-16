import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupsPage } from './groups.page';
import { GroupsComponent } from '../../components/groups/groups.component';
import { AddGroupComponent } from '../../components/add-group/add-group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupsPage, GroupsComponent, AddGroupComponent]
})
export class GroupsPageModule {}
