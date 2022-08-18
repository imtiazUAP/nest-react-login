import { Injectable } from '@nestjs/common';
import { Movies } from 'src/entities/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,
  ) {}

  async addMovies(params: any): Promise<any> {
    return await this.moviesRepository
      .createQueryBuilder()
      .insert()
      .into(Movies)
      .values([
        {
          name: params.name,
          language: params.language,
          country: params.country,
          published: params.published,
          imdb_rating: params.imdb_rating,
        },
      ])
      .execute();
  }

  async getMoviesList(): Promise<any> {
    return await this.moviesRepository.find();
  }

  /**
   *
   * @param id
   * @param name
   * @param language
   * @param country
   * @param published
   * @param imdb_rating
   * @returns
   */
  async updateMovieById(
    id: number,
    name: string,
    language: string,
    country: string,
    published: string,
    imdb_rating: number,
  ): Promise<any> {
    const movie = await this.moviesRepository.findOne(id);
    if (name) {
      movie.name = name;
    }
    if (language) {
      movie.language = language;
    }
    if (country) {
      movie.country = country;
    }
    if (published) {
      movie.published = published;
    }
    if (imdb_rating) {
      movie.imdb_rating = imdb_rating;
    }

    return this.moviesRepository.save(movie);
  }

  async deleteMovieById(id: number) {
    return await this.moviesRepository.delete(id);
  }
}
