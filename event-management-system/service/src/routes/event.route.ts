import Route from '../interfaces/routes.interface';
import { Router } from 'express';
import EventController from '../controllers/event.controller';

class EventRoute implements Route {

  public path = '/event';
  public router = Router();
  public eventController = new EventController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.eventController.addEvent);
    this.router.get(`${this.path}`, this.eventController.listEvents);
  }
}

export default EventRoute;