import * as mongoose from 'mongoose';
import { Student } from '../interfaces/student.interface';

const eventSchema = new mongoose.Schema({
  eventId: String,
  firstName: String,
  lastName: String,
  email: String,
  department: String,
  regNo: String
});

const studentModel = mongoose.model<Student & mongoose.Document>('Student', eventSchema);

export default studentModel;
