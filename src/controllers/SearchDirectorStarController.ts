import { Request, Response } from 'express';

import allMovies from '../persist';

export default class SearchDirectorStarController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { director, star } = request.query;

    if (!director && star) {
      const filteredByStar = allMovies.filter((movie) => movie.stars.toLowerCase().indexOf(star.toString().toLowerCase()) !== -1);
      return response.json(filteredByStar);
    } if (director && !star) {
      const filteredByDirector = allMovies.filter((movie) => movie.director.toLowerCase() === director.toString().toLowerCase());
      return response.json(filteredByDirector);
    } if (director && star) {
      const filteredByStarAndDirector = allMovies.filter((movie) => (
        movie.director.toLowerCase() === director.toString().toLowerCase()
          && movie.stars.toLowerCase().indexOf(star.toString().toLowerCase()) !== -1));
      return response.json(filteredByStarAndDirector);
    }

    return response.json({});
  }
}
