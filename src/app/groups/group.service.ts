import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from './models/group.model';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  public createGroup(group: Group) {
    this.http
      .post('http://localhost:3000/groups', group)
      .subscribe(console.log);
  }
}
