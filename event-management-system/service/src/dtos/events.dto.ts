export class CreateEventDto {

  public eventName: string;
  public eventType: string;
  public eventDate: string;
  public departments: Department[];
}

export class Department {
  public name: string;
}