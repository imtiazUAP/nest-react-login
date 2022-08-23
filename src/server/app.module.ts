import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import config from 'ormconfig';
import { User } from './entities/users.entity';
import { MoviesModule } from './movies/movies.module';
import { Movies } from './entities/movies.entity';
import { NextModule } from './next/next.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Movies]),
    UsersModule,
    MoviesModule,
    NextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
