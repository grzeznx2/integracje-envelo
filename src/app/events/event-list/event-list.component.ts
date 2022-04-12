import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventService } from '../event.service';
import { EventItem } from '../models/event-item.model';

const events: EventItem[] = [
  {
    name: 'Spotkanie',
    address: 'Sosnowa 50',
    startDate: new Date(),
    startTime: new Date(),
    id: 1,
  },
  {
    name: 'Spotkanie',
    address: 'Sosnowa 50',
    startDate: new Date(),
    startTime: new Date(),
    id: 1,
  },
  {
    name: 'Spotkanie',
    address: 'Sosnowa 50',
    startDate: new Date(),
    startTime: new Date(),
    id: 1,
  },
];

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  public events$: Observable<EventItem[]> = of([]);
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.init();
    this.events$ = this.eventService.events;
  }
}
