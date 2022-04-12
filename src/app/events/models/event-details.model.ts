export type EventStatus = 'ACTIVE' | 'CANCELLED' | 'FINISHED';

export interface EventPlace {
  id: number;
  // placeType: PlaceType
  city: string;
  street: string;
  streetNumber: string;
  localNumber: string;
  postcode: string;
}

export interface EventDetails {
  id: number;
  title: string;
  description: string;
  minMembers: number;
  maxMembers: number;
  startDate: Date;
  // endDate: LocalDateTime(?)
  deadlineDecision: Date;
  eventPlace: EventPlace;
  // participants: List<EventParticipants>;
  // enventPosts: List<Post>;
  // feedbacks: List<Feedback>;
  eventStatus: EventStatus;
}
