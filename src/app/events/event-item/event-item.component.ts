import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent implements OnInit {
  @Input() name!: string;
  @Input() address!: string;
  @Input() startDate!: string;
  @Input() startTime!: string;
  constructor() {}

  ngOnInit(): void {}
}
