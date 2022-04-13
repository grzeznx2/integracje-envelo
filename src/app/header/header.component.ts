import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RegisterData } from '../auth/models/register-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user$: Observable<RegisterData | null> = of(null);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user;
  }

  logout() {
    this.authService.logout();
  }
}
