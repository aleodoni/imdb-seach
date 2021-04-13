import { Router } from 'express';
import SearchGenreController from '../controllers/SearchGenreController';

const genreRouter = Router();

const searchGenreController = new SearchGenreController();

genreRouter.get('/', searchGenreController.index);

export default genreRouter;
