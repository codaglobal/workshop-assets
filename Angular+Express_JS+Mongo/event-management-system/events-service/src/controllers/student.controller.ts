import { Request, Response, NextFunction } from 'express';
import { AddStudentDto } from '../dtos/students.dto';
import StudentService from '../services/student.service';
import { Student } from '../interfaces/student.interface';

class StudentController {

  public studentService = new StudentService();

  public addStudent = async (request: Request, response: Response, next: NextFunction) => {
    const studentDto: AddStudentDto = request.body;
    const addStudentData: Student = await this.studentService.addStudent(studentDto);
    response.status(200).json({data: addStudentData, message: 'Added'});
  }

  public getStudentsByEventId = async (request: Request, response: Response, next: NextFunction) => {
    const eventId = request.params.eventId;
    const students: Student[] = await this.studentService.getStudentsByEventId(eventId);
    response.status(200).json({data: students});
  }
}

export default StudentController;