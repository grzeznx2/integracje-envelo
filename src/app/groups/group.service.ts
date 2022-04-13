import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Group } from './models/group.model';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private groups$ = new BehaviorSubject<Group[]>([]);

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  get groups(): Observable<Group[]> {
    return this.groups$;
  }

  public init() {
    this.getGroups();
  }

  public createGroup(group: Group) {
    this.http.post('http://localhost:3000/groups', group).subscribe(() => {
      this.toastr.success('Pomyślnie dodano nową grupę');
    });
  }

  public getGroups() {
    this.http
      .get<Group[]>('http://localhost:3000/groups')
      .pipe(tap(console.log))
      .subscribe((groups) => this.groups$.next(groups));
  }
}
