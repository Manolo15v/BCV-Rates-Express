import path from 'path';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

let swaggerDocument: swaggerUi.JsonObject;

try {
  const swaggerPath = path.join(__dirname, '..', 'docs/openapi.json');
  const swaggerFile = fs.readFileSync(swaggerPath, 'utf8');
  swaggerDocument = JSON.parse(swaggerFile) as swaggerUi.JsonObject;

} catch (error) {
  console.error('Error loading OpenAPI specification:', error);

}

const swaggerOptions: swaggerUi.SwaggerUiOptions = {
  explorer: true,
  customCss: `
    .swagger-ui .info { margin: 50px 0 }
  `,
  customSiteTitle: 'Rates API Documentation',
  customfavIcon: '/favicon.ico',
  swaggerOptions: {
    docExpansion: 'none',
    filter: true,
    showRequestHeaders: true
  }
};

export { swaggerDocument, swaggerOptions};