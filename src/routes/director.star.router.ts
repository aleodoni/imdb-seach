import { Router } from 'express';
import SearchDirectorStarController from '../controllers/SearchDirectorStarController';

const directorRouter = Router();

const searchDirectorStarController = new SearchDirectorStarController();

directorRouter.get('/', searchDirectorStarController.index);

export default directorRouter;
