import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './events/creator/creator.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { MyEventsComponent } from './events/my-events/my-events.component';
import { PastEventsComponent } from './events/past-events/past-events.component';

const routes: Routes = [
  {
    path: 'invitations',
    component: EventListComponent,
  },
  {
    path: 'creator',
    component: CreatorComponent,
  },
  {
    path: 'my-events',
    component: MyEventsComponent,
  },
  {
    path: 'past-events',
    component: PastEventsComponent,
  },
  {
    path: '',
    redirectTo: '/invitations',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
