import { Router } from 'express';

import directorRouter from './director.router';
import starRouter from './star.router';
import directorStarRouter from './director.star.router';
import genreRouter from './genre.router';

const routes = Router();

routes.use('/searchByDirector', directorRouter);
routes.use('/searchByStar', starRouter);
routes.use('/searchByDirectorAndStar', directorStarRouter);
routes.use('/searchByGenre', genreRouter);

export default routes;
