import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventService } from '../event.service';
import { EventDetails, EventStatus } from '../models/event-details.model';
import { Decision } from '../models/event-item.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  public eventId!: number;
  public event$: Observable<EventDetails | null> = of(null);
  public decision: Decision = 'YES';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEventById(this.eventId);
    this.event$ = this.eventService.event;
  }

  public switchDecision(decision: Decision) {
    this.decision = decision;
  }
}
