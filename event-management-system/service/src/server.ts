import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import AuthRoute from './routes/auth.route';
import validateEnv from './utils/validateEnv';
import EventRoute from './routes/event.route';
import StudentRoute from './routes/student.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new EventRoute(),
  new StudentRoute()
]);

app.listen();
