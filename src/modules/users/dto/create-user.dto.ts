import { OmitType } from '@nestjs/mapped-types';

import { User } from '../schema/user.schema';

export class CreateUserDto extends OmitType(User, ['id', 'active']) {}
