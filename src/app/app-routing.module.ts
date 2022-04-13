import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSwitchComponent } from './auth/form-switch/form-switch.component';
import { CreatorComponent } from './events/creator/creator.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventInformationsComponent } from './events/event-informations/event-informations.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { MyEventsComponent } from './events/my-events/my-events.component';
import { PastEventsComponent } from './events/past-events/past-events.component';
import { GroupsComponent } from './groups/groups.component';
import { PostCreatorComponent } from './posts/post-creator/post-creator.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: FormSwitchComponent,
  },
  {
    path: 'invitations',
    canActivate: [AuthGuard],
    component: EventListComponent,
  },
  {
    path: 'invitations/:id',
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
    component: CreatorComponent,
  },
  {
    path: 'groups',
    canActivate: [AuthGuard],
    component: GroupsComponent,
  },
  {
    path: 'my-events',
    canActivate: [AuthGuard],
    component: MyEventsComponent,
  },
  {
    path: 'past-events',
    canActivate: [AuthGuard],
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
