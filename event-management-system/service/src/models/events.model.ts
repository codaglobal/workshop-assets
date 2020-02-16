import * as mongoose from 'mongoose';
import { Event } from '../interfaces/events.interface';

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventType: String,
  eventDate: String,
  departments: Array
});

const eventModel = mongoose.model<Event & mongoose.Document>('Event', eventSchema);

export default eventModel;
