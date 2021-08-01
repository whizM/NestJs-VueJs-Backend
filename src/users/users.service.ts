import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.usersRepository.save(createUserDto);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<UserEntity> {
    return await this.usersRepository.findOne(id);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async deleteUser(id: number) {
    return await this.usersRepository.delete(id);
  }
}
