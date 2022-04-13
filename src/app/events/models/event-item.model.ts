import { EventPlace } from './event-details.model';

export type Decision = 'YES' | 'NO' | 'MAYBE' | 'NOT DECIDED';

export interface EventItem {
  id: number;
  title: string;
  startDate: Date;
  startTime: Date;
  eventPlace: EventPlace;
  decision: Decision;
}
