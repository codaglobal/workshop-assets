import { Request, Response, NextFunction } from 'express';
import { Event } from '../interfaces/events.interface';
import EventService from '../services/event.service';
import { CreateEventDto } from '../dtos/events.dto';

class EventController {

  public eventService = new EventService();

  public addEvent = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const eventData: CreateEventDto = request.body;
      const createUserData: Event = await this.eventService.addEvent(eventData);
      response.status(200).json({ data: createUserData, message: 'Created' });
    } catch (err) {
      next(err);
    }
  }

  public listEvents = async (request: Request, response: Response, next: NextFunction) => {
    const events: Event[] = await this.eventService.listEvents();
    response.status(200).json({ data: events });
  }
}

export default EventController;