import { Router } from 'express';
import SearchStarController from '../controllers/SearchStarController';

const starRouter = Router();

const searchStarController = new SearchStarController();

starRouter.get('/', searchStarController.index);

export default starRouter;
