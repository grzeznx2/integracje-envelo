export type Decision = 'YES' | 'NO' | 'MAYBE' | 'NOT DECIDED';

export interface EventItem {
  id: number;
  title: string;
  startDate: Date;
  startTime: Date;
  address: string;
  decision: Decision;
}
