import { AddStudentDto } from '../dtos/students.dto';
import { Student } from '../interfaces/student.interface';
import studentModel from '../models/student.model';

class StudentService {

  public students = studentModel;

  public async addStudent(addStudentDto: AddStudentDto): Promise<Student> {
    const studentData: Student = await this.students.create({...addStudentDto});
    return studentData;
  }

  public async getStudentsByEventId(eventId: string): Promise<Student[]> {
    const students: Student[] = await this.students.find({eventId: eventId});
    return students;
  }


}

export default StudentService;