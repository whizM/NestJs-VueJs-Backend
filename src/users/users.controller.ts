import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpStatus } from '@nestjs/common';
import { Res } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Res() res, @Body() CreateUserDto: CreateUserDto) {
    const user = await this.usersService.createUser(CreateUserDto);
    return res.status(HttpStatus.OK).json({
        message: "Users has been created successfully",
        user
    })
  }

  @Get()
  async getAllUsers(@Res() res,) {
    const users = await this.usersService.getAllUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async getUser(@Res() res, @Param('id') id: number) {
    const user = await this.usersService.getUser(+id);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  @Put(':id')
  async updateUser(@Res() res, @Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
      const user = await this.usersService.updateUser(+id, UpdateUserDto);
      if (!user) throw new NotFoundException('User does not exist!');
      return res.status(HttpStatus.OK).json({
          message: 'User has been successfully updated',
          user
      });
  }

  @Delete(':id')
  async deleteUser(@Res() res, @Param('id') id: number) {
      const user = await this.usersService.deleteUser(+id);
      if (!user) throw new NotFoundException('User does not exist');
      return res.status(HttpStatus.OK).json({
          message: 'User has been deleted',
          user
      })
  }
}
