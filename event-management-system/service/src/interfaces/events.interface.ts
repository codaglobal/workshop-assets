export interface Event {
  _id: string;
  eventName: string;
  eventType: string;
  eventDate: string;
  departments: Department[];
}

export class Department {
  name: string;
}
