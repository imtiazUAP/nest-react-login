import { Injectable } from '@nestjs/common';
import { Memories } from 'src/server/entities/memories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MemoriesService {
  constructor(
    @InjectRepository(Memories)
    private memoryRepository: Repository<Memories>,
  ) {}
  async addMemory(params: any): Promise<any> {
    const currentTime = Date();
    return await this.memoryRepository
      .createQueryBuilder()
      .insert()
      .into(Memories)
      .values([
        {
          user_id: params.user_id,
          title: params.title,
          description: JSON.stringify(params.description),
          created_at: currentTime.toString(),
          updated_at: currentTime.toString(),
          updated_by: params.updated_by,
        },
      ])
      .execute();
  }

  async getMemoryList(): Promise<any> {
    return await this.memoryRepository.find();
  }

  async getMemoryDetail(id: number): Promise<any> {
    console.log('----- getting memory detail -----');
    return await this.memoryRepository.findOne({ id });
  }

  async updateMemoryById(id: number, descriptionText: any): Promise<any> {
    const memory = await this.memoryRepository.findOne(id);
    const descriptionJsonString = JSON.stringify(descriptionText);
    if (descriptionText) {
      memory.description = descriptionJsonString;
    }
    return await this.memoryRepository.save(memory);
  }

  async deleteMemoryById(id: number) {
    return await this.memoryRepository.delete(id);
  }
}
