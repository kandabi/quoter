import { pool } from '../db';

const getQuotes = async () => {
   const results = await pool.query('SELECT * FROM quotes');
   return results.rows;
};

const createQuote = async (title: string, author: string) => {
   const result = await pool.query(
      `INSERT INTO quotes 
              (title, author)
       VALUES ($1, $2)`,
      [title, author]
   );
   return result.rowCount > 0;
};

const updateQuote = async (id: number, title: string, author: string) => {
   const result = await pool.query(
      `UPDATE quotes 
       SET title = $1,author = $2
       WHERE id = $3`,
      [title, author, id]
   );
   return result.rowCount > 0;
};

const deleteQuote = async (id: number) => {
   const result = await pool.query(
      `DELETE FROM quotes 
       WHERE id = $1`,
      [id]
   );
   return result.rowCount > 0;
};

export { getQuotes, createQuote, updateQuote, deleteQuote };
