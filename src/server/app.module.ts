import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MemoriesModule } from './memories/memories.module';
import config from 'ormconfig';
import { User } from './entities/users.entity';
import { Memories } from './entities/memories.entity';
import { MoviesModule } from './movies/movies.module';
import { Movies } from './entities/movies.entity';
import { NextModule } from './next/next.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Movies, Memories]),
    UsersModule,
    MemoriesModule,
    MoviesModule,
    NextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
