import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Decision, EventItem } from './models/event-item.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events$ = new BehaviorSubject<EventItem[]>([]);
  constructor(private http: HttpClient) {}

  get events(): Observable<EventItem[]> {
    return this.events$;
  }

  public init() {
    this.getEvents();
  }

  public getEvents() {
    this.http
      .get<EventItem[]>('http://localhost:3000/events')
      .pipe(tap(console.log))
      .subscribe((events) => this.events$.next(events));
  }

  public updateEventDecision(id: number, decision: Decision) {
    this.http
      .patch(`http://localhost:3000/events/${id}`, { decision })
      .subscribe((res) => this.getEvents());
  }
}
