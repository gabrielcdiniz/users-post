import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUsersDto } from './dto/find-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  public async findOne(_id: string): Promise<User> {
    return this.userModel.findOne({ _id });
  }

  public async findAll(findUsersDto: FindUsersDto): Promise<User[]> {
    return this.userModel.find(findUsersDto).exec();
  }

  public async update(
    _id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    try {
      return this.userModel.findByIdAndUpdate({ _id }, updateUserDto, {
        new: true,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  public async delete(_id: string): Promise<User> {
    try {
      return this.userModel.findByIdAndDelete({ _id });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
