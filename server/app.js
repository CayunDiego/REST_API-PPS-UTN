import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUI from 'swagger-ui-express';
import { NotFoundMiddleware } from './middlewares';

//importing routes
import typeworkRoutes from './routes/typeworks.routes';
import complaintRoutes from './routes/complaints.routes';
import userRoutes from './routes/users.routes';
import commentRoutes from './routes/comments.routes';
import votesComplaintRoutes from './routes/votesComplaint.routes';
import votesCommmetRoutes from './routes/votesCommmet.routes';
import authRoutes from './routes/auth.routes';
import {SWAGGER_PATH}  from './config';
const swaggerDocument = require(SWAGGER_PATH);


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
    apiRoutes.use('/auth', authRoutes);
    
    router.use('/api/v1', apiRoutes);
    router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    router.use(NotFoundMiddleware);
    return router;
}

export default app;