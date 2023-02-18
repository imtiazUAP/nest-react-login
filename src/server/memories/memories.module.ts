import { Module } from '@nestjs/common';
import { MemoriesController } from './memories.cotroller';
import { MemoriesService } from './memories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memories } from 'src/server/entities/memories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Memories])],
  controllers: [MemoriesController],
  providers: [MemoriesService],
})
export class MemoriesModule {}
