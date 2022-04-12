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
