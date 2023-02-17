import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NextController } from './next.controller';
import { NextService } from './next.service';

@Module({
  imports: [ConfigModule],
  providers: [NextService],
  controllers: [NextController],
})
export class NextModule {}
