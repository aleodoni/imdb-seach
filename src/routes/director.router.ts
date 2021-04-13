import { Router } from 'express';
import SearchDirectorController from '../controllers/SearchDirectorController';

const directorRouter = Router();

const searchDirectorController = new SearchDirectorController();

directorRouter.get('/', searchDirectorController.index);

export default directorRouter;
