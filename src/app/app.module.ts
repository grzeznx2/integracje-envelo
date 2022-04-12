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
import { CreatorComponent } from './events/creator/creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import { GroupCreatorComponent } from './groups/group-creator/group-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventListComponent,
    EventItemComponent,
    NavigationComponent,
    MyEventsComponent,
    PastEventsComponent,
    CreatorComponent,
    GroupsComponent,
    GroupCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
