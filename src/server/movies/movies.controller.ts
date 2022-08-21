import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { AddMoviesBodyParams, updateMoviesBodyParams } from './dto/movies.dto';

@Controller('/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post('/add')
  signUp(@Body() addMoviesBodyParams: AddMoviesBodyParams): any {
    return this.moviesService.addMovies(addMoviesBodyParams);
  }

  @Get('/list')
  getMoviesList(): any {
    return this.moviesService.getMoviesList();
  }

  @Put('/:movie_id')
  updateMovie(
    @Param('movie_id') movieId: number,
    @Body() updateMoviesBodyParams: updateMoviesBodyParams,
  ): any {
    return this.moviesService.updateMovieById(
      movieId,
      updateMoviesBodyParams.name,
      updateMoviesBodyParams.language,
      updateMoviesBodyParams.country,
      updateMoviesBodyParams.published,
      updateMoviesBodyParams.imdb_rating,
    );
  }

  @Delete('/:movie_id')
  deleteMovie(@Param('movie_id') movieId: number): any {
    return this.moviesService.deleteMovieById(movieId);
  }
}
