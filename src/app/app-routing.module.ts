import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './events/creator/creator.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventInformationsComponent } from './events/event-informations/event-informations.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { MyEventsComponent } from './events/my-events/my-events.component';
import { PastEventsComponent } from './events/past-events/past-events.component';
import { GroupsComponent } from './groups/groups.component';
import { PostCreatorComponent } from './posts/post-creator/post-creator.component';

const routes: Routes = [
  {
    path: 'invitations',
    component: EventListComponent,
  },
  {
    path: 'invitations/:id',
    component: EventDetailsComponent,
    children: [
      {
        path: 'details',
        component: EventInformationsComponent,
      },
      {
        path: 'posts',
        component: PostCreatorComponent,
      },
    ],
  },
  {
    path: 'creator',
    component: CreatorComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
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
