import { Request, Response } from 'express';

import allMovies from '../persist';

export default class SearchGenreController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { genre } = request.query;

    if (!genre) {
      return response.json(allMovies);
    }

    const filteredMovies = allMovies.filter((movie) => movie.genre.toLowerCase().indexOf(genre.toString().toLowerCase()) !== -1);

    return response.send(filteredMovies);
  }
}
