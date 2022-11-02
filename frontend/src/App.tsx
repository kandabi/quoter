import { useEffect, useState } from 'react';

import './app.scss';
import { IQuote } from './components/quote/quote';
import { QuoteList } from './components/quote-list';
import { QuotesApi } from './api/quotes-api';
import { QuotesEditor } from './components/quotes-editor';

const App = () => {
   const [editQuote, setEditQuote] = useState<IQuote>();
   const [quotes, setQuotes] = useState<IQuote[]>([]);

   useEffect(() => {
      fetchQuotes();
   }, []);

   const fetchQuotes = () => QuotesApi.get().then((data) => setQuotes(data));

   const handleQuoteCreateSubmit = (quote: IQuote) => QuotesApi.create(quote).then(fetchQuotes);
   const handleQuoteEditSubmit = (quote: IQuote) => {
      QuotesApi.update(quote).then(fetchQuotes);
      setEditQuote(undefined);
   };

   const handleQuoteDeleteClick = (id: number) => QuotesApi.delete(id).then(fetchQuotes);
   const handleQuoteEditClick = (quote: IQuote) => setEditQuote(quote);

   return (
      <div className='container'>
         <h1>Quotes Editor</h1>
         <QuoteList
            onClickDelete={handleQuoteDeleteClick}
            onClickEdit={handleQuoteEditClick}
            quotes={quotes}
         />
         <QuotesEditor
            onQuoteCreate={handleQuoteCreateSubmit}
            onQuoteEdit={handleQuoteEditSubmit}
            editQuote={editQuote}
         />
      </div>
   );
};

export { App };
