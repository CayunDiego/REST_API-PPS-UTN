import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import typeworkRoutes from './routes/typeworksRoutes';
import complaintRoutes from './routes/complaintsRoutes';


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


export default app; 