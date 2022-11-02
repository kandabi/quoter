import { useEffect, useState } from 'react';

import './style.scss';
import { IQuote } from '../quote/quote';

interface QuoteEditorProps {
   onQuoteCreate?: (quote: IQuote) => void;
   onQuoteEdit?: (quote: IQuote) => void;
   editQuote?: IQuote;
}

const QuotesEditor = ({ editQuote, onQuoteCreate, onQuoteEdit }: QuoteEditorProps) => {
   const [quote, setQuote] = useState<IQuote>({
      author: '',
      title: '',
   });

   useEffect(() => {
      if (editQuote) {
         setQuote(editQuote);
      }
   }, [editQuote]);

   const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setQuote((prev) => ({ ...prev, author: e.target.value }));

   const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setQuote((prev) => ({ ...prev, title: e.target.value }));

   const handleButtonClick = () => {
      if (editQuote) {
         onQuoteEdit?.(quote);
      } else {
         onQuoteCreate?.(quote);
      }

      setQuote({
         author: '',
         title: '',
      });
   };

   return (
      <div className='quotes-editor'>
         <label>Author</label>
         <input onChange={handleAuthorChange} placeholder='Author' value={quote.author} type='text' />
         <label>Title</label>
         <textarea onChange={handleTitleChange} placeholder='Title' value={quote.title} rows={4} />
         <button onClick={handleButtonClick}>{editQuote ? 'Edit' : 'Submit'}</button>
      </div>
   );
};

export { QuotesEditor };
