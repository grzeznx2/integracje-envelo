import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() showSidebar!: boolean;
  @Output() sidebarToggled = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarToggled.emit(true);
  }
}
