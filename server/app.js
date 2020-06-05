import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//importing routes
import typeworkRoutes from './routes/typeworksRoutes';
import complaintRoutes from './routes/complaintsRoutes';
import userRouters from './routes/usersRouters';
import commentRouters from './routes/commentsRouters'


//initialization
const app = express();

//Habilitamos CORS
app.use(cors());
//Vamos a crear un lista blanca, para que solo la url que le digamos, tenga acceso a la API
// const whiteList = ['http://localhost:3000', 'http://192.168.0.101:3000/'];
// const corsOptions = {
//     origin: (origin, callback) => {
//         const existe = whiteList.some( dominio => dominio === origin);
//         if(existe){
//             callback(null, true);
//         } else {
//             callback(new Error('No Permitido por CORS'));
//         }
//     }
// }

// app.use(cors(corsOptions));

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