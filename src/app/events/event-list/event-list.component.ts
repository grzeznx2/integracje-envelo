import { Component, OnInit } from '@angular/core';
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
  public eventList = events;
  constructor() {}

  ngOnInit(): void {}
}
