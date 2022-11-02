import axios, { CancelTokenSource } from 'axios';
import { IQuote } from '../components/quote';

const baseUrl = process.env.REACT_APP_API_URL;
const apiUrl = `${baseUrl}/api/quotes`;

interface Response {
   success: boolean;
}

class QuotesApi {
   public static async get(token?: CancelTokenSource) {
      const response = await axios.get<IQuote[]>(`${apiUrl}`, {
         cancelToken: token?.token,
      });
      return response.data;
   }

   public static async create(quote: IQuote, cancelSource?: CancelTokenSource) {
      const response = await axios.post<IQuote>(apiUrl, quote, {
         cancelToken: cancelSource?.token,
      });
      return response.data;
   }

   public static async update(quote: IQuote, cancelSource?: CancelTokenSource) {
      const response = await axios.put<Response>(`${apiUrl}/${quote.id}`, quote, {
         cancelToken: cancelSource?.token,
      });
      return response.data;
   }

   public static async delete(id: number, cancelSource?: CancelTokenSource) {
      const response = await axios.delete<Response>(`${apiUrl}/${id}`, {
         cancelToken: cancelSource?.token,
      });
      return response.data;
   }
}

export { QuotesApi };
