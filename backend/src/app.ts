import express, { type Express, type Request, type Response } from 'express';
import recipesRouter from './routes/recipes.ts';
import { connectDB } from './database/db.ts';

const app: Express = express();
const port = 3000;

app.use(express.json());

connectDB().then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
});

app.use('/recipes', recipesRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});