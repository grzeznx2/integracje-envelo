import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, catchError, Observable, of, take, tap } from 'rxjs';
import { RegisterData } from './models/register-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<RegisterData | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this._initializeUser();
  }

  get user(): Observable<RegisterData | null> {
    return this.user$;
  }

  setUser(user: RegisterData | null) {
    let destination: string;
    if (user === null) {
      localStorage.removeItem('user');
      destination = 'auth';
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      destination = 'invitations';
      // if(user.roles.includes('AUTHOR')){

      //   destination = 'dashboard/author/add-recipe'
      // }else{

      //   destination = 'dashboard/user/recipe'
      // }
    }
    this.user$.next(user);
    this.router.navigate([destination]);
  }

  handleError(err: any) {}

  register(user: RegisterData) {
    this.http
      .post<RegisterData>('http://localhost:3000/users', user)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return of(err);
        })
      )
      .subscribe((user) => {
        this.toastr.success('Rejestracja przebiegła prawidłowo');
        if (user instanceof HttpErrorResponse) {
          return this.toastr.error('Wystąpił błąd w czasie rejestracji');
        }
        return this.setUser(user);
      });
    // .pipe(tap(() => this.setUser(user)));
  }

  login(user: RegisterData) {
    this.http
      .get<RegisterData[]>(
        `http://localhost:3000/users?email=${user.email}&password=${user.password}`
      )
      .pipe(take(1))
      .subscribe((res) => this.setUser(res[0]));
  }

  logout() {
    this.setUser(null);
  }

  private _initializeUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.setUser(JSON.parse(user));
    }
  }
}
