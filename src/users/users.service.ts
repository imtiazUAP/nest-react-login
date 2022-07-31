import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
  async signUp(params: any): Promise<any> {
    return await this.userRepository
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        { name: params.name, password: params.password },
    ])
    .execute();
  }
}
