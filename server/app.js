import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { NotFoundMiddleware } from './middlewares';

//importing routes
import typeworkRoutes from './routes/typeworks.routes';
import complaintRoutes from './routes/complaints.routes';
import userRoutes from './routes/users.routes';
import commentRoutes from './routes/comments.routes';
import votesComplaintRoutes from './routes/votesComplaint.routes';
import votesCommmetRoutes from './routes/votesCommmet.routes';


//Habilitamos CORS
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


const app = () => {
    const router = express();
    const apiRoutes = express();

    //middlewares por default
    apiRoutes
        .use(json())
        .use(morgan('dev'))
        .use(cors())
        .use(helmet());

    //ROUTES
    apiRoutes.use('/typework',typeworkRoutes);
    apiRoutes.use('/complaint',complaintRoutes);
    apiRoutes.use('/user',userRoutes);
    apiRoutes.use('/comment',commentRoutes);
    apiRoutes.use('/votescomplaint', votesComplaintRoutes);
    apiRoutes.use('/votescomment', votesCommmetRoutes);
    
    router.use('/api/v1', apiRoutes);
    router.use(NotFoundMiddleware);

    return router;
}

export default app;