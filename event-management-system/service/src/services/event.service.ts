import { CreateEventDto } from '../dtos/events.dto';
import eventModel from '../models/events.model';
import { Event } from '../interfaces/events.interface';
import { create } from 'domain';

class EventService {

  public events = eventModel;

  public async addEvent(createEventDto: CreateEventDto): Promise<Event> {
    const createEventData: Event = await this.events.create({...createEventDto});
    return createEventData;
  }

  public async listEvents(): Promise<Event[]> {
    const events: Event[] = await this.events.find();
    return events;
  }

}

export default EventService;