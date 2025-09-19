import { Router } from 'express';
import { swaggerDocument, swaggerOptions } from 'src/utils/swaggerUi';
import swaggerUi from 'swagger-ui-express';


const docsRouter = Router()


// Setup Swagger UI
docsRouter.use('/', swaggerUi.serve);
docsRouter.get('/', swaggerUi.setup(swaggerDocument, swaggerOptions));

export default docsRouter;

