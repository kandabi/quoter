import { Request, Response } from 'express';
import { getQuotes, updateQuote, deleteQuote, createQuote } from './quotes.services';

class QuotesController {
   static async get(req: Request, res: Response) {
      const quotes = await getQuotes();
      res.status(200).json(quotes);
   }

   static async create(req: Request, res: Response) {
      const { title, author } = req.body;
      if (title && author) {
         const result = await createQuote(title, author);
         res.status(200).json({ success: result });
      } else {
         res.status(400).json({ success: false });
      }
   }

   static async update(req: Request, res: Response) {
      const id = parseInt(req.params.id);
      const { title, author } = req.body;
      if (title && author) {
         const result = await updateQuote(id, title, author);
         res.status(200).json({ success: result });
      } else {
         res.status(400).json({ success: false });
      }
   }

   static async delete(req: Request, res: Response) {
      const id = parseInt(req.params.id);
      const result = await deleteQuote(id);
      res.status(200).json({ success: result });
   }
}

export { QuotesController };
