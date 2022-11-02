import { Express } from 'express';
import { QuotesController } from './quotes/quotes.controller';

const routes = (app: Express) => {
   app.get('/api/quotes', QuotesController.get);
   app.post('/api/quotes', QuotesController.create);
   app.put('/api/quotes/:id', QuotesController.update);
   app.delete('/api/quotes/:id', QuotesController.delete);
};

export { routes };
