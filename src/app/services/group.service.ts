import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupsCollection: AngularFirestoreCollection<Group>;
  groups: Observable<Group[]>;

  constructor(public afs: AngularFirestore) { 

    this.groupsCollection = this.afs.collection('groups');
    this.groups = this.afs.collection('groups').valueChanges();
  }

  getGroups(){
    return this.groups;
  }

  addGroup(group: Group){
    this.groupsCollection.add(group);
  }

}

