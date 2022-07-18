import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { FindUsersDto } from './dto/find-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  public async findOne(@Param() findUserDto: FindUserDto) {
    const { id } = findUserDto;
    return this.usersService.findOne(id);
  }

  @Get()
  public async findAll(@Query() findUsersDto: FindUsersDto) {
    return this.usersService.findAll(findUsersDto);
  }

  @Patch(':id')
  public async update(
    @Param() findUserDto: FindUserDto,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { id } = findUserDto;
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  public async delete(@Param() findUserDto: FindUserDto) {
    const { id } = findUserDto;
    return this.usersService.delete(id);
  }
}
