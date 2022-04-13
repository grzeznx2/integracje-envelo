import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() sidebarToggled = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user;
  }

  logout() {
    this.authService.logout();
  }

  toggleSidebar() {
    this.sidebarToggled.emit(true);
  }
}
