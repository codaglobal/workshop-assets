import * as mongoose from 'mongoose';
import { Event } from '../interfaces/events.interface';

const eventSchema = new mongoose.Schema({
  name: String,
  type: String,
  date: String,
  venue: String
});

const eventModel = mongoose.model<Event & mongoose.Document>('Event', eventSchema);

export default eventModel;
