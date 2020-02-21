import Route from '../interfaces/routes.interface';
import { Router } from 'express';
import StudentController from '../controllers/student.controller';

class StudentRoute implements Route {

  public path = '/student';
  public router = Router();
  public studentController = new StudentController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.studentController.addStudent);
    this.router.get(`${this.path}/:eventId`, this.studentController.getStudentsByEventId);
  }
}

export default StudentRoute;