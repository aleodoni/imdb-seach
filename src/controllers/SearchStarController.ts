import { Request, Response } from 'express';

import allMovies from '../persist';

export default class SearchStarController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { star } = request.query;

    if (!star) {
      return response.json(allMovies);
    }

    const filteredMovies = allMovies.filter((movie) => movie.stars.toLowerCase().indexOf(star.toString().toLowerCase()) !== -1);

    return response.send(filteredMovies);
  }
}
