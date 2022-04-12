import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Decision } from '../models/event-item.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent implements OnInit {
  @Input() name!: string;
  @Input() id!: number;
  @Input() address!: string;
  @Input() startDate!: Date;
  @Input() startTime!: Date;
  @Input() decision!: Decision;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {}

  accept() {
    this.eventService.updateEventDecision(this.id, 'YES');
  }

  decline() {
    this.eventService.updateEventDecision(this.id, 'NO');
  }

  consider() {
    this.eventService.updateEventDecision(this.id, 'MAYBE');
  }
}
