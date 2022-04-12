import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { RegisterData } from './models/register-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<RegisterData | null>(null);

  constructor(private http: HttpClient) {}

  setUser(user: RegisterData | null) {
    let destination: string;
    if (user === null) {
      localStorage.removeItem('user');
      destination = 'auth';
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      // if(user.roles.includes('AUTHOR')){

      //   destination = 'dashboard/author/add-recipe'
      // }else{

      //   destination = 'dashboard/user/recipe'
      // }
    }
    this.user$.next(user);
    // this.router.navigate([destination])
  }

  register(user: RegisterData) {
    return this.http
      .post('http://localhost:3000/users', user)
      .pipe(tap(() => this.setUser(user)));
  }
}
