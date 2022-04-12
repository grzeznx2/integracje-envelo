import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, EventItemComponent, EventListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
