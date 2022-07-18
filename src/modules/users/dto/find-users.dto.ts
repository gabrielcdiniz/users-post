import { PickType } from '@nestjs/mapped-types';
import { User } from '../schema/user.schema';

export class FindUsersDto extends PickType(User, ['active']) {}
