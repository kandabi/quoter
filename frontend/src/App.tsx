import { useEffect, useState } from 'react';

import { IQuote } from './components/quote/quote';
import { QuoteList } from './components/quote-list';
import { QuotesApi } from './api/quotes-api';
import { QuotesEditor } from './components/quotes-editor';

const App = () => {
   const [quotes, setQuotes] = useState<IQuote[]>([]);
   const [editQuote, setEditQuote] = useState<IQuote>();

   useEffect(() => {
      getQuotes();
   }, []);

   const getQuotes = () => QuotesApi.get().then((data) => setQuotes(data));

   const handleQuoteCreateSubmit = (quote: IQuote) => QuotesApi.create(quote).then(() => getQuotes());
   const handleQuoteEditSubmit = (quote: IQuote) => {
      QuotesApi.update(quote).then(() => getQuotes());
      setEditQuote(undefined);
   };

   const handleQuoteDeleteClick = (id: number) => QuotesApi.delete(id).then(() => getQuotes());
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
