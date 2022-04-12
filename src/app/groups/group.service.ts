import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Group } from './models/group.model';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private groups$ = new BehaviorSubject<Group[]>([]);

  constructor(private http: HttpClient) {}

  get groups(): Observable<Group[]> {
    return this.groups$;
  }

  public init() {
    this.getGroups();
  }

  public createGroup(group: Group) {
    this.http
      .post('http://localhost:3000/groups', group)
      .subscribe(console.log);
  }

  public getGroups() {
    this.http
      .get<Group[]>('http://localhost:3000/groups')
      .pipe(tap(console.log))
      .subscribe((groups) => this.groups$.next(groups));
  }
}
