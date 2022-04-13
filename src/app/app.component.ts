import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showSidebar = false;
  title = 'integracje';

  toggleShowSidebar() {
    console.log('ELO');
    this.showSidebar = !this.showSidebar;
  }
}
