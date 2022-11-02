import './style.scss';
import { Quote, IQuote } from '../quote/quote';

interface QuoteListProps {
   onClickDelete?: (id: number) => void;
   onClickEdit?: (quote: IQuote) => void;
   quotes: IQuote[];
}

const QuoteList = ({ quotes, onClickDelete, onClickEdit }: QuoteListProps) => {
   return (
      <ul className='quote-list'>
         {quotes.map((quote) => (
            <Quote
               onClickDelete={onClickDelete}
               onClickEdit={onClickEdit}
               quote={quote}
               key={quote.id}
            />
         ))}
      </ul>
   );
};

export { QuoteList };
