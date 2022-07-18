import { OmitType, PartialType } from '@nestjs/mapped-types';
import { User } from '../schema/user.schema';

export class UpdateUserDto extends PartialType(OmitType(User, ['id'])) {}
