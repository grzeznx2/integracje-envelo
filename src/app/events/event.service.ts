import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, tap } from 'rxjs';
import { EventDetails } from './models/event-details.model';
import { Decision, EventItem } from './models/event-item.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events$ = new BehaviorSubject<EventItem[]>([]);
  private event$ = new ReplaySubject<EventDetails>(1);
  constructor(private http: HttpClient) {}

  get events(): Observable<EventItem[]> {
    return this.events$;
  }

  get event(): Observable<EventDetails> {
    return this.event$;
  }

  public init() {
    this.getEvents();
  }

  public createEvent(event: Partial<EventDetails>) {
    this.http
      .post(`http://localhost:3000/events`, event)
      .subscribe(console.log);
  }

  public getEventById(id: number) {
    this.http
      .get<EventDetails[]>(`http://localhost:3000/events?id=${id}`)
      .pipe(tap(console.log))
      .subscribe((events) => this.event$.next(events[0]));
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
