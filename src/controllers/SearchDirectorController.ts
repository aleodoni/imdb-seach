import { Request, Response } from 'express';

import allMovies from '../persist';

export default class SearchDirectorController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { director } = request.query;

    if (!director) {
      return response.json(allMovies);
    }

    const filteredMovies = allMovies.filter((movie) => movie.director.toLocaleLowerCase() === director.toString().toLowerCase());

    return response.send(filteredMovies);
  }
}
