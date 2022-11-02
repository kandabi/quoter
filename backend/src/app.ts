import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import { routes } from './routes';

env.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());
routes(app);

app.listen(port, () => {
   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
