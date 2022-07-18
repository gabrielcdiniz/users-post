import { PickType } from '@nestjs/mapped-types';
import { User } from '../schema/user.schema';

export class FindUserDto extends PickType(User, ['id']) {}
