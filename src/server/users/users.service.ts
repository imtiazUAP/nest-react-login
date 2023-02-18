import { Injectable } from '@nestjs/common';
import { User } from 'src/server/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async signUp(params: any): Promise<any> {
    return await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([{ name: params.name, password: params.password }])
      .execute();
  }

  async getUserList(): Promise<any> {
    return await this.userRepository.find();
  }

  async getUserDetail(id: number): Promise<any> {
    return await this.userRepository.findOne({ id });
  }

  async updateUserById(id: number, name: string): Promise<any> {
    const user = await this.userRepository.findOne(id);
    if (name) {
      user.name = name;
    }

    return this.userRepository.save(user);
  }

  async deleteUserById(id: number) {
    return await this.userRepository.delete(id);
  }
}
