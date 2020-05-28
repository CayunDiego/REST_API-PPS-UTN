import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import typeworkRoutes from './routes/typeworksRoutes';
import complaintRoutes from './routes/complaintsRoutes';
import userRouters from './routes/usersRouters';
import commentRouters from './routes/commentsRouters'


//initialization
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//ROUTES
//Type work route
app.use('/api/v1/typework',typeworkRoutes);
//complaint route
app.use('/api/v1/complaint',complaintRoutes);
//user route
app.use('/api/v1/user',userRouters);
//comment route
app.use('/api/v1/comment',commentRouters);


export default app; 