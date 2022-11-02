import { useState } from 'react';
import './style.scss';

interface IQuote {
   author: string;
   title: string;
   id?: number;
}

interface QuoteProps {
   onClickDelete?: (id: number) => void;
   onClickEdit?: (quote: IQuote) => void;
   quote: IQuote;
}

const Quote = ({ quote, onClickDelete, onClickEdit }: QuoteProps) => {
   const [hover, setHover] = useState(true);
   const classes = `quote ${hover ? 'hover' : ''}`;

   return (
      <li
         onMouseLeave={() => setHover(false)}
         onMouseEnter={() => setHover(true)}
         className={classes}
      >
         <i>"{quote.title}"</i> - <b>{quote.author}</b>
         <div className='icon exit' onClick={() => onClickDelete?.(quote.id!)}>
            <img src='/close.png' alt='x' />
         </div>
         <div className='icon' onClick={() => onClickEdit?.(quote)}>
            <img src='/edit.png' alt='x' />
         </div>
      </li>
   );
};

export type { IQuote };
export { Quote };
