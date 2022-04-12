import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-item/event-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MyEventsComponent } from './events/my-events/my-events.component';
import { PastEventsComponent } from './events/past-events/past-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventListComponent,
    EventItemComponent,
    NavigationComponent,
    MyEventsComponent,
    PastEventsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
