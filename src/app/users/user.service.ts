import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users$ = new BehaviorSubject<User[]>([]);
  constructor(private http: HttpClient) {}

  get users(): Observable<User[]> {
    return this.users$;
  }

  public init() {
    this.getUsers();
  }

  public getUsers() {
    this.http
      .get<User[]>('http://localhost:3000/users')
      .pipe(tap(console.log))
      .subscribe((users) => this.users$.next(users));
  }

  public getUsersBySecondName(secondName: string) {
    this.http
      .get<User[]>(`http://localhost:3000/users?secondName=${secondName}`)
      .subscribe((users) => this.users$.next(users));
  }
}
